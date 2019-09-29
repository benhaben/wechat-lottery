// pages/attend_lottery/attend_lottery.js
import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import { countDown, formatDate } from "../../utils/function";

// import main from "../../faas/attendLotteryTest";
// import main from "../../faas/approveLotteryTest";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lottery: {
      url: CONST.DEFAULT_URL,
      id: "",
      hash: "",
      total: "",
      lucky_num: 0,
      open_date: null,
      countdownStr: "",
      open_data_str: "",
      open_people_num: 0,
      avatar: "",
      nickname: "",
      sponsor: null,
      desc_initiator: "",
      pic_data: null,
      attend_num: 0,
      attend_avatar_list: [],
      lottery_id: null,
      attendBtnLoading: false,
      selfLuckyNum: 0
    },
    hasAttended: true,
    weight: 0, // 和抽奖无关，和个人相关，所以没放在lottery对象中
    auth: false,
    admin: false, // 管理员可以审批
    showSharePopup: false,
    overlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let that = this;
    let lottery_id = options.id;
    // let lottery_id = "5d7612d71db94f5d2e68fd74";

    if (!lottery_id) {
      return;
    }
    // 获取数据
    try {
      await app.getUserInfo(app.getUserId());
      this.setData({
        selfLuckyNum: app.getLuckyNum(),
        auth: app.hasAuth(),
        lottery_id
      });

      let retRecordPromise = dao.getUserLotteryRecordByLotteryIdAndUserId(
        lottery_id,
        app.getUserId()
      );
      let attendeesPromise = dao.getLotteryAttendees(lottery_id);

      //并行获取数据，防止一个一个获取
      let attendees = await attendeesPromise;
      let retRecord = await retRecordPromise;

      let lottery, hasAttended;
      if (retRecord.data.objects.length === 0) {
        let ret = await dao.getLotteryById(lottery_id);
        lottery = ret.data;
        hasAttended = false;
      } else {
        lottery = retRecord.data.objects[0].lottery;
        // 运气值发生了改变
        let user = retRecord.data.objects[0].user;
        app.setUserInfo(user);
        hasAttended = true;
      }

      let admin = await dao.isAdmin();

      this.setData({
        lottery: {
          id: lottery.id,
          hash: lottery.id.substr(0, 10),
          url: lottery.url,
          total: `${lottery.total_prize / CONST.MONEY_UNIT}元/100人`,
          lucky_num: lottery.lucky_num,
          open_people_num: lottery.open_people_num,
          avatar: lottery.avatar,
          nickname: lottery.nickname,
          sponsor: lottery.sponsor,
          product_name: lottery.product_name,
          product_num: lottery.product_num,
          lottery_type: lottery.lottery_type,
          desc_initiator: lottery.desc_initiator,
          pic_data: lottery.pic_data,
          open_date: lottery.open_date,
          fudai_num: CONST.PLANS_LUCKY_PACKAGE[lottery.plan_index],
          status: lottery.status,
          attend_num: attendees.data.meta.total_count,
          attend_avatar_list: attendees.data.objects.map(
            item => item.avatar_cache
          ),
          countdownStr: countDown(lottery.open_date),
          open_data_str: formatDate(Date.parse(lottery.open_date))
        },
        hasAttended,
        admin
      });
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * 100个运气值去参与100个抽奖，总权重是100，去参与一个抽奖，总权重是199。这是鼓励用户在一个抽奖里多消耗运气值
   * @param e
   */
  onAddWeight: function(e) {
    // 要留一个参与现在的抽奖
    if (this.data.hasAttended || this.data.selfLuckyNum <= 1) {
      return;
    }

    let weight = this.data.weight + CONST.ONE_LUCKY_NUM_WEIGHT;
    let selfLuckyNum = this.data.selfLuckyNum - 1;
    this.setData({ weight, selfLuckyNum });
  },
  goToAddLottery: function(e) {
    wx.navigateTo({
      url: `${ROUTE.ADD_LOTTERY}`
    });
  },
  onAttend: async function(event) {
    // 调用云函数

    const formId = event.detail.formId;
    if (formId) {
      wx.BaaS.wxReportTicket(formId);
      console.log(`event.detail.formId - ${event.detail.formId}`);
    }

    if (this.data.hasAttended) {
      return;
    }

    try {
      this.setData({ attendBtnLoading: true });

      // main(
      //   {
      //     data: {
      //       weight: this.data.weight,
      //       lottery_id: this.data.lottery_id
      //     },
      //     request: { user: { id: app.getUserId() } }
      //   },
      //   (err, ret) => {
      //     console.log(err);
      //   }
      // );

      let res = await dao.attendLottery({
        weight: this.data.weight,
        lottery_id: this.data.lottery_id
      });
      if (res) {
        this.setData({ attendBtnLoading: false, hasAttended: true });
      } else {
        this.setData({ attendBtnLoading: false });
      }
    } catch (e) {
      this.setData({ attendBtnLoading: false });
      console.log(e);
    }
  },

  //TODO: 可以做一个共享的behavior
  userInfoHandler(data) {
    let that = this;
    wx.BaaS.auth.loginWithWechat(data).then(
      async user => {
        // user 包含用户完整信息，详见下方描述
        await app.getUserInfo(user.get("id"));
        that.setData({
          auth: app.hasAuth()
        });
      },
      err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
      }
    );
  },
  onGoToAttendees() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.lottery_id}&type=${CONST.GET_ATTENDEES}`
    });
  },
  onCloseSharePopup() {
    this.setData({ overlay: false, showSharePopup: false });
  },
  onShare: function(e) {
    this.setData({ overlay: true, showSharePopup: true });
  },
  genPic: function(e) {
    let that = this;
    wx.navigateTo({
      url: `${ROUTE.SHARE_PIC}`,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit(
          ROUTE_DATA.FROM_ATTEND_LOTTERY_TO_SHARE_PIC,
          that.data
        );
      }
    });
  },
  onShareAppMessage: function() {
    this.setData({ overlay: false, showSharePopup: false });

    return {
      title: `${app.getNickname()}邀请你参与【好运码头官方粉丝代表】发起的抽奖`,
      path: `${ROUTE.ATTEND_LOTTERY}?id=${
        this.data.lottery_id
      }&nickname=${app.getNickname()}`,
      success: function(res) {
        console.log("成功", res);
      }
    };
  },
  async onApprove() {
    try {
      // await main(
      //   {
      //     data: {
      //       id: "5d83295f09e085798d1879ef",
      //       status: 2
      //     },
      //     request: { user: { id: "81550584324453" } }
      //   },
      //   (err, msg) => {
      //     debugger;
      //     console.log(err);
      //   }
      // );

      let ret = await dao.approveLottery(this.data.id, CONST.APPROVED);
      Toast.success("审批通过成功");
      wx.navigateBack();
    } catch (e) {
      console.log(e);
    }
  },
  async onReject() {
    try {
      await dao.approveLottery(this.data.id, CONST.REJECTED);
      Toast.success("已驳回");
      wx.navigateBack();
    } catch (e) {
      console.log(e);
    }
  }
});

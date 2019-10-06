// pages/attend_lottery/attend_lottery.js
import { CONST, ROUTE } from "../../utils/constants";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import {
  countDown,
  debounce,
  formatDate,
  throttle
} from "../../utils/function";
import {
  DEFAULT_SPONSOR,
  ROUTE_DATA,
  WECHAT_SCENE
} from "../../utils/uiConstants";
import { deSceneOfAttendPage } from "../../utils/uiFunction";

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
      url: "",
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
      attendBtnLoading: false
    },
    hasAttended: true,
    costLuckNum: 0,
    selfLuckyNum: 0, // 大于1才能抽奖，因为抽奖要消耗一个运气值
    weight: 0, // 和抽奖无关，和个人相关，所以没放在lottery对象中
    weight_rate: "暂无排名",
    weight_loading: false,
    auth: false,
    admin: false, // 管理员可以审批
    showSharePopup: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let { scene, id, inviter_uid } = options;

    // 获取数据
    try {
      console.log(`options : ${JSON.stringify(options)}`);
      // 假设扫码过来的 query 在 onLoad 可以拿到
      if (inviter_uid && id) {
        let ret = await dao.addInviter(inviter_uid);
        console.log(ret);
        // 从分享会话进入
        app.sendReportAnalytics(WECHAT_SCENE.FROM_CHAT);
      } else if (scene) {
        let deRet = deSceneOfAttendPage(scene);
        inviter_uid = deRet.inviter_uid;
        let prefix_id = deRet.prefix_lottery_id;
        let fullIdRes = await dao.queryLottery(1, 0, prefix_id);
        id = fullIdRes.data.objects[0].id;
        let ret = await dao.addInviter(inviter_uid);
        console.log(ret);
        // 从分享海报进入
        app.sendReportAnalytics(WECHAT_SCENE.FROM_POSTER);
      } else {
        // 默认进入
        app.sendReportAnalytics(WECHAT_SCENE.FROM_DEFAULT);
      }

      if (!id) {
        return;
      }

      await app.getUserInfo(app.getUserId());
      this.setData({
        auth: app.hasAuth()
      });

      let retRecordPromise = dao.getUserLotteryRecordByLotteryIdAndUserId(
        id,
        app.getUserId()
      );
      let attendeesPromise = dao.getLotteryAttendees(id);

      //并行获取数据，防止一个一个获取
      let attendees = await attendeesPromise;
      let retRecord = await retRecordPromise;

      let lottery, hasAttended;
      if (retRecord.data.objects.length === 0) {
        let ret = await dao.getLotteryById(id);
        lottery = ret.data;
        hasAttended = false;
      } else {
        lottery = retRecord.data.objects[0].lottery;
        let user = retRecord.data.objects[0].user;
        app.setUserInfo(user); // 顺便更新一下
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
          hongbao_num: CONST.HONGBAO_NUM,
          fudai_num: CONST.FUDAI_NUM,
          status: lottery.status,
          attend_num: attendees.data.meta.total_count,
          attend_avatar_list: attendees.data.objects.map(
            item => item.avatar_cache
          ),
          countdownStr: countDown(lottery.open_date),
          open_data_str: formatDate(Date.parse(lottery.open_date))
        },
        selfLuckyNum: app.getLuckyNum(),
        weight: hasAttended ? retRecord.data.objects[0].weight : 0,
        costLuckNum: hasAttended ? retRecord.data.objects[0].weight / 2 : 0,
        hasAttended,
        admin
      });
    } catch (e) {
      console.log(e);
    }
  },

  onWeightDrag(event) {
    // 滑块是10~100之间 ~ 运气值消耗0到最大

    let costLuckNum = Math.floor(
      (event.detail.value / 100) * this.data.selfLuckyNum
    );
    let weight = costLuckNum * 2;
    console.log(
      `event.detail.value : ${event.detail.value} - weight : ${weight}`
    );

    this.setData({
      costLuckNum,
      weight,
      weight_loading: true
    });

    let id = this.data.lottery.id;
    this.getWeightRate(weight, id);
  },
  getWeightRate: debounce(async function(weight, id) {
    let that = this;
    console.log(`getWeightRate - weight: ${weight}，id: ${id}`);

    setTimeout(() => {
      that.setData({
        weight_loading: false,
        weight_rate: "100名以内"
      });
    }, 1500);
  }),

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

    if (this.data.selfLuckyNum < 1) {
      Toast.fail("运气值不足");
      return;
    }

    try {
      this.setData({ attendBtnLoading: true });

      // main(
      //   {
      //     data: {
      //       weight: this.data.weight,
      //       lottery_id: this.data.lottery.id
      //     },
      //     request: { user: { id: app.getUserId() } }
      //   },
      //   (err, ret) => {
      //     console.log(err);
      //   }
      // );

      let res = await dao.attendLottery({
        weight: this.data.weight,
        lottery_id: this.data.lottery.id
      });

      // 更新一下抽奖人数和头像
      let attendees = await dao.getLotteryAttendees(this.data.lottery.id);
      this.data.lottery.attend_num = attendees.data.meta.total_count;
      this.data.lottery.attend_avatar_list = attendees.data.objects.map(
        item => item.avatar_cache
      );

      this.setData(this.data);
      // 参与抽奖会减少运气值，这边重新获取运气值，不要要重置 selfLuckyNum，因为当前页面不能操作了
      await app.getUserInfo();
      app.sendAttendLotteryEvent(this.data.lottery.id, this.data.lottery_type);
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
      url: `${ROUTE.ATTENDEES}?id=${this.data.lottery.id}&type=${CONST.GET_ATTENDEES}`
    });
  },
  onCloseSharePopup() {
    this.setData({ showSharePopup: false });
  },
  onShare: function(e) {
    this.setData({ showSharePopup: true });
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
    this.setData({ showSharePopup: false });
  },
  onShareAppMessage: function() {
    this.setData({ showSharePopup: false });

    return {
      title: `${app.getNickname()}邀请你参与【${DEFAULT_SPONSOR}】发起的抽奖`,
      path: `${ROUTE.ATTEND_LOTTERY}?id=${
        this.data.lottery.id
      }&inviter_uid=${app.getUserId()}`,
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

      let ret = await dao.approveLottery(this.data.lottery.id, CONST.APPROVED);
      Toast.success("审批通过成功");
      wx.navigateBack();
    } catch (e) {
      console.log(e);
    }
  },
  async onReject() {
    try {
      await dao.approveLottery(this.data.lottery.id, CONST.REJECTED);
      Toast.success("已驳回");
      wx.navigateBack();
    } catch (e) {
      console.log(e);
    }
  }
});

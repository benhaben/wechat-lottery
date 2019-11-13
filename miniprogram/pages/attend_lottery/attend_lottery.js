// pages/attend_lottery/attend_lottery.js
import Poster from "../../components/poster-gen-canvas/poster/poster";
import { CONST, ROUTE } from "../../utils/constants";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import {
  countDown,
  debounce,
  formatDate,
  randomProductUrl
} from "../../utils/function";
import {
  DEFAULT_SPONSOR,
  PAGE_SIZE,
  ROUTE_DATA
} from "../../utils/uiConstants";
import {
  base64ToFile,
  deSceneOfAttendPage,
  genSceneOfAttendPage,
  getRemoteUrlLocalPath,
  getTitleAndRule
} from "../../utils/uiFunction";
import wxPromise from "../../utils/wxPromise";

// import main from "../../faas/attendLotteryTest";
// import main from "../../faas/approveLotteryTest";
const { regeneratorRuntime } = global;
const app = getApp();

const red = "#D55B51";
const gray = "#8a8a8a";
const black = "#323233";
const white = "#fff";
const pixelRatio = 1;
let posterConfig = {
  width: 660,
  height: 528,
  debug: false,
  pixelRatio: pixelRatio,
  blocks: [
    {
      width: 660,
      height: 528,
      borderWidth: 30,
      backgroundColor: white,
      borderColor: red,
      x: 0,
      y: 0,
      zIndex: 100
    }
  ],
  texts: [
    {
      x: 68,
      y: 400,
      width: 460 * pixelRatio,
      textAlign: "left",
      baseLine: "middle",
      text: "长按识别小程序码",
      fontSize: 36,
      color: black,
      zIndex: 200
    },
    {
      x: 68,
      y: 448,
      width: 460 * pixelRatio,
      textAlign: "left",
      baseLine: "middle",
      text: "长按识别小程序码",
      fontSize: 24,
      color: gray,
      zIndex: 200
    }
  ],
  images: [
    {
      width: 520,
      height: 312,
      borderRadius: 10,
      x: 68,
      y: 56,
      url: "",
      zIndex: 200
    }
  ]
};

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lottery: {
      lottery_type: CONST.LOTTERY_TYPE_PRODUCT,
      url: CONST.DEFAULT_BG,
      id: "",
      hash: "",
      total: "",
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
      attendBtnLoading: false,
      hasAttended: true
    },
    costLuckNum: 0, // 消耗的淘货点
    selfLuckyNum: 0, // 大于1才能抽奖，因为抽奖要消耗一个淘货点
    weight: 0, // 和抽奖无关，和个人相关，所以没放在lottery对象中
    weight_rate: "暂无",
    weight_loading: false,
    is_authorized: false,
    admin: false, // 管理员可以审批
    showSharePopup: false,
    show_top: false,
    home: {} //首页的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      console.log(`options : ${JSON.stringify(options)}`);
      let { scene, id, inviter_uid } = options;
      wx.showLoading({
        title: "正在加载"
      });

      await app.silentLogin();

      const eventChannel = this.getOpenerEventChannel();
      if (eventChannel) {
        this.eventChannel = eventChannel;
      }
      // 假设扫码过来的 query 在 onLoad 可以拿到
      if (inviter_uid && id) {
        // 从分享会话进入
        this.addInviter(inviter_uid);
      } else if (scene) {
        let deRet = deSceneOfAttendPage(scene);
        inviter_uid = deRet.inviter_uid;
        let prefix_id = deRet.prefix_lottery_id;
        let fullIdRes = await dao.queryLottery(1, 0, prefix_id);
        id = fullIdRes.data.objects[0].id;
        this.addInviter(inviter_uid);
      } else {
      }
      if (id) {
        await this.load(id);
      }
      wx.hideLoading();
    } catch (e) {
      wx.hideLoading();
      console.log(e);
    }
  },
  addInviter(inviter_uid) {
    let that = this;
    setTimeout(async () => {
      let user_id = app.getUserId();
      if (user_id) {
        await dao.addInviter(inviter_uid);
      }
    }, 100);
  },
  async load(id) {
    // 获取数据

    let user_id = app.getUserId();
    let retRecordPromise;
    if (user_id) {
      this.setData({
        is_authorized: app.hasAuth()
      });
      retRecordPromise = dao.getUserLotteryRecordByLotteryIdAndUserId(
        id,
        app.getUserId()
      );
    }
    let attendeesPromise = dao.getLotteryAttendees(id);
    //并行获取数据，防止一个一个获取
    let attendees = await attendeesPromise;
    let retRecord = await retRecordPromise;

    let lottery, hasAttended;
    if (!user_id || retRecord.data.objects.length === 0) {
      let ret = await dao.getLotteryById(id);
      lottery = ret.data;
      hasAttended = false;
    } else {
      lottery = retRecord.data.objects[0].lottery;
      let user = retRecord.data.objects[0].user;
      app.setUserInfo(user); // 顺便更新一下
      hasAttended = true;
    }

    this.setData({
      lottery: {
        id: lottery.id,
        hash: lottery.id.substr(0, 10),
        total: `${lottery.total_prize / CONST.MONEY_UNIT}元/100人`,
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
        open_data_str: formatDate(Date.parse(lottery.open_date)),
        show_in_main: lottery.show_in_main,
        hasAttended,
        attend_id: hasAttended ? retRecord.data.objects[0].id : null
      },
      selfLuckyNum: app.getLuckyNum(),
      old_weight: hasAttended ? retRecord.data.objects[0].weight : 0,
      weight: hasAttended ? retRecord.data.objects[0].weight : 0,
      costLuckNum: hasAttended ? retRecord.data.objects[0].weight : 0
    });
    let that = this;
    //加快加载速度
    setTimeout(async () => {
      let imagePathPromise = getRemoteUrlLocalPath(lottery.url);
      let user_id = app.getUserId();
      if (user_id) {
        let isAdminPromise = dao.isAdmin();
        let wxCodePromise = that.getWxCode();
        that.data.admin = await isAdminPromise;
        that.data.lottery.wxCode = await wxCodePromise;
      }
      that.data.lottery.image_path = await imagePathPromise;
      that.setData(that.data);
      that.onCreatePoster();
      if (hasAttended) {
        let weight = that.data.weight;
        that.getWeightRate(id, weight);
      } else {
        that.getWeightRate(id, 0);
      }
    });
  },
  onShowTop: function(event) {
    this.setData({
      show_top: !this.data.show_top
    });
  },
  onWeightChange: debounce(function(event) {
    // 滑块是10~100之间 ~ 淘货点消耗0到最大

    let costLuckNum = parseInt(event.detail);
    let hasAttended = this.data.lottery.hasAttended;
    let weight = costLuckNum;
    let old_weight = this.data.old_weight;
    let id = this.data.lottery.id;
    let add = weight - old_weight;
    if (hasAttended) {
      // 减少没有作用
      // 增加必须在现有淘货点范围内，要保存一个老的权重值
      // 直接发送增加的权重
      if (add < 0) {
        Toast.fail("不能减少权重");
        this.setData({
          weight: old_weight
        });
        return;
      } else if (add > 0) {
        let ret = dao.addWeight({
          lottery_id: this.data.lottery.id,
          attend_id: this.data.lottery.attend_id,
          weight: add
        });
        if (ret) {
          let selfLuckyNum = this.data.selfLuckyNum - add;

          this.setData({
            weight: old_weight + add,
            old_weight: old_weight + add,
            costLuckNum,
            weight_loading: true,
            selfLuckyNum
          });
          this.getWeightRate(id, this.data.weight);
        }
      }
    } else {
      console.log(`weight : ${weight}`);
      this.setData({
        costLuckNum,
        weight,
        weight_loading: true
      });
      this.getWeightRate(id, weight);
    }
  }),
  getWeightRate: debounce(async function(id, weight) {
    let that = this;
    console.log(`getWeightRate - weight: ${weight}，id: ${id}`);
    let top3Promise = dao.getTopNWeight(id, 3);
    let wrPromise = dao.getWeightRate(app.getUserId(), id, weight);
    let weight_rate = await wrPromise;
    let weight_top3 = await top3Promise;
    that.setData({
      weight_loading: false,
      weight_rate,
      weight_top3
    });
  }),
  goToAddLottery: function(e) {
    wx.navigateTo({
      url: `${ROUTE.ADD_LOTTERY}`
    });
  },
  onAttend: async function(event) {
    // 调用云函数
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      if (this.data.lottery.hasAttended) {
        return;
      }

      if (this.data.selfLuckyNum < 1) {
        Toast.fail("淘货点不足");
        return;
      }
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
      if (res) {
        // 更新一下抽奖人数和头像
        let attendees = await dao.getLotteryAttendees(this.data.lottery.id);
        this.data.lottery.attend_num = attendees.data.meta.total_count;
        this.data.lottery.attend_avatar_list = attendees.data.objects.map(
          item => item.avatar_cache
        );
        this.setData(this.data);
        await app.getUserInfo();
        this.data.selfLuckyNum = app.getLuckyNum();
        this.data.attendBtnLoading = false;
        this.data.lottery.hasAttended = true;
        this.setData(this.data);
        this.eventChannel.emit(
          ROUTE_DATA.FROM_ATTEND_LOTTERY_TO_HOME,
          this.data.lottery.id
        );
        app.sendAttendLotteryEvent(
          this.data.lottery.id,
          this.data.lottery.lottery_type
        );
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
          is_authorized: app.hasAuth()
        });
        await this.load(that.data.lottery.id);
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
  getWxCode: async function() {
    let download_url;
    try {
      let user_id = app.getUserId(); //14
      let scene = genSceneOfAttendPage(user_id, this.data.lottery.id);
      let res = await wx.BaaS.getWXACode(
        "wxacodeunlimit",
        {
          scene,
          page: `${ROUTE.ATTEND_LOTTERY.substring(1)}`
        },
        false
      );
      download_url = await base64ToFile(res.image);
    } catch (e) {
      console.log(e);
    }
    return download_url;
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
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: throttle(async function() {
  //   let lotteries = this.data.home.lotteries;
  //   for (let i = 0; i < lotteries.length; i++) {
  //     if (lotteries[i].id === this.data.lottery.id) {
  //       let next = i + 1;
  //       if (next < lotteries.length) {
  //         await this.load(lotteries[next].id);
  //       } else {
  //       }
  //     }
  //   }
  // }),
  onShareAppMessage: function() {
    this.setData({ showSharePopup: false });
    let nickname = app.getNickname();
    let title, path;
    if (nickname) {
      title = `${app.getNickname()}邀请你参与【${DEFAULT_SPONSOR}】发起的抽奖`;
      path = `${ROUTE.ATTEND_LOTTERY}?id=${
        this.data.lottery.id
      }&inviter_uid=${app.getUserId()}`;
    } else {
      title = `邀请你参与【${DEFAULT_SPONSOR}】发起的抽奖`;
      path = `${ROUTE.ATTEND_LOTTERY}?id=${this.data.lottery.id}`;
    }
    return {
      title: title,
      path: path,
      imageUrl: this.share_url,
      success: function(res) {
        console.log("成功", res);
      }
    };
  },
  onPosterSuccess(e) {
    const { detail } = e;
    console.log(detail);
    this.share_url = detail;
  },
  onPosterFail(err) {
    console.error(err);
  },

  /**
   * 异步生成海报
   */
  onCreatePoster() {
    let { lottery } = this.data;
    posterConfig.images[0].url = lottery.image_path;

    let { title, rule } = getTitleAndRule(lottery);
    posterConfig.texts[0].text = title;
    posterConfig.texts[1].text = rule;

    this.setData(
      {
        posterConfig: posterConfig
      },
      () => {
        Poster.create(true); // 入参：true为抹掉重新生成
      }
    );
  }
});

// "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iHJdbfP0wsLHZvg.jpg"

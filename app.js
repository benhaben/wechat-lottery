global.regeneratorRuntime = require("./utils/regenerator/runtime-module");
import store from "./utils/store.js";
import {
  WECHAT_SCENE,
  ATTEND_LOTTERY_EVENT,
  ANA_USER_SOURCE
} from "./utils/uiConstants";
import SystemInfoUtil from "./utils/systemInfoUtil";

App({
  onLaunch: function() {
    wx.BaaS = requirePlugin("sdkPlugin");

    // 让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment);

    let clientID = this.globalData.clientId;
    wx.BaaS.init(clientID);
    SystemInfoUtil.init();
  },
  hasAuth: function() {
    let user = store.getUserInfo();
    return user.is_authorized;
  },
  getAvatar: function() {
    let user = store.getUserInfo();
    return user.avatar;
  },
  getNickname: function() {
    let user = store.getUserInfo();
    return user.nickname;
  },
  getUserId: function() {
    let user = store.getUserInfo();
    return user.id;
  },
  getLuckyNum: function() {
    let user = store.getUserInfo();
    return user.lucky_num;
  },
  getDesc: function() {
    let user = store.getUserInfo();
    return user.desc;
  },
  getAdsData: function() {
    let user = store.getUserInfo();
    return user.pic_data ? user.pic_data : [];
  },
  getBalance: function() {
    let user = store.getUserInfo();
    if (!user) {
      return 0;
    } else {
      return user.balance;
    }
  },
  setUserInfo: function(userInfo) {
    store.setUserInfo(userInfo);
  },
  /**
   * 从云端拿到最新的数据
   * @param uid
   * @returns {Promise<*>}
   */
  getUserInfo: async function(uid) {
    if (!uid) {
      uid = this.getUserId();
    }

    let userInfo;
    if (uid) {
      let MyUser = new wx.BaaS.User();
      let res = await MyUser.get(uid);
      userInfo = res.data;
      store.setUserInfo(userInfo);
    }
    return userInfo;
  },

  saveInvitationInfo({ uid, lotteryID }) {
    wx.BaaS.storage.set("my_inviter_uid", uid);
    wx.BaaS.storage.set("invitation_lottery_id", lotteryID);
  },
  getInvitationInfo() {
    let uid = wx.BaaS.storage.get("my_inviter_uid");
    uid = uid ? Number(uid) : uid;
    let lotteryID = wx.BaaS.storage.get("invitation_lottery_id");
    return {
      uid,
      lotteryID
    };
  },
  sendAttendLotteryEvent(id, lottery_type) {
    wx.reportAnalytics(ATTEND_LOTTERY_EVENT, {
      lottery_type: parseInt(lottery_type),
      id: id
    });
  },
  onShow: function(options) {
    // 上报模版消息卡片点击事
    wx.BaaS.reportTemplateMsgAnalytics(options);
    let user_id = this.getUserId();
    if (!user_id) {
      let self = this;
      wx.BaaS.auth
        .getCurrentUser()
        .then(user => {
          self.getUserInfo(user.get("id"));
        })
        .catch(err => {
          wx.BaaS.auth.loginWithWechat().then(user => {
            self.getUserInfo(user.get("id"));
          });
        });
    }
  },

  globalData: {
    clientId: "637bcefdc238706ba166" // 从 BaaS 后台获取 ClientID
  }
});

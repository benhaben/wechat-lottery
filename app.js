global.regeneratorRuntime = require("./utils/regenerator/runtime-module");
import store from "./utils/store.js";

App({
  onLaunch: function() {
    wx.BaaS = requirePlugin("sdkPlugin");

    // 让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment);

    let clientID = this.globalData.clientId;
    wx.BaaS.init(clientID);

    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.globalData.systemInfo = res;
      }
    });
  },
  hasAuth: function() {
    let user = store.getUserInfo();
    return !!user.nickname;
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
  getTagItems: function() {
    let user = store.getUserInfo();
    return user.tag_items;
  },
  setUserInfo: function(userInfo) {
    store.setUserInfo(userInfo);
  },
  getUserInfo: async function(uid) {
    if (!uid) {
      uid = this.getUserId();
    }
    let MyUser = new wx.BaaS.User();
    let res = await MyUser.get(uid);
    var userInfo = res.data;
    store.setUserInfo(userInfo);
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
  onShow: function(options) {
    // 上报模版消息卡片点击事
    wx.BaaS.reportTemplateMsgAnalytics(options);

    var self = this;
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
  },

  globalData: {
    systemInfo: null,
    clientId: "637bcefdc238706ba166" // 从 BaaS 后台获取 ClientID
  }
});

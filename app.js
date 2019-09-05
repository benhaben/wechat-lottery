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
  getUserInfo: function(uid) {
    let MyUser = new wx.BaaS.User();
    MyUser.get(uid).then(res => {
      var userInfo = res.data;
      store.setUserInfo(userInfo);
    });
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

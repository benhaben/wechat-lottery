
let rep = require('utils/repository.js')
global.regeneratorRuntime = require('./utils/regenerator/runtime-module')

App({
  onLaunch: function() {

    wx.BaaS = requirePlugin('sdkPlugin')

    // 让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    let clientID = this.globalData.clientId
    wx.BaaS.init(clientID)
  },
  onShow: function(options) {
    // 上报模版消息卡片点击事
    wx.BaaS.reportTemplateMsgAnalytics(options)
  },

  globalData: {
    clientId: '637bcefdc238706ba166', // 从 BaaS 后台获取 ClientID
    tb_lottery: 'lottery', // tb 表示表的名字
    tb_lottery_record: 'lottery_record',
    tb_inviter: 'inviter',
  }
})
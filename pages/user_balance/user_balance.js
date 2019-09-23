// pages/user_balance/user_balance.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { CONST, PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import { countDown } from "../../utils/function";
const { regeneratorRuntime } = global;
const app = getApp();

/**
 * 提现需要审批
 * 企业付款
 * https://doc.minapp.com/cloud-function/node-sdk/wx-promotion-transfer.html
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    balance: app.getBalance(),
    money: 0,
    error: null,
    loading: false,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    debugger;
  },
  onGotoBalanceDetails() {
    wx.navigateTo({
      url: ROUTE.USER_BALANCE_DETAILS
    });
  },
  async onConfirm(event) {
    // 检查是否是数字，键盘是number，已经保证了
    // 检查余额是否足够
    // 检查是否在1~100之间是整数

    const formId = event.detail.formId;
    if (formId) {
      wx.BaaS.wxReportTicket(formId);
      console.log(`event.detail.formId - ${event.detail.formId}`);
    }

    try {
      let balance = this.data.balance;
      let money = this.data.money;
      if (money > balance) {
        this.setData({
          error: "余额不足"
        });
        return;
      }

      //TODO: 调用服务端

      this.setData({
        show: true
      });
    } catch (e) {
      console.log(e);
    }
  }
});

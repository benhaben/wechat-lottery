// pages/user_balance/user_balance.js
import { ROUTE } from "../../utils/constants";
import Dialog from "../../lib/van/dialog/dialog";
/**
 * 企业付款
 * https://doc.minapp.com/cloud-function/node-sdk/wx-promotion-transfer.html
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    balance: 1.99,
    money: 1,
    error: null,
    loading: false,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  onGotoBalanceDetails() {
    wx.navigateTo({
      url: ROUTE.USER_BALANCE_DETAILS
    });
  },
  async onConfirm() {
    // 检查是否是数字，键盘是number，已经保证了
    // 检查余额是否足够
    // 检查是否在1~100之间是整数
    try {
      let balance = this.data.balance;
      let money = this.data.money;
      if (money > balance) {
        this.setData({
          error: "余额不足"
        });
        throw new Error("余额不足");
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

// pages/user_balance/user_balance.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import {
  CONST,
  ERR_TYPE,
  PAGE_SIZE,
  ROUTE,
  ROUTE_DATA,
  SUCCESS_TYPE
} from "../../utils/constants";
import { countDown } from "../../utils/function";
import { vWithdrawMoney } from "../../utils/validateFn";

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
    balance: 0,
    money: null,
    error: null,
    loading: false,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    await app.getUserInfo();
    this.setData({
      balance: app.getBalance() / CONST.MONEY_UNIT
    });
  },
  onGotoBalanceDetails() {
    wx.navigateTo({
      url: ROUTE.USER_BALANCE_DETAILS
    });
  },
  onMoneyChange(event) {
    this.setData({
      money: event.detail,
      error: null
    });
  },
  async onConfirm(event) {
    // 检查是否是数字，键盘是number，已经保证了
    // 检查余额是否足够
    // 检查是否在1~100之间是整数

    try {
      this.setData({
        loading: true
      });
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      let balance = this.data.balance * CONST.MONEY_UNIT;
      let money = this.data.money * CONST.MONEY_UNIT;

      vWithdrawMoney(money, balance);

      let ret = await dao.createWithdraw(money);
      if (ret) {
        await app.getUserInfo();

        this.setData({
          balance: app.getBalance() / CONST.MONEY_UNIT,
          loading: false
        });
        Toast.success(SUCCESS_TYPE.WITHDRAW_CREATE_SUCCESS);
      } else {
        this.setData({ loading: false });
        Toast(ERR_TYPE.WITHDRAW_DAILY_ONCE);
      }
    } catch (e) {
      this.setData({
        loading: false,
        error: e.message
      });
      console.log(e);
    }
  }
});

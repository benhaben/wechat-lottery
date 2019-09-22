import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dap from "../../utils/dao";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    url: app.getAvatar(),
    nickname: app.getNickname(),
    total: 60,
    send_num: 1,
    get_num: 2
  },
  onShow() {
    this.getTabBar().init();
  },
  onGotoSign() {
    wx.navigateTo({
      url: ROUTE.USER_LUCKY
    });
  },
  onAllLotteries() {
    wx.navigateTo({
      url: ROUTE.USER_ALL_LOTTERIES
    });
  },
  onSendLotteries() {
    wx.navigateTo({
      url: ROUTE.USER_SEND_LOTTERIES
    });
  },
  onGetLotteries() {
    wx.navigateTo({
      url: ROUTE.USER_GET_LOTTERIES
    });
  }
});

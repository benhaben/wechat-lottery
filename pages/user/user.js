import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    url: app.getAvatar(),
    nickname: app.getNickname(),
    total: 60,
    send_num: 1,
    get_num: 2,
    admin: false
  },
  async onLoad() {
    try {
      let admin = await dao.isAdmin();
      this.setData({
        admin
      });
    } catch (e) {
      console.log(e);
    }
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

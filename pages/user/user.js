import { CONST, PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    url: app.getAvatar(),
    nickname: app.getNickname(),
    total: 0,
    send_num: 0,
    get_num: 0,
    admin: false
  },
  async onLoad() {
    try {
      let adminPromise = dao.isAdmin();
      let lotteriesPromise = dao.getAllAttendLotteries(0, 0, app.getUserId());
      let sendsPromise = dao.getSendLotteries(0, 0, app.getUserId());
      let winPromise = dao.getWinLotteries(0, 0, app.getUserId());
      let admin = await adminPromise;
      let lotteriesRes = await lotteriesPromise;
      let sendsRes = await sendsPromise;
      let winRes = await winPromise;
      let total = lotteriesRes.data.meta.total_count;
      let send_num = sendsRes.data.meta.total_count;
      let get_num = winRes.data.meta.total_count;

      this.setData({
        admin,
        total,
        send_num,
        get_num
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

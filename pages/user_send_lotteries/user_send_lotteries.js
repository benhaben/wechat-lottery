// pages/user_send_lotteries/user_send_lotteries.js
import dao from "../../utils/dao";
import { PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import { countDown, throttle } from "../../utils/function";
// import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    offset: 0, // 加载更多的时候偏移量
    lotteries: []
  },

  loadMore: async function(event) {
    let lotteries = await dao.getSendLotteries(
      PAGE_SIZE,
      this.data.offset,
      app.getUserId()
    );
    if (lotteries.data.objects <= 0) {
      return;
    }

    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    this.setData({
      lotteries: this.data.lotteries.concat(add),
      offset: this.data.offset + add.length
    });
  },
  onShow: async function() {
    try {
      this.setData({
        offset: 0, // 加载更多的时候偏移量
        lotteries: []
      });
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },
  onTap(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `${ROUTE.ADD_LOTTERY}?id=${id}`
    });
  }
});

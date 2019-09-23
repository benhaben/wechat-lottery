// pages/user_all_lotteries/user_all_lotteries.js
import dao from "../../utils/dao";
import { CONST, PAGE_SIZE, ROUTE } from "../../utils/constants";
import { countDown } from "../../utils/function";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lotteries: [],
    offset: 0 // 加载更多的时候偏移量
  },

  loadMore: async function(event) {
    let lotteries = await dao.getAllAttendLotteries(
      PAGE_SIZE,
      this.data.offset,
      app.getUserId()
    );
    if (lotteries.data.objects <= 0) {
      return;
    }

    let add = lotteries.data.objects.map(item => {
      let lottery = item.lottery;
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize / CONST.BALANCE_TIMES}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      lottery.lottery_result = item.lottery_result;
      lottery.weight = item.weight;
      lottery.lucky_num = item.lucky_num;
      lottery.balance = item.balance;
      return lottery;
    });
    this.setData({
      lotteries: this.data.lotteries.concat(add),
      offset: this.data.offset + add.length
    });
  },
  onLoad: async function() {
    try {
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },
  onTap(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${id}`
    });
  }
});

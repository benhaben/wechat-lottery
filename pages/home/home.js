import lotteryRep from "../../utils/dao";
import { ROUTE } from "../../utils/constants";
import { countDown } from "../../utils/function";
import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    lucky_num: app.getLuckyNum(),
    offset: 0,
    lotteries: []
  },

  loadMore: async function() {
    let lotteries = await lotteryRep.getLottery(this.data.offset);
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
  onLoad: async function() {
    try {
      // 知晓云云函数调试比较麻烦，只能在前端模拟一下
      await main({}, (err, msg) => {
        debugger;
        console.log(err);
      });

      await app.getUserInfo(app.getUserId());
      this.setData({
        lucky_num: app.getLuckyNum()
      });

      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },
  onUnload: function() {},
  onReady: function() {},
  onShow: async function() {
    this.getTabBar().init();
  },
  onLotteryItem: function(event) {
    console.log(event);
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${event.detail}`
    });
  },
  onGotoSign: function() {},
  onMore: async function(event) {
    await this.loadMore();
  }
});

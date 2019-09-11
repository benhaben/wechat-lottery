import lotteryRep from "../../utils/dao/lotteryRep";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    lucky_num: app.getLuckyNum(),
    offset: 0,
    lotteries: []
  },

  onLoad: async function() {
    try {
      let lotteries = await lotteryRep.getLottery(this.data.offset);
      debugger;
      this.setData({
        lotteries: lotteries.data.objects
      });
    } catch (e) {
      console.log(e);
    }
  },
  onUnload: function() {},
  onReady: function() {},
  onShow() {
    this.getTabBar().init();
  },
  onGotoSign: function() {},
  // 下拉刷新
  scrollToLower: function() {}
});

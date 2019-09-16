import lotteryRep from "../../utils/dao";
import { ROUTE, ROUTE_DATA } from "../../utils/constants";
import { countDown, throttle } from "../../utils/function";
// import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    lucky_num: app.getLuckyNum(),
    offset: 0,
    lotteries: [],
    showSharePopup: false,
    actions: [
      {
        name: "分享",
        openType: "share"
      },
      {
        name: "获取小程序码图片"
      }
    ]
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
      // await main({}, (err, msg) => {
      //   debugger;
      //   console.log(err);
      // });

      const { inviter_uid } = this.options;
      console.log(`inviter_uid: ${inviter_uid}`);

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
  onLotteryItem: throttle(function(event) {
    console.log(event);
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${event.detail}`
    });
  }),
  onGotoSign: function() {},
  onMore: async function(event) {
    await this.loadMore();
  },
  onCloseSharePopup() {
    let that = this;
    this.setData({ showSharePopup: false });
    setTimeout(() => {
      that.getTabBar().show();
    }, 100);
  },
  genPic(e) {
    let that = this;
    wx.navigateTo({
      url: `${ROUTE.SHARE_PIC_HOME}`
    });
  },
  onShare: function(e) {
    this.setData({ showSharePopup: true });
    this.getTabBar().hide();
  },
  onShareAppMessage: function() {
    return {
      title: `${app.getNickname()}邀请你参与红包抽奖活动`,
      path: `${ROUTE.HOME}?inviter_uid=${app.getUserId()}`,
      success: function(res) {
        console.log("成功", res);
      }
    };
  }
});

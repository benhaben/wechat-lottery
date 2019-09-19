import dao from "../../utils/dao";
import { PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import { countDown, throttle } from "../../utils/function";
// import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    lucky_num: app.getLuckyNum(),
    offset: 0, // 加载更多的时候偏移量
    page_size: PAGE_SIZE, // 注意这个是让下拉的时候保持至少有当前的数量
    lotteries: [],
    showSharePopup: false,
    overlay: true,
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
  onPullDownRefresh: throttle(async function() {
    // 上拉刷新
    debugger;
    try {
      let lotteries = await dao.getLottery(this.data.page_size + PAGE_SIZE, 0);
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
        lotteries: add,
        offset: add.length,
        page_size: add.length
      });
      wx.stopPullDownRefresh();
    } catch (e) {
      console.log(e);
      wx.stopPullDownRefresh();
    }
  }),

  loadMore: async function(event) {
    let lotteries = await dao.getLottery(PAGE_SIZE, this.data.offset);
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
      offset: this.data.offset + add.length,
      page_size: this.data.page_size + add.length
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
      if (inviter_uid) {
        await dao.addInviter(inviter_uid, app.getUserId());
      }

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
    const formId = event.detail.formId;
    if (formId) {
      wx.BaaS.wxReportTicket(formId);
      console.log(`event.detail.formId - ${event.detail.formId}`);
    }
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
    this.setData({ overlay: false, showSharePopup: false });

    return {
      title: `${app.getNickname()}邀请你参与红包抽奖活动`,
      path: `${ROUTE.HOME}?inviter_uid=${app.getUserId()}`,
      success: function(res) {
        console.log("成功", res);
      }
    };
  }
});

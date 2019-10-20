import dao from "../../utils/dao";
import { ROUTE, CONST } from "../../utils/constants";
import {
  countDown,
  randomProductUrl,
  throttle,
  toFixed3
} from "../../utils/function";
import {
  DEFAULT_SPONSOR,
  PAGE_SIZE,
  ROUTE_DATA,
  WECHAT_SCENE
} from "../../utils/uiConstants";
// import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    lucky_num: app.getLuckyNum(),
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
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: throttle(async function() {
    await this.loadMore();
  }),

  adjustAttendLottery(lotteries) {
    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.hongbao_num = CONST.HONGBAO_NUM;
      lottery.fudai_num = CONST.FUDAI_NUM;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    return add;
  },
  async adjustAttendLotteryInfo() {
    let lotteries = this.data.lotteries;
    let add = await Promise.all(
      lotteries.map(async lottery => {
        lottery.hasAttended = await dao.hasAttended(
          lottery.id,
          app.getUserId()
        );
        console.log(
          `lottery.id : ${lottery.id} - lottery.hasAttended : ${lottery.hasAttended}`
        );
        return lottery;
      })
    );

    this.setData({
      lotteries: add
    });
  },

  onPullDownRefresh: throttle(async function() {
    // 上拉刷新
    try {
      let lotteries = await dao.getLottery(
        this.page_size + PAGE_SIZE,
        0,
        CONST.APPROVED,
        false
      );
      if (lotteries.data.objects <= 0) {
        return;
      }
      let add = this.adjustAttendLottery(lotteries);
      this.offset = add.length;
      this.page_size = add.length;
      this.setData({
        lotteries: add
      });
      let that = this;
      setTimeout(async () => {
        await that.adjustAttendLotteryInfo();
      });

      wx.stopPullDownRefresh();
    } catch (e) {
      console.log(e);
      wx.stopPullDownRefresh();
    }
  }),

  loadMore: async function(event) {
    debugger;
    let lotteries = await dao.getLottery(
      PAGE_SIZE,
      this.offset,
      CONST.APPROVED,
      false
    );
    if (lotteries.data.objects <= 0) {
      return;
    }
    let add = this.adjustAttendLottery(lotteries);

    this.offset = this.offset + add.length;
    this.page_size = this.page_size + add.length;
    this.setData({
      lotteries: this.data.lotteries.concat(add)
    });

    let that = this;
    setTimeout(async () => {
      await that.adjustAttendLotteryInfo();
    });
  },
  onLoad: async function(options) {
    try {
      this.offset = 0;
      this.page_size = PAGE_SIZE;
      // 知晓云云函数调试比较麻烦，只能在前端模拟一下
      // await main({}, (err, msg) => {
      //   debugger;
      //   console.log(err);
      // });

      let { scene, inviter_uid } = options;

      wx.showLoading({
        title: "正在加载"
      });
      // 假设扫码过来的 query 在 onLoad 可以拿到
      if (inviter_uid) {
        let ret = await dao.addInviter(inviter_uid);
        console.log(ret);
      } else if (scene) {
        let sceneStr = decodeURIComponent(scene);
        inviter_uid = sceneStr.substring(0, 14);
        let ret = await dao.addInviter(inviter_uid);
        console.log(ret);
      } else {
      }

      let user_id = app.getUserId();
      if (user_id) {
        await app.getUserInfo(app.getUserId());
        this.setData({
          lucky_num: app.getLuckyNum()
        });
      }
      await this.loadMore();
      wx.hideLoading();
    } catch (e) {
      wx.hideLoading();
      console.log(e);
    }
  },
  onUnload: function() {},
  onReady: function() {},
  onShow: async function() {
    if (this.getTabBar() != null) {
      this.getTabBar().init();
    }
  },
  _onTap: throttle(function(event) {
    let that = this;
    //TODO: 可以试用store或者全局变量
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${event.currentTarget.dataset.id}`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        [ROUTE_DATA.FROM_ATTEND_LOTTERY_TO_HOME]: function(e) {
          if (e) {
            let id = e;
            that.data.lotteries.map(lottery => {
              if (lottery.id === id) {
                lottery.hasAttended = true;
              }
            });
            that.setData(that.data);
          }
        }
      }
      // success: function(res) {
      //   // 通过eventChannel向被打开页面传送数据
      //   res.eventChannel.emit(
      //     ROUTE_DATA.FROM_HOME_TO_ATTEND_LOTTERY,
      //     that.data
      //   );
      // }
    });
  }),
  onGotoSign: function() {
    wx.navigateTo({
      url: ROUTE.USER_LUCKY
    });
  },
  onMore: throttle(async function(event) {
    await this.loadMore();
  }),
  onCloseSharePopup() {
    let that = this;
    this.setData({
      showSharePopup: false
    });
    setTimeout(() => {
      that.getTabBar().show();
    }, 100);
  },
  genPic(e) {
    let that = this;
    wx.navigateTo({
      url: `${ROUTE.SHARE_PIC_HOME}`
    });
    this.setData({
      showSharePopup: false
    });
  },
  onShare: function(e) {
    this.setData({
      showSharePopup: true
    });
    this.getTabBar().hide();
  },
  onShareAppMessage: function() {
    this.setData({
      showSharePopup: false
    });

    // TODO：自定义更好看的图片
    return {
      title: `${app.getNickname()}邀请你参与【${DEFAULT_SPONSOR}】赞助的免费抽奖活动`,
      path: `${ROUTE.HOME}?inviter_uid=${app.getUserId()}`,
      // imageUrl:this.data.url,
      imageUrl: CONST.HOME_SHARE_IMAGE,
      success: function(res) {
        console.log("成功", res);
      }
    };
  }
});

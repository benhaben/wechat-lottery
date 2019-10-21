import dao from "../../utils/dao";
import SystemInfoUtil from "../../utils/systemInfoUtil";
import { ROUTE, CONST } from "../../utils/constants";
import { countDown, throttle } from "../../utils/function";
import {
  DEFAULT_SPONSOR,
  PAGE_SIZE,
  ROUTE_DATA
} from "../../utils/uiConstants";
import { mobileAdapter } from "../../utils/uiFunction";
// import main from "../../faas/checkLotteryStatusOpenTest";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    permission: {
      showLogin: false
    },
    isIPhoneX: false,
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
      await app.silentLogin();
      // 不需要立刻获取的数据和方法
      this.init(inviter_uid, scene);
      // 需要等待获取的数据
      await this.loadMore();
      wx.hideLoading();
    } catch (e) {
      wx.hideLoading();
      console.log(e);
    }
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
    let user_id = app.getUserId();
    if (user_id) {
      let add = await Promise.all(
        lotteries.map(async lottery => {
          lottery.hasAttended = await dao.hasAttended(lottery.id, user_id);
          console.log(
            `lottery.id : ${lottery.id} - lottery.hasAttended : ${lottery.hasAttended}`
          );
          return lottery;
        })
      );

      this.setData({
        lotteries: add
      });
    }
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
      }, 100);

      this.setData({
        lucky_num: app.getLuckyNum() || 0
      });
      wx.stopPullDownRefresh();
    } catch (e) {
      console.log(e);
      wx.stopPullDownRefresh();
    }
  }),

  loadMore: async function(event) {
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
      // 异步了，不影响界面首次渲染，多获取几次数据没关系
      // await app.getUserInfo();
      await that.adjustAttendLotteryInfo();
    }, 100);
  },

  init(inviter_uid, scene) {
    let that = this;
    setTimeout(async () => {
      // await app.getUserInfo();
      let user_id = app.getUserId();

      // 假设扫码过来的 query 在 onLoad 可以拿到
      if (inviter_uid) {
        if (user_id) await dao.addInviter(inviter_uid);
      } else if (scene) {
        let sceneStr = decodeURIComponent(scene);
        inviter_uid = sceneStr.substring(0, 14);
        if (user_id) await dao.addInviter(inviter_uid);
      } else {
      }
      that.setData({
        isIPhoneX: mobileAdapter.isIPhoneX(SystemInfoUtil.model)
      });
      that.setData({
        lucky_num: app.getLuckyNum() || 0
      });
    }, 100);
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
    if (this.showLoginPopup()) {
      return;
    }
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
  },
  onClosePopup() {
    // 临时设置成true
    this.setData({
      permission: {
        showLogin: false
      }
    });
  },
  showLoginPopup() {
    let showLogin = !app.hasAuth();
    this.setData({
      permission: {
        showLogin: showLogin
      }
    });
    return showLogin;
  },
  userInfoHandler(data) {
    let that = this;
    wx.showLoading({
      title: "正在授权"
    });

    wx.BaaS.auth.loginWithWechat(data).then(
      async user => {
        // user 包含用户完整信息，详见下方描述
        await app.getUserInfo(user.get("id"));
        that.onPullDownRefresh();
        that.setData({
          permission: {
            showLogin: false
          }
        });
        wx.hideLoading();
      },
      err => {
        wx.hideLoading();
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
      }
    );
  }
});

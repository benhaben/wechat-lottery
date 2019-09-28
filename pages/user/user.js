import { CONST, PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  data: {
    url: null,
    nickname: null,
    total: 0,
    send_num: 0,
    get_num: 0,
    admin: false,
    showLogin: false,
    cells: [
      {
        title: "现金余额",
        icon: "cashier-o",
        url: ROUTE.USER_BALANCE
      },
      {
        title: "粉丝列表",
        icon: "like-o",
        url: ROUTE.USER_FANS
      },
      {
        title: "图文信息",
        icon: "photo-o",
        url: ROUTE.USER_ADS
      },
      {
        title: "个人简介",
        icon: "description",
        url: ROUTE.USER_DESC
      }
    ]
  },
  async init() {
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
      url: app.getAvatar(),
      nickname: app.getNickname(),
      showLogin: !app.hasAuth(),
      admin,
      total,
      send_num,
      get_num
    });
  },
  async onLoad() {
    try {
      let auth = app.hasAuth();
      if (auth) {
        this.init();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  },
  onShow() {
    this.getTabBar().init();
  },
  onAuth() {},
  showLoginPopup() {
    let showLogin = !app.hasAuth();
    this.setData({
      showLogin
    });
    return showLogin;
  },
  onGotoSign() {
    if (this.showLoginPopup()) {
      return;
    }
    wx.navigateTo({
      url: ROUTE.USER_LUCKY
    });
  },
  onAllLotteries() {
    if (this.showLoginPopup()) {
      return;
    }
    wx.navigateTo({
      url: ROUTE.USER_ALL_LOTTERIES
    });
  },
  onSendLotteries() {
    if (this.showLoginPopup()) {
      return;
    }
    wx.navigateTo({
      url: ROUTE.USER_SEND_LOTTERIES
    });
  },
  onGetLotteries() {
    if (this.showLoginPopup()) {
      return;
    }
    wx.navigateTo({
      url: ROUTE.USER_GET_LOTTERIES
    });
  },
  onCellClick(event) {
    if (this.showLoginPopup()) {
      return;
    } else {
      wx.navigateTo({
        url: event.currentTarget.dataset.url
      });
    }
  },
  userInfoHandler(data) {
    let that = this;
    wx.BaaS.auth.loginWithWechat(data).then(
      async user => {
        // user 包含用户完整信息，详见下方描述
        await app.getUserInfo(user.get("id"));
        this.init();
      },
      err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
      }
    );
  },
  onWantLogin() {
    this.setData({
      showLogin: true
    });
  },
  onClosePopup() {
    // 临时设置成true
    this.setData({
      showLogin: false
    });
  }
});

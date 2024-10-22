import { ROUTE } from "../utils/constants";
import { mobileAdapter, getStatusBarHeight } from "../utils/uiFunction";

Component({
  data: {
    active: 0,
    hide: false,
    isIPhoneX: false,
    statusBarHeight: 0,
    list: [
      {
        icon: "home-o",
        text: "首页",
        url: ROUTE.HOME
      },
      {
        icon: "point-gift-o",
        text: "发起",
        url: "/pages/add_product_lottery/lottery_wrap"
      },
      {
        icon: "setting-o",
        text: "我的",
        url: ROUTE.USER
      }
    ]
  },
  options: {
    // 允许接受外部样式，根据个人喜好来处理
    addGlobalClass: true
  },
  created() {
    let that = this;
  },
  attached() {
    this.setData({
      isIPhoneX: mobileAdapter.isIPhoneX()
    });
  },
  methods: {
    onChange(event) {
      this.setData({
        active: event.detail
      });
      if (
        this.data.list[event.detail].url ===
        "/pages/add_product_lottery/lottery_wrap"
      ) {
        wx.navigateTo({
          url: ROUTE.ADD_PRODUCT_LOTTERY
        });
      } else {
        wx.switchTab({
          url: this.data.list[event.detail].url
        });
      }
    },
    show() {
      this.setData({ hide: false });
    },
    hide() {
      this.setData({ hide: true });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});

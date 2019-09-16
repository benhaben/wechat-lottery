import { ROUTE } from "../utils/constants";

Component({
  data: {
    active: 0,
    hide: false,
    list: [
      {
        icon: "home-o",
        text: "首页",
        url: ROUTE.HOME
      },
      {
        icon: "point-gift-o",
        text: "发起抽奖",
        url: "/pages/add_lottery/lottery_wrap"
      },
      {
        icon: "setting-o",
        text: "我的",
        url: ROUTE.USER
      }
    ]
  },

  methods: {
    onChange(event) {
      this.setData({
        active: event.detail
      });
      if (
        this.data.list[event.detail].url === "/pages/add_lottery/lottery_wrap"
      ) {
        wx.navigateTo({
          url: ROUTE.ADD_LOTTERY
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

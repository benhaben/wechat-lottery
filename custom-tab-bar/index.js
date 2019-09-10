Component({
  data: {
    active: 0,
    list: [
      {
        icon: "home-o",
        text: "首页",
        url: "/pages/home/home"
      },
      {
        icon: "point-gift-o",
        text: "发起抽奖",
        url: "/pages/lottery/lottery_wrap"
      },
      {
        icon: "setting-o",
        text: "我的",
        url: "/pages/user/user"
      }
    ]
  },

  methods: {
    onChange(event) {
      this.setData({
        active: event.detail
      });
      if (this.data.list[event.detail].url === "/pages/lottery/lottery_wrap") {
        wx.navigateTo({
          url: "/pages/lottery/lottery"
        });
      } else {
        wx.switchTab({
          url: this.data.list[event.detail].url
        });
      }
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});

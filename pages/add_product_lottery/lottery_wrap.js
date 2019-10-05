Page({
  data: {},
  onLoad: function() {},

  onShow() {
    if (this.getTabBar() != null) {
      this.getTabBar().init();
    }
  },
  onUnload: function() {},
  onReady: function() {}
});

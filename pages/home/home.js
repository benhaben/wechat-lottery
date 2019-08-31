let data = require("./data.js");
let rep = require("../../utils/repository.js");

Page({
  data: {
    title: "我的书架",
    bookList: [],
    creatingBookName: "", // 当前正在创建的书名
    editingBookName: "" // 当前正在编辑的书名
  },
  // 获取 bookList 数据
  fetchBookList() {
    rep.getLotteries(res => {
      debugger;
      this.setData({
        bookList: res.data.objects // bookList array, mock data in mock/mock.js
      });
    });
  },
  onLoad: function() {
    wx.BaaS.auth.loginWithWechat().then(user => {
      this.setData({
        profile: user.toJSON()
      });
      this.fetchBookList();
    });
  },
  onUnload: function() {},
  onReady: function() {},

  // 下拉刷新
  scrollToLower: function() {
    // 延迟1s，模拟网络请求
    if (this.isScrollToLower) return;
    this.isScrollToLower = true;
    setTimeout(() => {
      console.log("下拉刷新");
    }, 1000);
  }
});

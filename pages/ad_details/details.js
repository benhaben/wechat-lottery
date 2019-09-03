// pages/details.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    intiList: [
      {
        info: "xxx0",
        type: 0
      },
      {
        info: {
          title: "呻吟的微信号",
          content: "benhaben"
        },
        type: 2
      },
      {
        info: "xxx1",
        type: 0
      },
      {
        info:
          "http://tmp/wxb7fb2c1219817db3.o6zAJszUi-hE6mgEhbg7Lhx4ZFLA.3eZf02kRjoJQac5fb5e904ea92ae289f6f4db131c1c4.png",
        type: 1
      },
      {
        info: "xxx2",
        type: 0
      }
    ]
  },

  saveData(e) {
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  addPic: function(event) {
    console.log("addPic");
  },
  addCopy: function(event) {
    console.log("addCopy");
  },
  onConfirm: function(event) {
    console.log("onConfirm");
  }
});

// pages/tags/tags.js
import Toast from "../../lib/van/toast/toast";
import { CONST, ROUTE_DATA } from "../../utils/constants";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected_tags: [],
    tags: CONST.TAGS,
    flags: CONST.TAG_FLAGS,
    classes_switch: ["unselected", "selected"],
    eventChannel: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    that.eventChannel = that.getOpenerEventChannel();
    that.eventChannel.on(ROUTE_DATA.FROM_ADD_LOTTERY_TO_TAGS, data => {
      console.log(data);
      for (let item of data) {
        let tagsIndex = that.data.tags.indexOf(item);
        that.data.flags[tagsIndex] = 1;
        that.data.selected_tags.push(item);
      }
      that.setData(that.data);
    });
  },

  onUnSelect: function(e) {
    let index = e.target.dataset.index;
    let tag = e.target.dataset.tag;
    console.log(`onUnSelect: ${index}, ${tag}`);
    this.data.selected_tags.splice(index, 1);
    let tagsIndex = this.data.tags.indexOf(tag);
    this.data.flags[tagsIndex] = 0;
    this.setData(this.data);
    this.eventChannel.emit(ROUTE_DATA.BACK_TAGS_TO_ADD_LOTTERY, {
      data: this.data.selected_tags
    });
  },

  onSelect: function(e) {
    if (this.data.selected_tags.length >= CONST.MAX_SELECTED) {
      return;
    }

    let index = e.target.dataset.index;
    let tag = e.target.dataset.tag;
    console.log(`onSelect: ${index}, ${tag}`);

    // 已经选择过了不能再选择
    if (this.data.selected_tags.indexOf(tag) !== -1) {
      return;
    }

    this.data.selected_tags.push(tag);
    this.data.flags[index] = 1;
    this.setData(this.data);
    this.eventChannel.emit(ROUTE_DATA.BACK_TAGS_TO_ADD_LOTTERY, {
      data: this.data.selected_tags
    });
  },

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
  onShareAppMessage: function() {}
});

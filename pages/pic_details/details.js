// pages/details.js
import { ROUTE_DATA } from "../../utils/constants";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    eventChannel: null
  },
  onLoad: function(option) {
    this.eventChannel = this.getOpenerEventChannel();
  },

  onConfirm: function(event) {
    this.eventChannel.emit(ROUTE_DATA.BACK_PIC_DETAILS_TO_ADD_LOTTERY, {
      data: event.detail
    });
    wx.navigateBack();
  }
});

// pages/details.js
import { ROUTE_DATA } from "../../utils/uiConstants";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    eventChannel: null,
    pic_data: null
  },
  onLoad: function(option) {
    this.eventChannel = this.getOpenerEventChannel();
    let that = this;
    this.eventChannel.on(ROUTE_DATA.FROM_ADD_LOTTERY_TO_PIC_DETAILS, function(
      data
    ) {
      that.setData({ pic_data: data });
      console.log(data);
    });
  },

  onConfirm: function(event) {
    this.eventChannel.emit(ROUTE_DATA.BACK_PIC_DETAILS_TO_ADD_LOTTERY, {
      data: event.detail
    });
    wx.navigateBack();
  }
});

const pic_details = "pic_details";

export default {
  setPicDetails(data) {
    wx.setStorageSync("pic_details", data);
  },
  getPicDetails(data) {
    wx.getStorageSync("pic_details");
  }
};

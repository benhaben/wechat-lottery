const USERINFO = "userInfo";

export default {
  setUserInfo(data) {
    wx.setStorageSync(USERINFO, data);
  },
  getUserInfo() {
    return wx.getStorageSync(USERINFO);
  }
};

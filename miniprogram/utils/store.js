const USERINFO = "userInfo";

export default {
  setUserInfo(data) {
    wx.setStorageSync(USERINFO, data);
  },
  getUserInfo(data) {
    return wx.getStorageSync(USERINFO);
  }
};

import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { CONST, ROUTE_DATA } from "../../utils/constants";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pic_data: null
  },
  onLoad: function(option) {
    this.setData({
      pic_data: app.getAdsData()
    });
  },
  onConfirm: async function(event) {
    try {
      let ret = await dao.saveAdsData(app.getUserId(), event.detail);
      app.setUserInfo(ret.data);
      Toast.success("保存成功");
    } catch (e) {
      console.log(e);
    }
  }
});

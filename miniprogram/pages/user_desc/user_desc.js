// pages/user_desc/user_desc.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { CONST } from "../../utils/constants";
import { ROUTE_DATA } from "../../utils/uiConstants";
const { regeneratorRuntime } = global;

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    desc: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      desc: app.getDesc()
    });
  },
  onInputDesc: function(e) {
    this.data.desc = e.detail.value;
  },
  async onConfirm(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }
      let ret = await dao.saveDesc(app.getUserId(), this.data.desc);
      app.setUserInfo(ret.data);
      Toast.success("保存成功");
    } catch (e) {
      console.log(e);
    }
  }
});

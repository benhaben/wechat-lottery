// pages/user_tags/user_tags.js
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

    let data = app.getTagItems();
    for (let item of data) {
      let tagsIndex = that.data.tags.indexOf(item);
      that.data.flags[tagsIndex] = 1;
      that.data.selected_tags.push(item);
    }
    that.setData(that.data);
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

  async onConfirm(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }
      let ret = await dao.saveTagItems(
        app.getUserId(),
        this.data.selected_tags
      );
      app.setUserInfo(ret.data);
      Toast.success("保存成功");
    } catch (e) {
      console.log(e);
    }
  }
});

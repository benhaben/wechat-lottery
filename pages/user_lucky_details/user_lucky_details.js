// pages/user_lucky_details/user_lucky_details.js

import dao from "../../utils/dao";
import { formatTime } from "../../utils/function";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    records: [],
    limit: 8,
    offset: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },

  loadMore: async function() {
    let ret = await dao.getLuckyDetails(
      app.getUserId(),
      this.data.limit,
      this.data.offset
    );
    let add = ret.data.objects.map(item => {
      item.created_at = formatTime(item.created_at * 1000);
      return item;
    });
    this.setData({
      records: this.data.records.concat(add),
      offset: this.data.offset + add.length
    });
  },
  async onMore() {
    try {
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  }
});

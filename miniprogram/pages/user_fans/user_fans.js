// pages/user_fans/user_fans.js

import dao from "../../utils/dao";
import { ROUTE } from "../../utils/constants";
import { countDown, formatDate } from "../../utils/function";
import { PAGE_SIZE } from "../../utils/uiConstants";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    url: "",
    nickname: "",
    offset: 0, // 加载更多的时候偏移量
    friends: []
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
  onMore: async function() {
    try {
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },
  loadMore: async function(event) {
    let friends = await dao.getFriends(
      app.getUserId(),
      PAGE_SIZE,
      this.data.offset
    );
    if (!(friends.data.objects && friends.data.objects.length > 0)) {
      return;
    }

    let count = friends.data.meta.total_count;
    let add = friends.data.objects.map(friend => {
      friend.created_at = formatDate(friend.created_at * 1000);
      return friend;
    });
    this.setData({
      friends: this.data.friends.concat(add),
      offset: this.data.offset + add.length,
      count
    });
  }
});

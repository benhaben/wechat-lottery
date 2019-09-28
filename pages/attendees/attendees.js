// pages/attendees/attendees.js
import dao from "../../utils/dao";
import { CONST } from "../../utils/constants";
import { countDown } from "../../utils/function";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_list: [],
    limit: 50,
    offset: 0,
    type: CONST.GET_ATTENDEES,
    lottery_id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let lottery_id = options.id;
      let type = parseInt(options.type);
      this.setData({
        type,
        lottery_id
      });
      await this.loadMore();
    } catch (e) {
      console.log(e);
    }
  },
  loadMore: async function() {
    let image_list = [];
    let lottery_id = this.data.lottery_id;
    let type = this.data.type;
    let limit = this.data.limit;
    let offset = this.data.offset;
    if (type === CONST.GET_HONGBAO) {
      let getHongbaosPromise = await dao.getAttendeesByResult(
        lottery_id,
        CONST.GET_HONGBAO,
        limit,
        offset
      );
      image_list = getHongbaosPromise.data.objects.map(
        item => item.avatar_cache
      );
    } else if (type === CONST.GET_FUDAI) {
      let getFudaisPromise = await dao.getAttendeesByResult(
        lottery_id,
        CONST.GET_FUDAI,
        limit,
        offset
      );
      image_list = getFudaisPromise.data.objects.map(item => item.avatar_cache);
    } else {
      let attendeesPromise = await dao.getLotteryAttendees(
        lottery_id,
        limit,
        offset
      );
      image_list = attendeesPromise.data.objects.map(item => item.avatar_cache);
    }

    this.setData({
      image_list: this.data.image_list.concat(image_list),
      offset: this.data.offset + image_list.length
    });
  },
  async onMore() {
    await this.loadMore();
  }
});

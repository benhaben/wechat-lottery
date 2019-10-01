// pages/lottery_finished/lottery_finished.js
import dao from "../../utils/dao";
import { CONST, ROUTE } from "../../utils/constants";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    address_titles: [
      { key: "user_name", name: "用户名" },
      { key: "postal_code", name: "邮编" },
      { key: "province_name", name: "省" },
      { key: "city_name", name: "市" },
      { key: "county_name", name: "县/区" },
      { key: "detail_info", name: "详细地址" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let lottery_id = options.id;
      if (lottery_id) {
        let ret = await dao.getLotteryById(lottery_id);
        let lottery = ret.data;
        if (lottery.status !== CONST.OPENED) {
          console.log("没有开奖");
          return;
        }
        let attendees, address;
        if (lottery.lottery_type === CONST.LOTTERY_TYPE_PRODUCT) {
          let retRecordPromise = dao.getProductWinnerByLotteryId(lottery_id);
          let attendeesPromise = dao.getLotteryAttendees(lottery_id);
          attendees = await attendeesPromise;
          let retRecord = await retRecordPromise;
          let userWinner = retRecord.data.objects[0].user;
          address = await dao.getAddressByUserId(userWinner.id);
        } else if (lottery.lottery_type === CONST.LOTTERY_TYPE_MONEY) {
          let attendeesPromise = dao.getLotteryAttendees(lottery_id);
          attendees = await attendeesPromise;
        }

        this.setData({
          address,
          lottery: {
            id: lottery.id,
            hash: lottery.id.substr(0, 10),
            url: lottery.url,
            lottery_type: lottery.lottery_type,
            total: `${lottery.total_prize / CONST.MONEY_UNIT}元/100人`,
            lucky_num: lottery.lucky_num,
            open_people_num: lottery.open_people_num,
            plan_index: lottery.plan_index,
            lucky_num_per: lottery.lucky_num_per,
            desc_checked: !!lottery.desc_initiator,
            desc_initiator: lottery.desc_initiator,
            ad_checked: lottery.pic_data && lottery.pic_data > 0,
            pic_data: lottery.pic_data,
            open_date: lottery.open_date,
            status: lottery.status
          },
          attend_num: attendees.data.meta.total_count,
          attend_avatar_list: attendees.data.objects.map(
            item => item.avatar_cache
          )
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
  onGotoAttendees() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.lottery.id}&type=${CONST.GET_ATTENDEES}`
    });
  }
});

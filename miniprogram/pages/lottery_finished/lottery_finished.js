// pages/lottery_finished/lottery_finished.js
import dao from "../../utils/dao";
import { CONST, ROUTE } from "../../utils/constants";
import { countDown, formatDate } from "../../utils/function";
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
    ],
    showAd: false
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
        let attendees, userWinnerAddresses;
        if (lottery.lottery_type === CONST.LOTTERY_TYPE_PRODUCT) {
          // TODO: 多个中奖人地址需要支持
          let retRecordPromise = dao.getProductWinnerByLotteryId(lottery_id);
          let attendeesPromise = dao.getLotteryAttendees(lottery_id);
          attendees = await attendeesPromise;
          let retRecord = await retRecordPromise;
          userWinnerAddresses = await Promise.all(
            retRecord.data.objects.map(async item => {
              let address = await dao.getAddressByUserId(
                parseInt(item.user_id)
              );
              return address;
            })
          );
        } else if (lottery.lottery_type === CONST.LOTTERY_TYPE_MONEY) {
          let attendeesPromise = dao.getLotteryAttendees(lottery_id);
          attendees = await attendeesPromise;
        }

        this.setData({
          addresses: userWinnerAddresses,
          lottery: {
            id: lottery.id,
            hash: lottery.id.substr(0, 10),
            url: lottery.url,
            total: `${lottery.total_prize / CONST.MONEY_UNIT}元/100人`,
            lucky_num: lottery.lucky_num,
            open_people_num: lottery.open_people_num,
            avatar: lottery.avatar,
            nickname: lottery.nickname,
            sponsor: lottery.sponsor,
            product_name: lottery.product_name,
            product_num: lottery.product_num,
            lottery_type: lottery.lottery_type,
            desc_initiator: lottery.desc_initiator,
            pic_data: lottery.pic_data,
            open_date: lottery.open_date,
            hongbao_num: CONST.HONGBAO_NUM,
            fudai_num: CONST.FUDAI_NUM,
            status: lottery.status,
            attend_num: attendees.data.meta.total_count,
            attend_avatar_list: attendees.data.objects.map(
              item => item.avatar_cache
            ),
            countdownStr: countDown(lottery.open_date),
            open_data_str: formatDate(Date.parse(lottery.open_date))
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
  onShowAd(event) {
    this.setData({
      showAd: event.detail
    });
  },
  onGotoAttendees() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.lottery.id}&type=${CONST.GET_ATTENDEES}`
    });
  }
});

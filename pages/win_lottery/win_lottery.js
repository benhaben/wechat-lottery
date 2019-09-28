// pages/win_lottery/win_lottery.js
import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
import { toFixed3 } from "../../utils/function";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 抽奖信息
    lottery: {
      url: CONST.DEFAULT_URL,
      id: "",
      hash: "",
      total: "",
      lucky_num: 0,
      lucky_num_per: 0,
      countdownStr: "",
      open_people_num: 0,
      avatar: "",
      nickname: "",
      tag_items: CONST.DEFAULT_TAG_ITEMS,
      desc_initiator: "",
      pic_data: null,
      open_date: null
    },

    // 中奖信息
    weight: 0,
    attend_num: 0,
    attend_avatar_list: [],
    auth: false,
    attendBtnLoading: false,
    selfLuckyNum: 0,
    showSharePopup: false,
    balance: 0,
    showAd: false,
    plans_lottery_package: 0,
    plans_lucky_package: 0,
    hongbao_image_list: [],
    fudai_image_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let that = this;
    let lottery_id = options.id;

    if (!lottery_id) {
      return;
    }
    // 获取数据
    try {
      // 获取用户中奖信息
      let retRecordPromise = dao.getUserLotteryRecordByLotteryIdAndUserId(
        lottery_id,
        app.getUserId()
      );
      let retRecord = await retRecordPromise;
      debugger;
      let result = retRecord.data.objects[0];
      let lottery = retRecord.data.objects[0].lottery;
      let user = retRecord.data.objects[0].user;

      // 获取参加者信息
      let attendeesPromise = dao.getLotteryAttendees(lottery_id);
      let getHongbaosPromise = dao.getAttendeesByResult(
        lottery_id,
        CONST.GET_HONGBAO
      );
      let getFudaisPromise = dao.getAttendeesByResult(
        lottery_id,
        CONST.GET_FUDAI
      );

      //并行获取数据，防止一个一个获取
      let attendees = await attendeesPromise;
      let hongbaos = await getHongbaosPromise;
      let fudais = await getFudaisPromise;

      app.setUserInfo(user);
      this.setData({
        lottery: {
          id: lottery.id,
          url: lottery.url,
          lottery_type: lottery.type,
          hash: lottery.id.substr(0, 10),
          total: `${lottery.total_prize / CONST.MONEY_UNIT}元`,
          fudai_num: CONST.PLANS_LUCKY_PACKAGE[lottery.plan_index],
          product_name: lottery.product_name,
          lucky_num: lottery.lucky_num,
          lucky_num_per: lottery.lucky_num_per,
          open_people_num: lottery.open_people_num,
          avatar: lottery.avatar,
          nickname: lottery.nickname,
          tag_items: lottery.tag_items,
          desc_initiator: lottery.desc_initiator,
          pic_data: lottery.pic_data,
          open_date: lottery.open_date
        },
        get_balance:
          result.lottery_result === 1
            ? toFixed3(result.balance / CONST.MONEY_UNIT)
            : 0,
        get_lucky_num: result.lottery_result === 2 ? result.lucky_num : 0,
        lottery_result: result.lottery_result,
        plans_lottery_package: CONST.PLANS_LOTTERY_PACKAGE[lottery.plan_index],
        plans_lucky_package: CONST.PLANS_LUCKY_PACKAGE[lottery.plan_index],
        attend_num: attendees.data.meta.total_count,
        attend_avatar_list: attendees.data.objects.map(
          item => item.avatar_cache
        ),
        hongbao_image_list: hongbaos.data.objects.map(
          item => item.avatar_cache
        ),
        fudai_image_list: fudais.data.objects.map(item => item.avatar_cache)
      });
    } catch (e) {
      console.log(e);
    }
  },
  onGotoHongbao() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.id}&type=${CONST.GET_HONGBAO}`
    });
  },
  onGotoFudai() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.id}&type=${CONST.GET_FUDAI}`
    });
  },
  onGotoAttendees() {
    wx.navigateTo({
      url: `${ROUTE.ATTENDEES}?id=${this.data.id}&type=${CONST.GET_ATTENDEES}`
    });
  },
  onGoLottery() {
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${this.data.id}`
    });
  },
  onGoHome() {
    wx.navigateTo({
      url: `${ROUTE.HOME}`
    });
  },
  showAdFalse() {
    this.setData({
      showAd: false
    });
  },
  showAd() {
    this.setData({
      showAd: true
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});

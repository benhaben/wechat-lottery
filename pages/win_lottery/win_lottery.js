// pages/win_lottery/win_lottery.js
import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: CONST.DEFAULT_URL,
    id: "",
    total: "",
    lucky_num: 0,
    countdownStr: "",
    open_people_num: 0,
    avatar: "",
    nickname: "",
    tag_items: CONST.DEFAULT_TAG_ITEMS,
    desc_initiator: "",
    weight: 0,
    pic_data: null,
    attend_num: 0,
    attend_avatar_list: [],
    auth: false,
    lottery_id: null,
    attendBtnLoading: false,
    hasAttended: true,
    selfLuckyNum: 0,
    open_date: null,
    showSharePopup: false,
    balance: 0.099,
    showAd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let that = this;
    // let lottery_id = options.id;
    let lottery_id = "5d7dc7bf9db6e805adc5ebfe";
    // let lottery_id = "5d7612d71db94f5d2e68fd74";
    await app.getUserInfo(app.getUserId());
    this.setData({
      selfLuckyNum: app.getLuckyNum(),
      auth: app.hasAuth(),
      lottery_id
    });

    if (!lottery_id) {
      return;
    }
    // 获取数据
    try {
      let retRecordPromise = dao.getUserLotteryRecordByLotteryIdAndUserId(
        lottery_id,
        app.getUserId()
      );
      let attendeesPromise = dao.getLotteryAttendees(lottery_id);

      //并行获取数据，防止一个一个获取
      let attendees = await attendeesPromise;
      let retRecord = await retRecordPromise;

      let lottery, hasAttended;
      if (retRecord.data.objects.length === 0) {
        let ret = await dao.getLotteryById(lottery_id);
        lottery = ret.data;
        hasAttended = false;
      } else {
        lottery = retRecord.data.objects[0].lottery;
        // 运气值发生了改变
        let user = retRecord.data.objects[0].user;
        app.setUserInfo(user);
        hasAttended = true;
      }

      this.setData({
        id: lottery.id.substr(0, 10),
        total: `${lottery.total_prize}元/100人`,
        lucky_num: lottery.lucky_num,
        open_people_num: lottery.open_people_num,
        avatar: lottery.avatar,
        nickname: lottery.nickname,
        tag_items: lottery.tag_items,
        desc_initiator: lottery.desc_initiator,
        pic_data: lottery.pic_data,
        open_date: lottery.open_date,
        hasAttended,
        attend_num: attendees.data.meta.total_count,
        attend_avatar_list: attendees.data.objects.map(
          item => item.avatar_cache
        )
      });
    } catch (e) {
      console.log(e);
    }
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

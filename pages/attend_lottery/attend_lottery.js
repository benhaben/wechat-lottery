// pages/attend_lottery/attend_lottery.js
import { CONST, ROUTE } from "../../utils/constants";
import lotteryRep from "../../utils/dao/lotteryRep";

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
    open_date: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let that = this;
    // let lottery_id = options.id;
    // let lottery_id = "5d75f93b1bb32a389a830414";
    let lottery_id = "5d7612d71db94f5d2e68fd74";

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
      let retRecordPromise = lotteryRep.getUserLotteryRecordByLotteryIdAndUserId(
        lottery_id,
        app.getUserId()
      );
      let attendeesPromise = lotteryRep.getLotteryAttendees(lottery_id);

      //并行获取数据，防止一个一个获取
      let attendees = await attendeesPromise;
      let retRecord = await retRecordPromise;

      let lottery, hasAttended;
      if (retRecord.data.objects.length === 0) {
        let ret = await lotteryRep.getLotteryById(lottery_id);
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
        attend_avatar_list: attendees.data.objects.map(item => item.avatar)
      });
      this.countDown();
    } catch (e) {
      debugger;
      console.log(e);
    }
  },

  countDown: function() {
    let that = this;
    startclock();
    let timerID = null;
    let timerRunning = false;

    function stopclock() {
      if (timerRunning) clearTimeout(timerID);
      timerRunning = false;
    }

    function startclock() {
      stopclock();
      show_time();
    }

    function show_time() {
      let open_date = that.data.open_date;
      let time_end = Math.round(Date.parse(open_date) / 1000);
      let time_now = Math.round(new Date() / 1000);
      let time_distance = time_end - time_now;

      if (time_distance > 0) {
        let int_day = Math.floor(time_distance / (60 * 60 * 24));
        let int_hour = Math.floor(time_distance / (60 * 60)) - int_day * 24;
        let int_minute =
          Math.floor(time_distance / 60) - int_day * 24 * 60 - int_hour * 60;
        let int_second =
          Math.floor(time_distance) -
          int_day * 24 * 60 * 60 -
          int_hour * 60 * 60 -
          int_minute * 60;
        if (int_hour < 10) int_hour = "0" + int_hour;
        if (int_minute < 10) int_minute = "0" + int_minute;
        if (int_second < 10) int_second = "0" + int_second;
        let str_time = int_hour + "小时" + int_minute + "分钟";
        that.setData({
          countdownStr: str_time
        });
        timerID = setTimeout(show_time, 1000 * 60);
        timerRunning = true;
      } else {
        that.setData({
          countdownStr: "已过期"
        });
        clearTimeout(timerID);
      }
    }
  },

  /**
   * 100个运气值去参与100个抽奖，总权重是100，去参与一个抽奖，总权重是199。这是鼓励用户在一个抽奖里多消耗运气值
   * @param e
   */
  onAddWeight: function(e) {
    // 要留一个参与现在的抽奖
    if (this.data.selfLuckyNum > 1) {
      let weight = this.data.weight + 2;
      let selfLuckyNum = this.data.selfLuckyNum - 1;
      this.setData({ weight, selfLuckyNum });
    }
  },
  goToAddLottery: function(e) {
    wx.navigateTo({
      url: `${ROUTE.ADD_LOTTERY}`
    });
  },
  onShare: function(e) {},
  onAttend: async function(e) {
    // 调用云函数

    try {
      this.setData({ attendBtnLoading: true });
      let res = await lotteryRep.attendLottery({
        weight: this.data.weight,
        lottery_id: this.data.lottery_id
      });
      if (res) {
        this.setData({ attendBtnLoading: false, hasAttended: true });
      } else {
        this.setData({ attendBtnLoading: false });
      }
    } catch (e) {
      this.setData({ attendBtnLoading: false });
      console.log(e);
    }
  },

  //TODO: 可以做一个共享的behavior
  userInfoHandler(data) {
    let that = this;
    wx.BaaS.auth.loginWithWechat(data).then(
      user => {
        // user 包含用户完整信息，详见下方描述
        app.getUserInfo(user.get("id"));
        that.setData({
          auth: app.hasAuth()
        });
      },
      err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
      }
    );
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

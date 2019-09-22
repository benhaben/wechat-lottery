import { CONST, ROUTE, ROUTE_DATA } from "../../utils/constants";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import main from "../../faas/approveLotteryTest";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: CONST.DEFAULT_URL,
    id: "",
    hash: "",
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
    status: null
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
      await app.getUserInfo(app.getUserId());
      this.setData({
        selfLuckyNum: app.getLuckyNum(),
        auth: app.hasAuth(),
        lottery_id
      });

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
        id: lottery.id,
        hash: lottery.id.substr(0, 10),
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
        status: lottery.status,
        attend_num: attendees.data.meta.total_count,
        attend_avatar_list: attendees.data.objects.map(
          item => item.avatar_cache
        )
      });
      this.countDown();
    } catch (e) {
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
  async onApprove() {
    try {
      // await main(
      //   {
      //     data: {
      //       id: "5d83295f09e085798d1879ef",
      //       status: 2
      //     },
      //     request: { user: { id: "81550584324453" } }
      //   },
      //   (err, msg) => {
      //     debugger;
      //     console.log(err);
      //   }
      // );

      await dao.approveLottery(this.data.id, CONST.APPROVED);
      Toast.success("审批通过成功");
    } catch (e) {
      console.log(e);
    }
  },
  async onReject() {
    try {
      await dao.approveLottery(this.data.id, CONST.REJECTED);
      Toast.success("已驳回");
    } catch (e) {
      console.log(e);
    }
  }
});

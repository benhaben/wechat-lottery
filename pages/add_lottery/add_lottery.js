import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import { ROUTE, CONST, TABLE_ID } from "../../utils/constants";
import Big from "../../utils/big";
import {
  toFixed1,
  openDateISOString,
  randomMoneyUrl,
  toFixed3,
  debounce
} from "../../utils/function";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import { ROUTE_DATA } from "../../utils/uiConstants";
import { vAddUpdateMoneyLotteryParam } from "../../utils/validateFn";

const { regeneratorRuntime } = global;

//获取应用实例
const app = getApp();

Page({
  data: {
    create: true,
    id: null,
    url: randomMoneyUrl(),
    total_prize: 1.8, //默认第一个 9.9
    lucky_num_per: 18, // 每个人的奖励运气值
    open_people_num: CONST.DEFAULT_OPEN_PEOPLE_NUM,
    hongbao_num: CONST.HONGBAO_NUM,
    fudai_num: CONST.FUDAI_NUM,
    desc_checked: !!app.getDesc(),
    desc_initiator: app.getDesc(),
    ad_checked: app.getAdsData() && app.getAdsData().length > 0,
    pic_data: app.getAdsData(),
    time_checked: false,
    show_in_main: true,
    auth: false,
    loading: false
  },
  onLoad: async function(options) {
    try {
      let that = this;
      let lottery_id = options.id;

      if (lottery_id) {
        // 修改
        let ret = await dao.getLotteryById(lottery_id);
        let lottery = ret.data;
        that.setData({
          create: false,
          id: lottery.id,
          hash: lottery.id.substr(0, 10),
          url: lottery.url,
          total_prize: toFixed1(lottery.total_prize / CONST.MONEY_UNIT),
          open_people_num: lottery.open_people_num,
          time_checked: lottery.open_people_num === 0,
          lucky_num_per: lottery.lucky_num_per,
          desc_checked: !!lottery.desc_initiator,
          desc_initiator: lottery.desc_initiator,
          ad_checked: lottery.pic_data && lottery.pic_data.length > 0,
          pic_data: lottery.pic_data,
          open_date: lottery.open_date,
          status: lottery.status,
          show_in_main: lottery.show_in_main,
          auth: app.hasAuth()
        });
      } else {
        // 增加
        this.setData({
          auth: app.hasAuth(),
          create: true,
          pic_data: app.getAdsData()
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
  addDetails: function(event) {
    let that = this;
    wx.navigateTo({
      url: ROUTE.PIC_DETAILS,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        [ROUTE_DATA.BACK_PIC_DETAILS_TO_ADD_LOTTERY]: function(e) {
          if (e && e.data) {
            that.setData({
              ad_checked: true,
              pic_data: e.data
            });
          }
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit(
          ROUTE_DATA.FROM_ADD_LOTTERY_TO_PIC_DETAILS,
          that.data.pic_data
        );
      }
    });
  },
  onInputDesc: function(e) {
    this.data.desc_initiator = e.detail.value;
  },
  onTimeChange: function(event) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      time_checked: event.detail
    });
  },
  onShowInMainChange: function(event) {
    this.setData({
      show_in_main: event.detail
    });
  },
  onDescChange: function(event) {
    // 需要手动对 checked 状态进行更新
    if (event.detail) {
      this.setData({
        desc_checked: event.detail
      });
    } else {
      this.setData({
        desc_checked: event.detail,
        desc_initiator: null
      });
    }
  },
  onAdChange: function(event) {
    // 需要手动对 checked 状态进行更新
    if (event.detail) {
      this.setData({
        ad_checked: event.detail
      });
    } else {
      this.setData({
        pic_data: null,
        ad_checked: event.detail
      });
    }
  },
  selectImage: async function(event) {
    try {
      let res = await wxPromise.chooseImage({
        count: 1,
        sourceType: ["album", "camera"]
      });

      // wxCensorImage 需要开启权限
      let risky = await wx.BaaS.wxCensorImage(res.tempFilePaths[0]);

      if (risky === true) {
        Dialog.alert({
          title: "图片检查失败",
          message: "您的图片不符合微信标准"
        });
        return;
      }

      let MyFile = new wx.BaaS.File();
      let fileParams = {
        filePath: res.tempFilePaths[0]
      };
      let metaData = {
        categoryName: "lottery_images"
      };

      let uploadTask = await MyFile.upload(
        fileParams,
        metaData
      ).onProgressUpdate(e => {
        // 监听上传进度
        console.log(e);
      });
      this.data.file = uploadTask.data.file;
      this.setData({
        url: this.data.file.path
      });
    } catch (err) {
      console.debug(err);
    }
  },
  onPrizeChange: debounce(function(event) {
    let that = this;
    let value = event.detail;
    console.log(value);
    if (value) {
      that.setData({
        total_prize: toFixed1(value),
        lucky_num_per: toFixed1(value) * CONST.LUCKY_RATIO_FUDAI_PACKAGE
      });
    } else {
      that.setData({
        total_prize: null,
        lucky_num_per: null
      });
    }
  }),
  onPeopleNumChange: debounce(function(event) {
    let value = event.detail;
    console.log(value);
    this.setData({
      open_people_num: parseInt(value)
    });
  }),
  onConfirm: async function(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      vAddUpdateMoneyLotteryParam(this.data);

      this.setData({
        loading: true
      });

      // （创建抽奖，创建订单）-> 支付，
      let lottery = await dao.createLottery({
        url: this.data.url,
        open_date: openDateISOString(),
        pic_data: this.data.pic_data,
        total_prize: Number(this.data.total_prize * CONST.MONEY_UNIT),
        lucky_num_per: Number(this.data.lucky_num_per),
        open_people_num: this.data.time_checked ? 0 : this.data.open_people_num,
        show_in_main: this.data.show_in_main,
        desc_initiator: this.data.desc_initiator,
        avatar: app.getAvatar(),
        nickname: app.getNickname()
      });
      let totalCost = this.data.total_prize;

      // 用户可能取消支付，产生一个未支付订单
      // await this.pay(lottery, totalCost);

      this.setData({ loading: false });

      wx.navigateBack();
    } catch (err) {
      Toast.fail(err.message);
      this.setData({
        loading: false
      });
    }
  },
  async pay(lottery, cost) {
    const params = {
      // totalCost: add_lottery.total_prize,
      totalCost: cost,
      merchandiseDescription: `${lottery.nickname}发起的抽奖：${lottery.id}`,
      merchandiseSchemaID: TABLE_ID.LOTTERY,
      merchandiseRecordID: lottery.id,
      merchandiseSnapshot: lottery
    };

    return wx.BaaS.pay(params);
  },
  onPay: async function(event) {
    try {
      this.setData({
        loading: true
      });
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }
      let totalCost = new Big(this.data.total_prize);
      await this.pay(this.data, totalCost);
      this.setData({
        loading: false
      });
      wx.navigateBack();
    } catch (err) {
      console.log(err);
      wx.navigateBack();
      this.setData({ loading: false });
      Toast.fail("支付失败");
    }
  },
  onUpdate: async function(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      this.setData({ loading: true });
      // 只能修改宣传信息
      let lottery = await dao.updateLottery({
        url: this.data.url,
        id: this.data.id,
        show_in_main: this.data.show_in_main,
        pic_data: this.data.pic_data,
        desc_initiator: this.data.desc_initiator
      });

      this.setData({ loading: false });
      Toast.success("更新成功");
      wx.navigateBack();
    } catch (err) {
      this.setData({ loading: false });
      Toast.fail("更新失败");
    }
  },
  userInfoHandler(data) {
    let that = this;
    wx.BaaS.auth.loginWithWechat(data).then(
      async user => {
        // user 包含用户完整信息，详见下方描述
        await app.getUserInfo(user.get("id"));
        that.setData({
          auth: app.hasAuth()
        });
      },
      err => {}
    );
  }
});

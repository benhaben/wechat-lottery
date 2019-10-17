// pages/add_product_lottery/add_product_lottery.js
import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import { ROUTE, CONST, TABLE_ID } from "../../utils/constants";
import Big from "../../utils/big";
import {
  toFixed1,
  openDateISOString,
  randomProductUrl
} from "../../utils/function";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";
import { ROUTE_DATA } from "../../utils/uiConstants";
import { vAddUpdateLotteryParam } from "../../utils/validateFn";
import SystemInfoUtil from "../../utils/systemInfoUtil";
import { payLottery } from "../../utils/uiFunction";

const { regeneratorRuntime } = global;
const app = getApp();

// TODO：BaaS.wxCensorText

Page({
  /**
   * 页面的初始数据
   */
  data: {
    create: true,
    status: 0,
    id: null,
    sponsor: null,
    product_name: null,
    product_num: null,
    url: randomProductUrl(),
    open_people_num:
      CONST.PRODUCT_DEFAULT_OPEN_PEOPLE_NUM / CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
    slide_open_people_num:
      CONST.DEFAULT_OPEN_PEOPLE_NUM / CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
    total_prize:
      CONST.PRODUCT_DEFAULT_OPEN_PEOPLE_NUM / CONST.PRODUCT_LOTTERY_PEOPLE_UNIT, //一万人一块钱
    desc_checked: false,
    desc_initiator: null,
    ad_checked: false,
    pic_data: null,
    auth: false,
    loading: false,
    show_in_main: false,
    time_checked: false,
    iOS: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
          total_prize: toFixed1(lottery.total_prize / CONST.MONEY_UNIT),
          product_name: lottery.product_name,
          product_num: lottery.product_num,
          sponsor: lottery.sponsor,
          id: lottery.id,
          hash: lottery.id.substr(0, 10),
          url: lottery.url,
          open_people_num_read: lottery.open_people_num,
          time_checked: lottery.open_people_num == 0,
          open_people_num:
            lottery.open_people_num / CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
          slide_open_people_num:
            lottery.open_people_num / CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
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
        console.log(`SystemInfoUtil.platform : ${SystemInfoUtil.platform}`);

        // if (
        //   SystemInfoUtil.platform == SystemInfoUtil.IOS
        //   // && SystemInfoUtil.wxSDKVersion == 244
        // ) {
        //   this.setData({
        //     iOS: true,
        //     show_in_main: false //iOS不支持
        //   });
        // } else {
        //   this.setData({
        //     iOS: false
        //   });
        // }

        // 增加
        this.setData({
          create: true,
          auth: app.hasAuth(),
          desc_checked: !!app.getDesc(),
          desc_initiator: app.getDesc(),
          ad_checked: app.getAdsData().length > 0,
          pic_data: app.getAdsData()
        });
      }
    } catch (e) {
      console.log(e);
    }
  },

  onOpenPeopleDrag(event) {
    // 滑块是10~100之间 ~ 1w人到10w人
    let res = event.detail.value / 10;
    this.setData({
      slide_open_people_num: event.detail.value,
      open_people_num: res,
      total_prize: res
    });
  },

  onSponsorChange(event) {
    this.setData({
      sponsor: event.detail
    });
  },

  onProductNameChange(event) {
    this.setData({
      product_name: event.detail
    });
  },

  onProductNumChange(event) {
    this.setData({
      product_num: event.detail
    });
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
  onTimeChange: function(event) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      time_checked: event.detail
    });
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
  onShowInMainChange: function(event) {
    let show = event.detail;
    if (show) {
      this.setData({
        show_in_main: show,
        total_prize:
          (this.data.open_people_num * CONST.PRODUCT_LOTTERY_PEOPLE_UNIT) /
          CONST.PRODUCT_LOTTERY_PEOPLE_UNIT
      });
    } else {
      this.setData({
        show_in_main: show,
        total_prize: 0
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
  onConfirm: async function(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      vAddUpdateLotteryParam(this.data);

      this.setData({
        loading: true
      });

      let totalCost = this.data.total_prize;

      // （创建抽奖，创建订单）-> 支付，
      let lottery = await dao.createLottery({
        url: this.data.url,
        open_date: openDateISOString(),
        pic_data: this.data.pic_data,
        open_people_num: this.data.time_checked
          ? 0
          : this.data.open_people_num * CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
        desc_initiator: this.data.desc_initiator,
        avatar: app.getAvatar(),
        nickname: app.getNickname(),
        product_name: this.data.product_name,
        product_num: this.data.product_num,
        lottery_type: 1,
        sponsor: this.data.sponsor,
        total_prize: this.data.total_prize * CONST.MONEY_UNIT,
        show_in_main: this.data.show_in_main && !this.data.iOS
      });

      // 不上首页不需要支付
      if (this.data.show_in_main && !this.data.iOS) {
        // 用户可能取消支付，产生一个未支付订单
        // await this.pay(lottery, totalCost);
      }

      this.setData({ loading: false });

      wx.navigateBack();
    } catch (err) {
      // TODO: 判断异常类型，可以显示的才Toast
      Toast.fail(err.message);
      console.log(err);
      this.setData({
        loading: false
      });
    }
  },
  async pay(lottery, cost) {
    let sponsor = lottery.sponsor || app.getNickname();
    return payLottery(lottery, cost, sponsor);
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

      if (!this.data.show_in_main) {
        console.log("不上首页不需要支付");
        return;
      }

      let totalCost = new Big(this.data.total_prize);
      await this.pay(this.data, totalCost);
      this.setData({
        loading: false
      });
      wx.navigateBack();
    } catch (err) {
      console.log(err);
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

      vAddUpdateLotteryParam(this.data);

      this.setData({ loading: true });
      // 只能修改宣传信息
      let lottery = await dao.updateLottery({
        url: this.data.url,
        id: this.data.id,
        product_num: this.data.product_num,
        product_name: this.data.product_name,
        sponsor: this.data.sponsor,
        pic_data: this.data.pic_data,
        desc_initiator: this.data.desc_initiator
      });

      this.setData({ loading: false });
      Toast.success("更新成功");
      wx.navigateBack();
    } catch (err) {
      // TODO: 判断异常类型，可以显示的才Toast
      Toast.fail(err.message);
      console.log(err);
      this.setData({ loading: false });
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

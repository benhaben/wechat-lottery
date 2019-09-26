// pages/add_product_lottery/add_product_lottery.js
import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import { ROUTE, ROUTE_DATA, CONST, TABLE_ID } from "../../utils/constants";
import Big from "../../utils/big";
import { toFixed1, openDateTimeStamp } from "../../utils/function";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";

const { regeneratorRuntime } = global;
const app = getApp();

// TODO：BaaS.wxCensorText

Page({
  /**
   * 页面的初始数据
   */
  data: {
    create: true,
    id: null,
    error_product_name: true,
    error_product_num: true,
    product_name: null,
    product_num: null,
    url: CONST.DEFAULT_URL,
    default_open_people_num: CONST.DEFAULT_OPEN_PEOPLE_NUM,
    open_people_num:
      CONST.PRODUCT_LOTTERY_DEFAULT_SLIDER_OPEN_PEOPLE_NUM /
      CONST.PRODUCT_LOTTERY_FEE_PEOPLE_RATIO,
    slide_open_people_num: CONST.PRODUCT_LOTTERY_DEFAULT_SLIDER_OPEN_PEOPLE_NUM,
    ad_fee:
      CONST.PRODUCT_LOTTERY_DEFAULT_SLIDER_OPEN_PEOPLE_NUM /
      CONST.PRODUCT_LOTTERY_FEE_PEOPLE_RATIO,
    desc_checked: !!app.getDesc(),
    desc_initiator: app.getDesc(),
    ad_checked: app.getAdsData().length > 0,
    pic_data: app.getAdsData(),
    auth: false,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let that = this;
      let lottery_id = options.id;
      // let lottery_id = "5d7612d71db94f5d2e68fd74";

      if (lottery_id) {
        // 修改
        let ret = await dao.getLotteryById(lottery_id);
        let lottery = ret.data;
        that.setData({
          create: false,
          product_name: lottery.product_name,
          product_num: lottery.product_num,
          id: lottery.id,
          hash: lottery.id.substr(0, 10),
          url: lottery.url,
          open_people_num: lottery.open_people_num,
          desc_checked: !!lottery.desc_initiator,
          desc_initiator: lottery.desc_initiator,
          ad_checked: lottery.pic_data && lottery.pic_data.length > 0,
          pic_data: lottery.pic_data,
          open_date: lottery.open_date,
          status: lottery.status
        });
      } else {
        // 增加
        this.setData({
          create: true,
          auth: app.hasAuth(),
          pic_data: app.getAdsData()
        });
      }
    } catch (e) {
      console.log(e);
    }
  },

  onOpenPeopleDrag(event) {
    let res = event.detail.value / CONST.PRODUCT_LOTTERY_FEE_PEOPLE_RATIO;
    this.setData({
      slide_open_people_num: event.detail.value,
      open_people_num: res,
      ad_fee: res
    });
  },

  onProductNameChange(event) {
    this.setData({
      product_name: event.detail,
      error_product_name: false
    });
  },

  onProductNumChange(event) {
    this.setData({
      product_num: event.detail,
      error_product_num: false
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
  onConfirm: async function(event) {
    try {
      const formId = event.detail.formId;
      if (formId) {
        wx.BaaS.wxReportTicket(formId);
        console.log(`event.detail.formId - ${event.detail.formId}`);
      }

      debugger;
      if (!(this.data.product_name && this.data.product_num)) {
        Toast.fail("请输入奖品名称和数目");
        this.setData({
          error_product_name: !!this.data.product_name,
          error_product_num: !!this.data.product_num
        });
        return;
      }
      this.setData({
        loading: true
      });

      // （创建抽奖，创建订单）-> 支付，
      let lottery = await dao.createLottery({
        url: this.data.url,
        open_date: openDateTimeStamp(),
        pic_data: this.data.pic_data,
        open_people_num:
          this.data.open_people_num * CONST.PRODUCT_LOTTERY_PEOPLE_UNIT,
        desc_initiator: this.data.desc_initiator,
        avatar: app.getAvatar(),
        nickname: app.getNickname(),
        product_name: this.data.product_name,
        product_num: this.data.product_num,
        lottery_type: 1
      });

      // 用户可能取消支付，产生一个未支付订单
      await this.pay(lottery, 0.01);

      this.setData({ loading: false });

      wx.navigateBack();
    } catch (err) {
      console.log(err);
      this.setData({
        loading: false
      });
    }
  },
  async pay(lottery, cost) {
    const params = {
      // totalCost: add_lottery.total_prize,
      totalCost: 0.01,
      merchandiseDescription: `${lottery.nickname}发起的抽奖：${lottery.id}`,
      merchandiseSchemaID: TABLE_ID.LOTTERY,
      merchandiseRecordID: lottery.id,
      merchandiseSnapshot: lottery
    };

    return wx.BaaS.pay(params);
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
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});

import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import { ROUTE, ROUTE_DATA, CONST } from "../../utils/constants";
import Big from "../../utils/big";
import { toFixed1, openDateTimeStamp } from "../../utils/function";
import lotteryRep from "../../dao/lotteryRep";

const { regeneratorRuntime } = global;

//获取应用实例
const app = getApp();

Page({
  data: {
    url:
      "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png", // 默认图片 TODO: 需要设计换图
    file: null, // 知晓云返回的服务端文件对象
    total_prize: toFixed1(CONST.LOTTERY_PRIZE_LIST[0]), //默认第一个 9.9
    lucky_num: toFixed1(
      new Big(CONST.LOTTERY_PRIZE_LIST[0]).times(CONST.LUCKY_RATIO_OPEN)
    ),
    prize_list: CONST.LOTTERY_PRIZE_LIST,
    prize_colors: CONST.PRIZE_COLORS,
    prize_colors_switch: ["lightgray", "red"], // 可以换成切换class
    plan_index: 0,
    plans: CONST.PLANS,
    lucky_num_per: 0,
    show_plan: false,
    open_people_num: 1000,
    tag_items: [
      "80后",
      "A股",
      "微商",
      "足球",
      "音乐",
      "亲子教育",
      "美食",
      "美女"
    ],
    desc_checked: false,
    desc_initiator: "",
    ad_checked: false,
    pic_data: null,
    auth: false
  },
  onLoad: function() {
    this.setData({
      auth: app.hasAuth()
    });
  },
  onUnload: function() {},
  onReady: function() {},
  onInputDesc: function(e) {
    this.data.desc_initiator = e.detail.value;
  },
  onDescChange: function(event) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      desc_checked: event.detail
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
  onPlanSelect: function() {
    this.setData({
      show_plan: true
    });
  },
  onClosePlan: function() {
    this.setData({
      show_plan: false
    });
  },
  onPlanChange: function(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`);
    this.data.lucky_num_per = toFixed1(
      new Big(this.data.lucky_num).div(
        CONST.PLANS_PACKAGE[this.data.plan_index]
      )
    );
    this.setData({
      plan_index: index,
      lucky_num_per: this.data.lucky_num_per
    });
  },
  onSelectTag: function(e) {
    let that = this;
    wx.navigateTo({
      url: ROUTE.TAGS,
      events: {
        [ROUTE_DATA.BACK_TAGS_TO_ADD_LOTTERY]: function(e) {
          if (e && e.data) {
            that.setData({
              tag_items: e.data
            });
          }
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit(
          ROUTE_DATA.FROM_ADD_LOTTERY_TO_TAGS,
          that.data.tag_items
        );
      }
    });
  },
  onSelectPrize: function(e) {
    var index = e.currentTarget.dataset.index;
    for (let i in this.data.prize_colors) {
      this.data.prize_colors[i] = 0;
    }
    this.data.prize_colors[index] = 1;
    this.data.total_prize = toFixed1(CONST.LOTTERY_PRIZE_LIST[index]);
    this.data.lucky_num = toFixed1(
      new Big(CONST.LOTTERY_PRIZE_LIST[index]).times(CONST.LUCKY_RATIO_OPEN)
    );
    this.data.open_people_num = CONST.LOTTERY_NUM_PEOPLE[index];
    this.data.lucky_num_per = toFixed1(
      new Big(this.data.lucky_num).div(
        CONST.PLANS_PACKAGE[this.data.plan_index]
      )
    );

    this.setData(this.data);
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
      }
    });
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
      // cdn_path: "1i5h6hpru0CZ8tVP.png"
      // created_at: 1567648963
      // id: "5d706cc35fcc734afc5d6198"
      // mime_type: "image/png"
      // name: "wxb7fb2c1219817db3.o6zAJszUi-hE6mgEhbg7Lhx4ZFLA.jU1Z2g17NS7fac5fb5e904ea92ae289f6f4db131c1c4.png"
      // path: "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png"
      // size: 29027
      this.setData({
        url: this.data.file.path
      });
    } catch (err) {
      console.debug(err);
    }
  },
  onConfirm: async function(event) {
    try {
      let ret = await lotteryRep.createLottery({
        url: this.data.url,
        file: this.data.file,
        open_date: openDateTimeStamp(),
        pic_data: this.data.pic_data,
        total_prize: this.data.total_prize,
        lucky_num: this.data.lucky_num,
        lucky_num_per: this.data.lucky_num_per,
        plan_index: this.data.plan_index,
        plan: this.data.plans[this.data.plan_index],
        open_people_num: this.data.open_people_num,
        tag_items: this.data.tag_items,
        desc_initiator: this.data.desc_initiator
      });
      //TODO: 跳转到参与抽奖页面，那边是只读页面，自己也可以参与抽奖，也可以分享
      console.debug(ret);
    } catch (err) {
      console.debug(err);
    }
  },
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
  }
});
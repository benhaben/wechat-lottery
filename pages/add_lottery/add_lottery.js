import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import { ROUTE, ROUTE_DATA, CONST, TABLE_ID } from "../../utils/constants";
import Big from "../../utils/big";
import { toFixed1, openDateTimeStamp } from "../../utils/function";
import dao from "../../utils/dao";
import Toast from "../../lib/van/toast/toast";

const { regeneratorRuntime } = global;

//获取应用实例
const app = getApp();

Page({
  data: {
    create: true,
    id: null,
    url: CONST.DEFAULT_URL,
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
    lucky_num_per: CONST.LOTTERY_PRIZE_LIST[0] * 10,
    show_plan: false,
    open_people_num: 1000,
    tag_items: app.getTagItems(),
    desc_checked: !!app.getDesc(),
    desc_initiator: app.getDesc(),
    ad_checked: !!app.getAdsData(),
    pic_data: app.getAdsData(),
    auth: false,
    loading: false
  },
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
          id: lottery.id,
          hash: lottery.id.substr(0, 10),
          url: lottery.url,
          total: `${lottery.total_prize}元/100人`,
          lucky_num: lottery.lucky_num,
          open_people_num: lottery.open_people_num,
          plan_index: lottery.plan_index,
          lucky_num_per: lottery.lucky_num_per,
          tag_items: lottery.tag_items,
          desc_checked: !!lottery.desc_initiator,
          desc_initiator: lottery.desc_initiator,
          ad_checked: !!lottery.pic_data,
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
  onPlanSelect: function() {
    if (this.data.id) {
      Dialog.alert({
        message: "只能修改宣传信息，不能修改抽奖金额相关信息。"
      });
      return;
    }
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
    if (this.data.id) {
      Dialog.alert({
        message: "只能修改宣传信息，不能修改抽奖金额相关信息。"
      });
      return;
    }
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`);

    this.setData({
      plan_index: index
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
    if (this.data.id) {
      Dialog.alert({
        message: "只能修改宣传信息，不能修改抽奖金额相关信息。"
      });
      return;
    }
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
    this.data.lucky_num_per = this.data.total_prize * 10;

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

      this.setData({
        loading: true
      });
      // （创建抽奖，创建订单）-> 支付，
      let lottery = await dao.createLottery({
        url: this.data.url,
        file: this.data.file,
        open_date: openDateTimeStamp(),
        pic_data: this.data.pic_data,
        total_prize: Number(this.data.total_prize),
        lucky_num: Number(this.data.lucky_num),
        lucky_num_per: Number(this.data.lucky_num_per),
        plan_index: this.data.plan_index,
        plan: this.data.plans[this.data.plan_index],
        open_people_num: this.data.open_people_num,
        tag_items: this.data.tag_items,
        desc_initiator: this.data.desc_initiator,
        avatar: app.getAvatar(),
        nickname: app.getNickname()
      });

      const params = {
        // totalCost: add_lottery.total_prize,
        totalCost: 0.1,
        merchandiseDescription: `${lottery.nickname}发起的抽奖：${lottery.id}`,
        merchandiseSchemaID: TABLE_ID.LOTTERY,
        merchandiseRecordID: lottery.id,
        merchandiseSnapshot: lottery
      };

      let res = await wx.BaaS.pay(params);
      console.log(`wx.BaaS.pay(params) ：${res.transaction_no}`);

      this.setData({ loading: false });

      wx.navigateTo({
        url: `${ROUTE.ATTEND_LOTTERY}?id=${lottery.id}`
      });
    } catch (err) {
      this.setData({
        loading: false
      });
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
        id: this.data.id,
        pic_data: this.data.pic_data,
        tag_items: this.data.tag_items,
        desc_initiator: this.data.desc_initiator
      });

      this.setData({ loading: false });
      Toast.success("更新成功");
    } catch (err) {
      this.setData({ loading: false });
      Toast.fail("更新失败");
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
      err => {}
    );
  }
});

import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";
import Toast from "../../lib/van/toast/toast";
import { ROUTE, ROUTE_DATA } from "../../utils/constants";

const { regeneratorRuntime } = global;

//获取应用实例
const app = getApp();

Page({
  data: {
    url: "../../images/发起抽奖.png",
    total_prize: 0,
    lucky_num: 0,
    prize_list: ["9.9", "16.8", "33.3", "51.8", "66.6", "86.8", "88.8", "99.9"],
    prize_colors: [1, 0, 0, 0, 0, 0, 0, 0],
    prize_colors_switch: ["lightgray", "red"],
    prize_list_item: "prize-list-item",
    default_plan: 0,
    plan_index: 0,
    plans: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
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
    desc_value: "",
    ad_checked: false,
    pic_data: null
  },
  onLoad: function() {},

  onUnload: function() {},
  onReady: function() {},
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
    Toast(`当前值：${value}, 当前索引：${index}`);
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
    var index = e.currentTarget.dataset.name;
    for (let i in this.data.prize_colors) {
      this.data.prize_colors[i] = 0;
    }
    this.data.prize_colors[index] = 1;
    this.setData({
      prize_colors: this.data.prize_colors
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

      if (risky) {
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

      let uploadTask = MyFile.upload(fileParams, metaData).onProgressUpdate(
        e => {
          // 监听上传进度
          console.log(e);
        }
      );
    } catch (err) {
      console.debug(err);
    }
  }
});

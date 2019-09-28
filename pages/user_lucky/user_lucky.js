// pages/user/user_lucky/user_lucky.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { ROUTE } from "../../utils/constants";

const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lucky_num: app.getLuckyNum(),
    loading: false,
    rules: [
      {
        title: "邀请朋友加入",
        info: "+ 100个运气值/人",
        btn: "去邀请"
      }
    ],
    use_rules: [
      {
        title: "参与抽奖",
        info: "- 1个运气值/次",
        btn: "去使用"
      },
      {
        title: "加中奖权重",
        info: "- 1个运气值，+ 2个权重",
        btn: "去使用"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.getUserInfo();
  },

  async onSign(event) {
    const formId = event.detail.formId;
    if (formId) {
      wx.BaaS.wxReportTicket(formId);
      console.log(`event.detail.formId - ${event.detail.formId}`);
    }
    this.setData({
      loading: true
    });

    let ret = await dao.dailyCheckin(app.getUserId());

    console.log(ret);
    this.setData({
      loading: false
    });

    let that = this;
    if (!ret) {
      Toast.fail("已经签过到了");
    } else {
      // 触发器需要一段时间更新
      setTimeout(async () => {
        await app.getUserInfo();
        that.setData({
          lucky_num: app.getLuckyNum()
        });
      }, 3000);
    }
  },
  onGo(event) {
    let index = event.currentTarget.dataset.index;
    let name = event.currentTarget.dataset.name;

    console.log(`${index} - ${name}`);

    if (index === 0) {
      wx.navigateTo({
        url: ROUTE.SHARE_PIC_HOME
      });
    }
  },
  onGotoLuckyDetails() {
    wx.navigateTo({
      url: ROUTE.USER_LUCKY_DETAILS
    });
  },
  onGoRule(event) {
    let index = event.currentTarget.dataset.index;
    let name = event.currentTarget.dataset.name;

    console.log(`${index} - ${name}`);

    wx.switchTab({
      url: ROUTE.HOME
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

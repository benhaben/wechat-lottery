// pages/user/user_lucky/user_lucky.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";

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
        title: "发起奖励",
        info: "+ 总奖金额 X 100 个运气值",
        btn: "去发起"
      },
      {
        title: "开奖奖励",
        info: "+ 总奖金额 X 1000 个运气值",
        btn: "去发起"
      },
      {
        title: "福袋奖励",
        info: "+ 100个运气值/人",
        btn: "去发起"
      },
      {
        title: "邀请朋友加入",
        info: "+ 总奖金额 X 10 个运气值",
        btn: "去邀请"
      },
      {
        title: "线人发起抽奖",
        info: "+ 总奖金额 X 10 个运气值",
        btn: "去查看"
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
      },
      {
        title: "加中奖权重",
        info: "- 1个运气值/次",
        btn: "去使用"
      },
      {
        title: "更多抽奖",
        info: "- 10个运气值/次",
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
    const formID = event.detail.formId;
    wx.BaaS.wxReportTicket(formID);

    console.log(`event.detail.formId - ${event.detail.formId}`);
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
    debugger;
    console.log(
      `${event.currentTarget.dataset.index} - ${event.currentTarget.dataset.name}`
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

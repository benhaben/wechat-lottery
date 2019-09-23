// pages/user_approve/user_approve.js

import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { CONST, PAGE_SIZE, ROUTE, ROUTE_DATA } from "../../utils/constants";
import { countDown } from "../../utils/function";
const { regeneratorRuntime } = global;
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    search_data: null,
    waitApprovalList: [],
    waitApprovalListOffset: 0,
    approvalList: [],
    approvalListOffset: 0,
    rejectList: [],
    rejectListOffset: 0,
    queryList: [],
    showTab: true
  },
  onChange(event) {},
  async onSearch(event) {
    try {
      console.log(`event - ${event.detail}`);
      await this.loadMoreQueryList(event.detail);
      this.setData({
        showTab: false
      });
    } catch (e) {
      console.log(e);
    }
  },
  onCancel(event) {
    console.log(event);
    this.setData({
      showTab: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: async function(options) {
    // load 待审核的抽奖
    try {
      //reset
      this.setData({
        waitApprovalList: [],
        waitApprovalListOffset: 0,
        approvalList: [],
        approvalListOffset: 0,
        rejectList: [],
        rejectListOffset: 0,
        queryList: [],
        showTab: true
      });
      await this.loadMoreWaitApprovalList();
      await this.loadMoreApprovalList();
      await this.loadMoreRejectList();
    } catch (e) {
      console.log(e);
    }
  },
  loadMoreQueryList: async function(queryString) {
    let lotteries = await dao.queryLottery(PAGE_SIZE * 10, 0, queryString);
    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize / CONST.BALANCE_TIMES}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    this.setData({
      queryList: add
    });
  },
  loadMoreRejectList: async function(event) {
    let lotteries = await dao.getLottery(
      PAGE_SIZE,
      this.data.rejectListOffset,
      CONST.REJECTED
    );
    if (lotteries.data.objects <= 0) {
      return;
    }
    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize / CONST.BALANCE_TIMES}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    this.setData({
      rejectList: this.data.rejectList.concat(add),
      rejectListOffset: this.data.rejectListOffset + add.length
    });
  },
  loadMoreApprovalList: async function(event) {
    let lotteries = await dao.getLottery(
      PAGE_SIZE,
      this.data.approvalListOffset,
      CONST.APPROVED
    );
    if (lotteries.data.objects <= 0) {
      return;
    }
    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize / CONST.BALANCE_TIMES}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    this.setData({
      approvalList: this.data.approvalList.concat(add),
      approvalListOffset: this.data.approvalListOffset + add.length
    });
  },
  loadMoreWaitApprovalList: async function(event) {
    let lotteries = await dao.getLottery(
      PAGE_SIZE,
      this.data.waitApprovalListOffset,
      CONST.WAIT_APPROVE
    );
    if (lotteries.data.objects <= 0) {
      return;
    }
    let add = lotteries.data.objects.map(lottery => {
      lottery.hash = lottery.id.substr(0, 10);
      lottery.total = `${lottery.total_prize / CONST.BALANCE_TIMES}元/100人`;
      lottery.countdownStr = countDown(lottery.open_date);
      return lottery;
    });
    this.setData({
      waitApprovalList: this.data.waitApprovalList.concat(add),
      waitApprovalListOffset: this.data.waitApprovalListOffset + add.length
    });
  },
  onTap(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `${ROUTE.ATTEND_LOTTERY}?id=${id}`
    });
  }
});

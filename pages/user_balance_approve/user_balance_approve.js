import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import {
  CONST,
  PAGE_SIZE,
  ROUTE,
  ROUTE_DATA,
  WORD_LIST
} from "../../utils/constants";
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
    let withdraw_list = await dao.queryWithdraw(PAGE_SIZE * 10, 0, queryString);
    let add = withdraw_list.data.objects.map(withdraw_item => {
      withdraw_item.balance = withdraw_item.balance / CONST.MONEY_UNIT;
      return withdraw_item;
    });
    this.setData({
      queryList: add
    });
  },
  loadMoreRejectList: async function(event) {
    let withdraw_list = await dao.getWithdraw(
      PAGE_SIZE,
      this.data.rejectListOffset,
      CONST.WITHDRAW_REJECT
    );
    if (withdraw_list.data.objects <= 0) {
      return;
    }
    let add = withdraw_list.data.objects.map(withdraw_item => {
      withdraw_item.balance = withdraw_item.balance / CONST.MONEY_UNIT;
      return withdraw_item;
    });
    this.setData({
      rejectList: this.data.rejectList.concat(add),
      rejectListOffset: this.data.rejectListOffset + add.length
    });
  },
  loadMoreApprovalList: async function(event) {
    let withdraw_list = await dao.getWithdraw(
      PAGE_SIZE,
      this.data.approvalListOffset,
      CONST.WITHDRAW_APPROVE
    );
    if (withdraw_list.data.objects <= 0) {
      return;
    }
    let add = withdraw_list.data.objects.map(withdraw_item => {
      withdraw_item.balance = withdraw_item.balance / CONST.MONEY_UNIT;
      return withdraw_item;
    });
    this.setData({
      approvalList: this.data.approvalList.concat(add),
      approvalListOffset: this.data.approvalListOffset + add.length
    });
  },
  loadMoreWaitApprovalList: async function(event) {
    let withdraw_list = await dao.getWithdraw(
      PAGE_SIZE,
      this.data.waitApprovalListOffset,
      CONST.WITHDRAW_WAIT_APPROVE
    );
    if (withdraw_list.data.objects <= 0) {
      return;
    }
    let add = withdraw_list.data.objects.map(withdraw_item => {
      withdraw_item.balance = withdraw_item.balance / CONST.MONEY_UNIT;
      return withdraw_item;
    });
    this.setData({
      waitApprovalList: this.data.waitApprovalList.concat(add),
      waitApprovalListOffset: this.data.waitApprovalListOffset + add.length
    });
  },
  async onReject(event) {
    let id = event.currentTarget.dataset.id;
    console.log(id);
    try {
      let ret = await dao.approveWithdraw(id, CONST.WITHDRAW_REJECT);
      Toast.success(WORD_LIST.APPROVED);
      this.onShow();
    } catch (e) {
      Toast.fail(WORD_LIST.REJECTED);
      console.log(e);
    }
  },
  async onApprove(event) {
    let id = event.currentTarget.dataset.id;
    console.log(id);

    try {
      let ret = await dao.approveWithdraw(id, CONST.WITHDRAW_APPROVE);
      Toast.success(WORD_LIST.APPROVED);
      this.onShow();
    } catch (e) {
      Toast.fail(WORD_LIST.REJECTED);
      console.log(e);
    }
  }
});

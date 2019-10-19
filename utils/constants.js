// 本文件需要考虑兼容性，需要在faas那边也用，所以不要使用wx.开头的函数

export const ROUTE = {
  HOME: "/pages/home/home",
  PIC_DETAILS: "/pages/pic_details/details",
  ADD_LOTTERY: "/pages/add_lottery/add_lottery",
  ADD_PRODUCT_LOTTERY: "/pages/add_product_lottery/add_product_lottery",
  LOTTERY_FINISHED: "/pages/lottery_finished/lottery_finished",
  ATTEND_LOTTERY: "/pages/attend_lottery/attend_lottery",
  WIN_LOTTERY: "/pages/win_lottery/win_lottery",
  USER: "/pages/user/user",
  USER_LUCKY: "/pages/user_lucky/user_lucky",
  SHARE_PIC: "/pages/share_pic/share_pic",
  ATTENDEES: "/pages/attendees/attendees",
  SHARE_PIC_HOME: "/pages/share_pic_home/share_pic_home",
  USER_LUCKY_DETAILS: "/pages/user_lucky_details/user_lucky_details",
  USER_BALANCE: "/pages/user_balance/user_balance",
  USER_FANS: "/pages/user_fans/user_fans",
  USER_QUESTION: "/pages/user_question/user_question",
  USER_ADS: "/pages/user_ads/user_ads",
  USER_DESC: "/pages/user_desc/user_desc",
  USER_BALANCE_DETAILS: "/pages/user_balance_details/user_balance_details",
  USER_ALL_LOTTERIES: "/pages/user_all_lotteries/user_all_lotteries",
  USER_GET_LOTTERIES: "/pages/user_get_lotteries/user_get_lotteries",
  USER_SEND_LOTTERIES: "/pages/user_send_lotteries/user_send_lotteries"
};

export const ERR_TYPE = {
  GET_LOTTERY_FAILED: "get lottery failed",
  OUT_OF_LUCKY_NUM: "out of lucky num",
  INSUFFICIENT_AUTHORITY: "Insufficient authority",
  APPROVE_LOTTERY_STATUS_ERROR: "status 状态错误；状态只能从1到2或者从1到-1",
  NOT_PAID: "抽奖未支付",
  INVALID_PARAM: "参数不对",
  APPROVED: "抽奖已经审批通过",
  WITHDRAW_NOT_INTEGER: "提现值不是整数",
  WITHDRAW_NOT_IN_RANGE: "提现值不在范围内",
  WITHDRAW_INSUFFICIENT_BALANCE: "余额不足",
  WITHDRAW_DAILY_ONCE: "提现失败，每日只能提现一次",
  WITHDRAW_STATUS_ERROR: "status 状态错误；修改的目标状态只能是1或者-1",
  WITHDRAW_APPROVED: "提现已经审批通过了",
  WITHDRAW_STATUS_CURRENT_ERROR:
    "status 状态错误；状态只能从0到1或者从0到-1，当前不是0",
  ADD_INVITER_ID_SAME: "邀请人和被邀请人不能是同一人",
  ADD_INVITER_UID_EXIST: "已经存在邀请人",
  UID_NOT_EXIST: "找不到该用户"
};

export const SUCCESS_TYPE = {
  WITHDRAW_CREATE_SUCCESS: "提现申请成功"
};

// 活动规则内容库 id
export const CONTENT_GROUP = "";

// 线上数据表 id
export const TABLE_ID = {
  USER_LOTTERY_RECORD: 81892,
  LOTTERY: 81873,
  CONFIG: 83587,
  ERROR: 83510,
  DAILY_CHECKIN: 84214,
  BALANCE_LUCKY_RECORD: 83371,
  QUESTIONS: 84573,
  WITHDRAW: 84648,
  ADDRESS_BOOK: 84947
};

export const CONFIG_ID = "5d7917899d8da5229c037105";

export const FUNCTION_NAME = {
  ADD_WEIGHT: "addWeight",
  ADD_INVITER: "addInviter",
  CREATE_WITHDRAW: "createWithdraw",
  APPROVE_WITHDRAW: "approveWithdraw",
  CREATE_LOTTERY: "createLottery",
  UPDATE_LOTTERY: "updateLottery",
  ATTEND_LOTTERY: "attendLottery",
  APPROVE_LOTTERY: "approveLottery",
  IS_ADMIN: "isAdmin"
};

// TODO：一些参数最好在服务端配置，如果再服务端计算就要有接口，现在都在小程序侧做，重客户端

/**
 * 用在模板消息，界面上的字符串，未来可能需要翻译的（想多了）
 */
export const WORD_LIST = {
  LOTTERY_TYPE_PRODUCT: "实物抽奖",
  LOTTERY_TYPE_MONEY: "现金抽奖",
  WITHDRAW: "提现",
  APPROVED: "审批通过",
  REJECTED: "审批不通过"
};

export const CONFIG_KEY = {
  LUCKY_RATIO_INVITATION: "lucky_ratio_invitation"
};

export const CONST = {
  WITHDRAW_MAX: 100, // 提现最大值
  WITHDRAW_MIN: 1, // 提现最小值
  WITHDRAW_REJECT: -1, // 提现驳回
  WITHDRAW_APPROVE: 1, // 提现通过
  WITHDRAW_WAIT_APPROVE: 0, // 等待提现审核
  LOTTERY_TYPE_PRODUCT: 1,
  LOTTERY_TYPE_MONEY: 0,
  PRODUCT_LOTTERY_PEOPLE_UNIT: 1000, // 开奖人数为5，则是5千人
  PRODUCT_DEFAULT_OPEN_PEOPLE_NUM: 1000,
  DEFAULT_OPEN_PEOPLE_NUM: 1000, // 默认的开奖人数
  MONEY_UNIT: 1000, // 余额用整数表示，需要除以1000
  WAIT_PAY: 0, // 等待审批，抽奖意见支付过，状态为1
  WAIT_APPROVE: 1, // 等待审批，抽奖意见支付过，状态为1
  APPROVED: 2, // 审批通过，只能从1到2
  OPENED: 3, // 已经开奖
  REJECTED: -1, // 审批不通过，只能从1到-1
  GET_ATTENDEES: 0, // 获取还没有中奖的参与者，user_lottery_record的lottery_result
  GET_PRODUCT: 3, // 获取实物获得者列表，user_lottery_record的lottery_result
  GET_FUDAI: 2, // 获取福袋获得者列表，user_lottery_record的lottery_result
  GET_HONGBAO: 1, // 获取红包获得者列表，user_lottery_record的lottery_result
  HONHBAO_RATIO: 100, // 开奖金额总是除以 100，但是发出去多少看PLANS_LOTTERY_PACKAGE，剩下的是平台盈利
  ATTEND_LOTTERY_COST: 1, // 参与抽奖消耗的运气值
  DEFAULT_URL: [
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iLjqLLuRn9FanM6.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iLjqLv5bPWw2twG.png"
  ],
  DEFAULT_MONEY_URL: [
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOpGejZ7rKJQI3.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOpZx36XK2NrIJ.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOptxmdhThZA6i.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOqMwj9AdAU12E.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOqbc4iJMfwI2I.png",
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOquZGoPOXC9x6.png"
  ],
  HOME_SHARE_IMAGE:
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iJgw3ghv9QBEKet.png",
  LUCKY_RATIO_SUCCESS: 1000, // 开奖运气值增加=金额*该值
  LUCKY_RATIO_FUDAI_PACKAGE: 10, // 每个福袋运气值 = 开奖金额 * 该值
  LUCKY_RATIO_INVITATION: 100, // 邀请朋友增加此数值运气值
  HONGBAO_NUM: 100, // 红包数目
  FUDAI_NUM: 100 // 福袋数目
};

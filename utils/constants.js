// 本文件需要考虑兼容性，需要在faas那边也用，所以不要使用wx.开头的函数

export const ROUTE = {
  HOME: "/pages/home/home",
  PIC_DETAILS: "/pages/pic_details/details",
  ADD_LOTTERY: "/pages/add_lottery/add_lottery",
  ADD_PRODUCT_LOTTERY: "/pages/add_product_lottery/add_product_lottery",
  ATTEND_LOTTERY: "/pages/attend_lottery/attend_lottery",
  USER: "/pages/user/user",
  USER_LUCKY: "/pages/user_lucky/user_lucky",
  SHARE_PIC: "/pages/share_pic/share_pic",
  ATTENDEES: "/pages/attendees/attendees",
  SHARE_PIC_HOME: "/pages/share_pic_home/share_pic_home",
  USER_LUCKY_DETAILS: "/pages/user_lucky_details/user_lucky_details",
  USER_BALANCE: "/pages/user_balance/user_balance",
  USER_FANS: "/pages/user_fans/user_fans",
  USER_ADS: "/pages/user_ads/user_ads",
  USER_DESC: "/pages/user_desc/user_desc",
  USER_BALANCE_DETAILS: "/pages/user_balance_details/user_balance_details",
  USER_ALL_LOTTERIES: "/pages/user_all_lotteries/user_all_lotteries",
  USER_GET_LOTTERIES: "/pages/user_get_lotteries/user_get_lotteries",
  USER_SEND_LOTTERIES: "/pages/user_send_lotteries/user_send_lotteries"
};

export const ROUTE_DATA = {
  FROM_ADD_LOTTERY_TO_TAGS: "ADD_LOTTERY_TO_TAGS",
  BACK_PIC_DETAILS_TO_ADD_LOTTERY: "BACK_PIC_DETAILS_TO_ADD_LOTTERY",
  FROM_ADD_LOTTERY_TO_PIC_DETAILS: "FROM_ADD_LOTTERY_TO_PIC_DETAILS",
  BACK_TAGS_TO_ADD_LOTTERY: "BACK_TAGS_TO_ADD_LOTTERY",
  FROM_ATTEND_LOTTERY_TO_SHARE_PIC: "FROM_ATTEND_LOTTERY_TO_SHARE_PIC"
};

export const ERR_TYPE = {
  GET_LOTTERY_FAILED: "get lottery failed",
  OUT_OF_LUCKY_NUM: "out of lucky num",
  INSUFFICIENT_AUTHORITY: "Insufficient authority",
  APPROVE_LOTTERY_STATUS_ERROR: "status 状态错误；状态只能从1到2或者从1到-1",
  NOT_PAID: "抽奖未支付",
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
  WITHDRAW: 84648
};

export const CONFIG_ID = "5d7917899d8da5229c037105";

export const FUNCTION_NAME = {
  ADD_INVITER: "addInviter",
  CREATE_WITHDRAW: "createWithdraw",
  APPROVE_WITHDRAW: "approveWithdraw",
  CREATE_LOTTERY: "createLottery",
  UPDATE_LOTTERY: "updateLottery",
  ATTEND_LOTTERY: "attendLottery",
  APPROVE_LOTTERY: "approveLottery",
  IS_ADMIN: "isAdmin"
};
export const WECHAT_SCENE = {
  FROM_CHAT: "FROM_CHAT",
  FROM_POSTER: "FROM_POSTER",
  FROM_DEFAULT: "FROM_DEFAULT"
};

export const WECHAT_REPORT_ANALYTICS_MAP = {
  [WECHAT_SCENE.FROM_CHAT]: [
    ["ana_user_source", "user_source", "Link"],
    ["ana_user_source_link", "link"],
    ["ana_user_source_share", "share"]
  ],
  [WECHAT_SCENE.FROM_POSTER]: [
    ["ana_user_source", "user_source", "QR"],
    ["ana_user_source_qrcode", "qrcode"],
    ["ana_user_source_share", "share"]
  ],
  [WECHAT_SCENE.FROM_DEFAULT]: [
    ["ana_user_source", "user_source", "default"],
    ["ana_user_source_default", "default"]
  ]
};

export const PAGE_SIZE = 10;

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
  PRODUCT_LOTTERY_PEOPLE_UNIT: 10000, // 开奖人数为5，则是5w人
  PRODUCT_DEFAULT_OPEN_PEOPLE_NUM: 10000,
  DEFAULT_OPEN_PEOPLE_NUM: 1000, // 默认的开奖人数
  MONEY_UNIT: 1000, // 余额用整数表示，需要除以1000
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
  ONE_LUCKY_NUM_WEIGHT: 2, // 一个运气值可以增加几个权重
  GET_MORE_REDUCE_LUCKY_NUM: -10, // 获取更多抽奖消耗的运气值，暂时没用
  DEFAULT_URL:
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iCf5gwsXZOPr2uG.png",
  LOTTERY_PRIZE_LIST: [9900, 16800, 33300, 51800, 66600, 86800, 88800, 99900], // 红包金额
  LOTTERY_NUM_PEOPLE: [1000, 1500, 3500, 5000, 6000, 8000, 8000, 9000], // 开奖人数
  PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0], // 选择价格界面颜色相关
  PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"], // 福袋比例
  PLANS_LUCKY_PACKAGE: [100, 50, 25], // 不同方案福袋个数，和每个福袋运气值计算相关
  PLANS_LOTTERY_PACKAGE: [95, 97, 98], // 不同方案红包个数
  LUCKY_RATIO_OPEN: 100, // 发起抽奖运气值奖励，金额乘以该值
  LUCKY_RATIO_SUCCESS: 1000, // 开奖运气值增加=金额*该值
  LUCKY_RATIO_FUDAI_PACKAGE: 10, // 每个福袋运气值 = 开奖金额 * 该值
  LUCKY_RATIO_INVITATION: 100, // 邀请朋友增加此数值运气值
  LUCKY_RATIO_INVITATION_OPEN: 10 // 线人发起抽奖，你获得运气值 = 抽奖金额 * 该值
};

// 本文件需要考虑兼容性，需要在faas那边也用，所以不要使用wx.开头的函数

export const ROUTE = {
  HOME: "/pages/home/home",
  PIC_DETAILS: "/pages/pic_details/details",
  TAGS: "/pages/tags/tags",
  ADD_LOTTERY: "/pages/add_lottery/add_lottery",
  ATTEND_LOTTERY: "/pages/attend_lottery/attend_lottery",
  USER: "/pages/user/user",
  USER_LUCKY: "/pages/user_lucky/user_lucky",
  SHARE_PIC: "/pages/share_pic/share_pic",
  ATTENDEES: "/pages/attendees/attendees",
  SHARE_PIC_HOME: "/pages/share_pic_home/share_pic_home",
  USER_LUCKY_DETAILS: "/pages/user_lucky_details/user_lucky_details",
  USER_BALANCE_DETAILS: "/pages/user_balance_details/user_balance_details",
  USER_APPROVE_DETAIL: "/pages/user_approve_detail/user_approve_detail",
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
  GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
  OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
};

// 活动规则内容库 id
export const CONTENT_GROUP = "";

// 线上数据表 id
export const TABLE_ID = {
  USER_LOTTERY_RECORD: 81892,
  LOTTERY: 81873,
  CONFIG: 83587,
  DAILY_CHECKIN: 84214,
  BALANCE_LUCKY_RECORD: 83371,
  QUESTIONS: 84573
};

export const CONFIG_ID = "5d7917899d8da5229c037105";

export const FUNCTION_NAME = {
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
//
export const CONST = {
  WAIT_APPROVE: 1, // 等待审批，抽奖意见支付过，状态为1
  APPROVED: 2, // 审批通过，只能从1到2
  REJECTED: -1, // 审批不通过，只能从1到-1
  GET_ATTENDEES: 0, // 获取所有参与者
  GET_FUDAI: 2, // 获取福袋获得者列表
  GET_HONGBAO: 1, // 获取红包获得者列表
  HONHBAO_RATIO: 100, // 开奖金额总是除以 100，但是发出去多少看PLANS_LOTTERY_PACKAGE，剩下的是平台盈利
  ATTEND_LOTTERY_COST: 1, // 参与抽奖消耗的运气值
  ONE_LUCKY_NUM_WEIGHT: 2, // 一个运气值可以增加几个权重
  GET_MORE_REDUCE_LUCKY_NUM: -10, // 获取更多抽奖消耗的运气值，暂时没用
  DEFAULT_URL:
    "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i9fpj58fLEqdfsG.png",
  LOTTERY_PRIZE_LIST: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9], // 红包金额
  LOTTERY_NUM_PEOPLE: [1000, 1500, 3500, 5000, 6000, 8000, 8000, 9000], // 开奖人数
  PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0], // 选择价格界面颜色相关
  PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"], // 福袋比例
  PLANS_LUCKY_PACKAGE: [100, 50, 25], // 不同方案福袋个数，和每个福袋运气值计算相关
  PLANS_LOTTERY_PACKAGE: [95, 97, 98], // 不同方案红包个数
  LUCKY_RATIO_OPEN: 100, // 发起抽奖运气值奖励，金额乘以该值
  LUCKY_RATIO_SUCCESS: 1000, // 开奖运气值增加=金额*该值
  LUCKY_RATIO_LUCKY_PACKAGE: 10, // 每个福袋运气值 = 开奖金额 * 该值
  LUCKY_RATIO_INVITATION: 100, // 邀请朋友增加此数值运气值
  LUCKY_RATIO_INVITATION_OPEN: 10, // 线人发起抽奖，你获得运气值 = 抽奖金额 * 该值
  MAX_SELECTED: 8,
  TAGS: [
    "人工智能",
    "商业管理",
    "化妆品",
    "亲子教育",
    "科技",
    "互联网",
    "旅游",
    "美食",
    "动漫",
    "程序开发",
    "微商",
    "自由职业",
    "健身",
    "篮球",
    "足球",
    "购物",
    "翻译",
    "英语",
    "脱口秀",
    "美剧",
    "音乐",
    "吉他",
    "摇滚",
    "阿拉贝卡",
    "区块链",
    "A股",
    "美股",
    "港股",
    "美女",
    "帅哥",
    "模特",
    "腔调",
    "北上广深",
    "来自农村",
    "二三四线",
    "火星",
    "60后",
    "70后",
    "80后",
    "90后"
  ],
  TAG_FLAGS: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  DEFAULT_TAG_ITEMS: [
    "80后",
    "A股",
    "微商",
    "足球",
    "音乐",
    "亲子教育",
    "美食",
    "美女"
  ]
};

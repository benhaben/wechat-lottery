export const ROUTE = {
  HOME: "/pages/home/home",
  PIC_DETAILS: "/pages/pic_details/details",
  TAGS: "/pages/tags/tags",
  ADD_LOTTERY: "/pages/lottery/lottery",
  USER: "/pages/user/user"
};

export const ROUTE_DATA = {
  FROM_ADD_LOTTERY_TO_TAGS: "ADD_LOTTERY_TO_TAGS",
  BACK_PIC_DETAILS_TO_ADD_LOTTERY: "BACK_PIC_DETAILS_TO_ADD_LOTTERY",
  BACK_TAGS_TO_ADD_LOTTERY: "BACK_TAGS_TO_ADD_LOTTERY"
};

// 活动规则内容库 id
export const CONTENT_GROUP = "";

// 线上数据表 id
export const TABLE_NAME = {
  LOTTERY: "lottery"
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

// TODO：一些参数最好在服务端配置，如果再服务端计算就要有接口，现在都在小程序侧做，重客户端
export const CONST = {
  LOTTERY_PRIZE_LIST: [
    "9.9",
    "16.8",
    "33.3",
    "51.8",
    "66.6",
    "86.8",
    "88.8",
    "99.9"
  ], // 红包金额
  LOTTERY_NUM_PEOPLE: [1000, 1500, 2000, 5000, 6000, 8000, 8000, 9000], // 开奖人数
  PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0], // 选择价格界面颜色相关
  PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"], // 福袋比例
  PLANS_PACKAGE: [100, 50, 25], // 不同方案福袋个数，和每个福袋运气值计算相关
  LUCKY_RATIO_OPEN: 100, // 发起奖励
  LUCKY_RATIO_SUCCESS: 1000, // 开奖奖励
  LUCKY_RATIO_LUCKY_PACKAGE: 10, // 福袋奖励
  LUCKY_RATIO_INVITATION: 100, // 邀请朋友
  LUCKY_RATIO_INVITATION_OPEN: 10, // 线人发起抽奖
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
  ]
};
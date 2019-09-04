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
export const TABLE_ID = {
  LOTTERY: "",
  USER_LOTTERY_RECORD: "",
  WORD_LIST: "",
  RULES_CONTENT: "",
  CONTACT_INFO: ""
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

export const CONST = {
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

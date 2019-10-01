export const ROUTE_DATA = {
  FROM_ADD_LOTTERY_TO_TAGS: "ADD_LOTTERY_TO_TAGS",
  BACK_PIC_DETAILS_TO_ADD_LOTTERY: "BACK_PIC_DETAILS_TO_ADD_LOTTERY",
  FROM_ADD_LOTTERY_TO_PIC_DETAILS: "FROM_ADD_LOTTERY_TO_PIC_DETAILS",
  BACK_TAGS_TO_ADD_LOTTERY: "BACK_TAGS_TO_ADD_LOTTERY",
  FROM_ATTEND_LOTTERY_TO_SHARE_PIC: "FROM_ATTEND_LOTTERY_TO_SHARE_PIC"
};
export const WECHAT_SCENE = {
  FROM_CHAT: "FROM_CHAT",
  FROM_POSTER: "FROM_POSTER",
  FROM_DEFAULT: "FROM_DEFAULT"
};
//event key value
export const WECHAT_REPORT_ANALYTICS_MAP = {
  [WECHAT_SCENE.FROM_CHAT]: [["ana_user_source", "user_source", "Link"]],
  [WECHAT_SCENE.FROM_POSTER]: [["ana_user_source", "user_source", "QR"]],
  [WECHAT_SCENE.FROM_DEFAULT]: [["ana_user_source", "user_source", "default"]]
};

export const ATTEND_LOTTERY_EVENT = "attend_lottery_event";
export const DEFAULT_SPONSOR = "好运码头";
export const ADDRESS = "收货地址";

export const PAGE_SIZE = 10;

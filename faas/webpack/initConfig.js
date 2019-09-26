exports.main = (function(e) {
  var t = {};
  function _(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, _), (r.l = !0), r.exports;
  }
  return (
    (_.m = e),
    (_.c = t),
    (_.d = function(e, t, n) {
      _.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (_.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (_.t = function(e, t) {
      if ((1 & t && (e = _(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (_.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          _.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (_.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return _.d(t, "a", t), t;
    }),
    (_.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (_.p = ""),
    _((_.s = 21))
  );
})({
  0: function(e, t, _) {
    "use strict";
    _.d(t, "c", function() {
      return n;
    }),
      _.d(t, "d", function() {
        return r;
      }),
      _.d(t, "a", function() {
        return E;
      }),
      _.d(t, "b", function() {
        return o;
      });
    const n = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      r = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        ERROR: 83510,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573,
        WITHDRAW: 84648
      },
      E = "5d7917899d8da5229c037105",
      o = {
        LOTTERY_TYPE_PRODUCT: 1,
        LOTTERY_TYPE_MONEY: 0,
        PRODUCT_LOTTERY_PEOPLE_UNIT: 1e4,
        PRODUCT_DEFAULT_OPEN_PEOPLE_NUM: 5e4,
        DEFAULT_OPEN_PEOPLE_NUM: 1e3,
        MONEY_UNIT: 1e3,
        WAIT_APPROVE: 1,
        APPROVED: 2,
        OPENED: 3,
        REJECTED: -1,
        GET_ATTENDEES: 0,
        GET_FUDAI: 2,
        GET_HONGBAO: 1,
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iCf5gwsXZOPr2uG.png",
        LOTTERY_PRIZE_LIST: [
          9900,
          16800,
          33300,
          51800,
          66600,
          86800,
          88800,
          99900
        ],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        PLANS_LOTTERY_PACKAGE: [95, 97, 98],
        LUCKY_RATIO_OPEN: 100,
        LUCKY_RATIO_SUCCESS: 1e3,
        LUCKY_RATIO_FUDAI_PACKAGE: 10,
        LUCKY_RATIO_INVITATION: 100,
        LUCKY_RATIO_INVITATION_OPEN: 10,
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
  },
  21: function(e, t, _) {
    e.exports = _(22);
  },
  22: function(e, t, _) {
    "use strict";
    _.r(t);
    var n = _(0);
    exports.main = async function(e, t) {
      try {
        const e = new BaaS.TableObject(n.d.CONFIG).create();
        t(
          null,
          await e
            .set({
              lucky_cost_per: 1,
              weight_per_lucky: 2,
              lottery_prize_list: [
                9.9,
                16.8,
                33.3,
                51.8,
                66.6,
                86.8,
                88.8,
                99.9
              ],
              lottery_num_people: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
              prize_colors: [1, 0, 0, 0, 0, 0, 0, 0],
              plans: [
                "红包95个/福袋100个",
                "红包97个/福袋50个",
                "红包98个/福袋25个"
              ],
              plans_lucky_package: [100, 50, 25],
              plans_lottery_package: [95, 97, 98],
              lucky_ratio_open: 100,
              lucky_ratio_success: 1e3,
              lucky_ratio_lucky_package: 10,
              lucky_ratio_invitation: 100,
              lucky_ratio_invitation_open: 10
            })
            .save()
        );
      } catch (e) {
        t(e);
      }
    };
  }
}).default;

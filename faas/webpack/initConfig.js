exports.main = (function(e) {
  var t = {};
  function n(_) {
    if (t[_]) return t[_].exports;
    var r = (t[_] = { i: _, l: !1, exports: {} });
    return e[_].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, _) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: _ });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var _ = Object.create(null);
      if (
        (n.r(_),
        Object.defineProperty(_, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            _,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return _;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 21))
  );
})({
  0: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return _;
    }),
      n.d(t, "d", function() {
        return r;
      }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return u;
      });
    const _ = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      r = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573
      },
      o = "5d7917899d8da5229c037105",
      u = {
        WAIT_APPROVE: 1,
        APPROVED: 2,
        REJECTED: -1,
        GET_ATTENDEES: 0,
        GET_FUDAI: 2,
        GET_HONGBAO: 1,
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i9fpj58fLEqdfsG.png",
        LOTTERY_PRIZE_LIST: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        PLANS_LOTTERY_PACKAGE: [95, 97, 98],
        LUCKY_RATIO_OPEN: 100,
        LUCKY_RATIO_SUCCESS: 1e3,
        LUCKY_RATIO_LUCKY_PACKAGE: 10,
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
  21: function(e, t, n) {
    e.exports = n(22);
  },
  22: function(e, t, n) {
    "use strict";
    n.r(t);
    var _ = n(0);
    exports.main = async function(e, t) {
      try {
        const e = new BaaS.TableObject(_.d.CONFIG).create();
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

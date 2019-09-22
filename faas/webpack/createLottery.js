exports.main = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var u = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var u in e)
          n.d(
            r,
            u,
            function(t) {
              return e[t];
            }.bind(null, u)
          );
      return r;
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
    n((n.s = 19))
  );
})({
  0: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return c;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      u = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573
      },
      o = "5d7917899d8da5229c037105",
      c = {
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
  1: function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return u;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return _;
      }),
      n.d(t, "h", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return T;
      }),
      n.d(t, "i", function() {
        return E;
      }),
      n.d(t, "j", function() {
        return i;
      }),
      n.d(t, "f", function() {
        return O;
      }),
      n.d(t, "e", function() {
        return f;
      });
    var r = n(0);
    const u = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      c = new BaaS.TableObject(r.d.CONFIG),
      _ = new BaaS.TableObject(r.d.ERROR),
      a = new BaaS.User(),
      T = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function E(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", o.getWithoutData(e)), u.setQuery(t).count()
      );
    }
    async function i() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        o
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
    const O = [
        0,
        1,
        2,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        16,
        18,
        20,
        22,
        26,
        28,
        30,
        32,
        36,
        38,
        40,
        42,
        46,
        48,
        50,
        52,
        56,
        58,
        60,
        62,
        66,
        68,
        70,
        72,
        78,
        80,
        81,
        82,
        83,
        85,
        86,
        87,
        88,
        89,
        90,
        92,
        96,
        99,
        100,
        102,
        106,
        108,
        110,
        112,
        116,
        118,
        120,
        122,
        126,
        128,
        150,
        152,
        156,
        158,
        160,
        162,
        166,
        168,
        170,
        172,
        176,
        178,
        180,
        182,
        186,
        188,
        200,
        202,
        206,
        208,
        510,
        512,
        516,
        518,
        555,
        666,
        777,
        888,
        610,
        612,
        616,
        618,
        190,
        192,
        196,
        199,
        130,
        132,
        136,
        138
      ],
      f = [
        4,
        11,
        13,
        14,
        15,
        17,
        19,
        21,
        23,
        24,
        25,
        27,
        29,
        31,
        33,
        34,
        35,
        37,
        39,
        41,
        43,
        44,
        45,
        47,
        49,
        51,
        53,
        54,
        55,
        57,
        59,
        61,
        63,
        64,
        65,
        67,
        69,
        71,
        73,
        74,
        76,
        79,
        84,
        91,
        93,
        94,
        95,
        97,
        98,
        101,
        103,
        104,
        105,
        107,
        109,
        111,
        113,
        114,
        115,
        117,
        119,
        121,
        123,
        124,
        125,
        127,
        129,
        131,
        133,
        134,
        135,
        137,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        151,
        153,
        154,
        155,
        157,
        159,
        161,
        163,
        164,
        165,
        167,
        169,
        171,
        173,
        174,
        177,
        179,
        181,
        183,
        184,
        185,
        187,
        189,
        191,
        193,
        194,
        195,
        197,
        201,
        203,
        205,
        207,
        209,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        224,
        225,
        226,
        227,
        228
      ];
  },
  19: function(e, t, n) {
    e.exports = n(20);
  },
  20: function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return o;
      });
    var r = n(0),
      u = n(1);
    async function o(e, t) {
      const n = e.data,
        o = e.request.user.id;
      try {
        (n.lucky_num_open =
          n.lucky_num * (r.b.LUCKY_RATIO_SUCCESS / r.b.LUCKY_RATIO_OPEN)),
          (n.created_by = o);
        const e = u.d.create();
        t(null, await e.set(n).save());
      } catch (e) {
        t(e);
      }
    }
  }
}).default;

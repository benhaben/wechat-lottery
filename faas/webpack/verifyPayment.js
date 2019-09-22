exports.main = (function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            r,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 23))
  );
})({
  0: function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
      return r;
    }),
      n.d(e, "d", function() {
        return a;
      }),
      n.d(e, "a", function() {
        return o;
      }),
      n.d(e, "b", function() {
        return u;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      a = {
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
  1: function(t, e, n) {
    "use strict";
    n.d(e, "g", function() {
      return a;
    }),
      n.d(e, "d", function() {
        return o;
      }),
      n.d(e, "b", function() {
        return u;
      }),
      n.d(e, "c", function() {
        return i;
      }),
      n.d(e, "h", function() {
        return c;
      }),
      n.d(e, "a", function() {
        return _;
      }),
      n.d(e, "i", function() {
        return f;
      }),
      n.d(e, "j", function() {
        return E;
      }),
      n.d(e, "f", function() {
        return d;
      }),
      n.d(e, "e", function() {
        return T;
      });
    var r = n(0);
    const a = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      i = new BaaS.TableObject(r.d.ERROR),
      c = new BaaS.User(),
      _ = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function f(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", o.getWithoutData(t)), a.setQuery(e).count()
      );
    }
    async function E() {
      let t = new BaaS.Query();
      return (
        t.compare("status", "=", 2),
        o
          .setQuery(t)
          .limit(10)
          .find()
      );
    }
    const d = [
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
      T = [
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
  23: function(t, e, n) {
    t.exports = n(24);
  },
  24: function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return a;
      });
    var r = n(1);
    async function a(t, e) {
      console.log(`verifyPayment event.data: ${JSON.stringify(t.data)}`);
      const n = t.data,
        a = n.total_cost,
        o = n.transaction_no,
        u = n.merchandise_snapshot.id;
      try {
        new BaaS.Query();
        let t = (await r.d.get(u)).data;
        if (t && t.total_prize === a) {
          let t = r.d.getWithoutData(u);
          t.set("status", 1),
            t.set("transaction_no", o),
            e(null, await t.update());
        } else {
          let n = {
            error: "支付金额和抽奖金额不一致",
            action: "verifyPayment",
            created_by: t.created_by,
            lottery: r.d.getWithoutData(u)
          };
          const a = r.c.create();
          await a.set(n).save();
          e(new Error(JSON.stringify(n)));
        }
      } catch (n) {
        let a = {
          error: `verifyPayment event.data: ${JSON.stringify(
            t.data
          )} - Error: ${n.message}`,
          lottery: r.d.getWithoutData(u),
          action: "verifyPayment"
        };
        const o = r.c.create();
        await o.set(a).save(), e(new Error(JSON.stringify(a)));
      }
    }
  }
}).default;

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
    n((n.s = 12))
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
        ERROR: 83510,
        CONFIG: 83587,
        BALANCE_LUCKY_RECORD: 83371
      },
      o = "5d7917899d8da5229c037105",
      u = {
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png",
        LOTTERY_PRIZE_LIST: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        plans_lottery_package: [95, 97, 98],
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
    n.d(e, "e", function() {
      return a;
    }),
      n.d(e, "d", function() {
        return o;
      }),
      n.d(e, "b", function() {
        return u;
      }),
      n.d(e, "c", function() {
        return c;
      }),
      n.d(e, "f", function() {
        return i;
      }),
      n.d(e, "a", function() {
        return _;
      }),
      n.d(e, "g", function() {
        return f;
      }),
      n.d(e, "h", function() {
        return d;
      });
    var r = n(0);
    const a = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      c = new BaaS.TableObject(r.d.ERROR),
      i = new BaaS.User(),
      _ = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function f(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", o.getWithoutData(t)), a.setQuery(e).count()
      );
    }
    async function d() {
      let t = new BaaS.Query();
      return (
        t.compare("status", "=", 2),
        o
          .setQuery(t)
          .limit(10)
          .find()
      );
    }
  },
  12: function(t, e, n) {
    t.exports = n(13);
  },
  13: function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return a;
      });
    var r = n(1);
    async function a(t, e) {
      console.log(`verifyPayment event.data: ${JSON.stringify(t.data)}`);
      try {
        const n = t.data,
          a = n.total_cost,
          o = n.transaction_no,
          u = n.merchandise_snapshot.id;
        new BaaS.Query();
        let c = (await r.d.get(u)).data;
        if (c && c.total_prize === a) {
          let t = r.d.getWithoutData(u);
          t.set("status", 1),
            t.set("transaction_no", o),
            e(null, await t.update());
        } else {
          let t = {
            error: "支付金额和抽奖金额不一致",
            action: "verifyPayment",
            created_by: c.created_by,
            lottery: tableObjectLottery.getWithoutData(u)
          };
          const n = r.c.create();
          await n.set(t).save();
          e(new Error(JSON.stringify(t)));
        }
      } catch (n) {
        let a = {
          error: `verifyPayment event.data: ${JSON.stringify(
            t.data
          )} - Error: ${n.message}`,
          action: "verifyPayment"
        };
        const o = r.c.create();
        await o.set(a).save();
        e(new Error(JSON.stringify(a)));
      }
    }
  }
}).default;

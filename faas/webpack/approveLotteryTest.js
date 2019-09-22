exports.main = (function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var u = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
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
        for (var u in t)
          n.d(
            r,
            u,
            function(e) {
              return t[e];
            }.bind(null, u)
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
    n((n.s = 7))
  );
})([
  function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
      return r;
    }),
      n.d(e, "d", function() {
        return u;
      }),
      n.d(e, "a", function() {
        return o;
      }),
      n.d(e, "b", function() {
        return E;
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
      E = {
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
  ,
  function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
      return u;
    }),
      n.d(e, "c", function() {
        return o;
      }),
      n.d(e, "a", function() {
        return E;
      }),
      n.d(e, "b", function() {
        return _;
      }),
      n.d(e, "e", function() {
        return a;
      });
    var r = n(0);
    const u = new wx.BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new wx.BaaS.TableObject(r.d.LOTTERY),
      E = new wx.BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD),
      _ = new wx.BaaS.TableObject(r.d.CONFIG),
      a = new wx.BaaS.User();
    new wx.BaaS.TableObject(r.d.DAILY_CHECKIN),
      new wx.BaaS.TableObject(r.d.QUESTIONS);
  },
  ,
  ,
  ,
  ,
  function(t, e, n) {
    t.exports = n(8);
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return o;
      });
    var r = n(2),
      u = n(0);
    async function o(t, e) {
      console.log(`event : ${JSON.stringify(t)}`);
      try {
        const { id: n, status: o } = t.data;
        t.request.user.id;
        if (o !== u.b.REJECTED && o !== u.b.APPROVED)
          throw new Error("status状态错误");
        if ((await r.c.get(n)).data.status !== u.b.WAIT_APPROVE)
          throw new Error("抽奖未支付");
        let E = r.c.getWithoutData(n);
        E.set({ status: o }), e(null, await E.update());
      } catch (t) {
        console.log(t), e(t);
      }
    }
  }
]).default;

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
    n((n.s = 3))
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
        return a;
      }),
      n.d(e, "b", function() {
        return o;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      u = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587,
        BALANCE_LUCKY_RECORD: 83371
      },
      a = "5d7917899d8da5229c037105",
      o = {
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
  function(t, e, n) {
    "use strict";
    n.d(e, "e", function() {
      return u;
    }),
      n.d(e, "d", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return o;
      }),
      n.d(e, "c", function() {
        return c;
      }),
      n.d(e, "f", function() {
        return _;
      }),
      n.d(e, "a", function() {
        return T;
      }),
      n.d(e, "g", function() {
        return i;
      }),
      n.d(e, "h", function() {
        return O;
      });
    var r = n(0);
    const u = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      a = new BaaS.TableObject(r.d.LOTTERY),
      o = new BaaS.TableObject(r.d.CONFIG),
      c = new BaaS.TableObject(r.d.ERROR),
      _ = new BaaS.User(),
      T = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function i(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", a.getWithoutData(t)), u.setQuery(e).count()
      );
    }
    async function O() {
      let t = new BaaS.Query();
      return (
        t.compare("status", "=", 2),
        a
          .setQuery(t)
          .limit(10)
          .find()
      );
    }
  },
  ,
  function(t, e, n) {
    t.exports = n(4);
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return a;
      });
    var r = n(1),
      u = n(0);
    async function a(t, e) {
      const { lottery_id: n, weight: a } = t.data,
        o = t.request.user.id;
      try {
        let t,
          c = a / u.b.ONE_LUCKY_NUM_WEIGHT,
          _ = await r.f.get(o);
        if (
          (0 === c
            ? ((t = `参与抽奖，减少${u.b.ATTEND_LOTTERY_COST}运气值`),
              (c = u.b.ATTEND_LOTTERY_COST))
            : ((t = `参与抽奖，减少${u.b.ATTEND_LOTTERY_COST}运气值，增加权重减少${c}运气值`),
              (c = u.b.ATTEND_LOTTERY_COST + c)),
          _.lucky_num < c)
        )
          throw new Error(u.c.OUT_OF_LUCKY_NUM);
        let T = r.f.getWithoutData(o);
        T.incrementBy("lucky_num", -c), await T.update();
        const i = r.a.create();
        await i
          .set({ reason: t, lucky_num: -c, user_id: o, lottery_id: n })
          .save();
        let O = r.d.getWithoutData(n);
        const E = r.e.create();
        e(
          null,
          await E.set({
            user: T,
            nickname: _.data.nickname,
            avatar_cache: _.data.avatar,
            lottery: O,
            weight: a
          }).save()
        );
      } catch (t) {
        e(t);
      }
    }
  }
]).default;

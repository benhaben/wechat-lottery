exports.main = (function(e) {
  var t = {};
  function n(T) {
    if (t[T]) return t[T].exports;
    var r = (t[T] = { i: T, l: !1, exports: {} });
    return e[T].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, T) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: T });
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
      var T = Object.create(null);
      if (
        (n.r(T),
        Object.defineProperty(T, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            T,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return T;
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
    n((n.s = 11))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return T;
    }),
      n.d(t, "d", function() {
        return r;
      }),
      n.d(t, "a", function() {
        return _;
      }),
      n.d(t, "b", function() {
        return E;
      });
    const T = {
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
      _ = "5d7917899d8da5229c037105",
      E = {
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
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return _;
      }),
      n.d(t, "a", function() {
        return E;
      }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "e", function() {
        return O;
      });
    var T = n(0);
    const r = new wx.BaaS.TableObject(T.d.USER_LOTTERY_RECORD),
      _ = new wx.BaaS.TableObject(T.d.LOTTERY),
      E = new wx.BaaS.TableObject(T.d.BALANCE_LUCKY_RECORD),
      a = new wx.BaaS.TableObject(T.d.CONFIG),
      O = new wx.BaaS.User();
    new wx.BaaS.TableObject(T.d.DAILY_CHECKIN),
      new wx.BaaS.TableObject(T.d.QUESTIONS),
      new wx.BaaS.TableObject(T.d.WITHDRAW);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(12);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return _;
      });
    var T = n(2),
      r = n(0);
    async function _(e, t) {
      const { lottery_id: n, weight: _ } = e.data,
        E = e.request.user.id;
      try {
        let e,
          a = _ / r.b.ONE_LUCKY_NUM_WEIGHT,
          O = await T.e.get(E);
        if (
          (0 === a
            ? ((e = `参与抽奖，减少${r.b.ATTEND_LOTTERY_COST}运气值`),
              (a = r.b.ATTEND_LOTTERY_COST))
            : ((e = `参与抽奖，减少${r.b.ATTEND_LOTTERY_COST}运气值，增加权重减少${a}运气值`),
              (a = r.b.ATTEND_LOTTERY_COST + a)),
          O.lucky_num < a)
        )
          throw new Error(r.c.OUT_OF_LUCKY_NUM);
        let u = T.e.getWithoutData(E);
        u.incrementBy("lucky_num", -a), await u.update();
        const c = T.a.create();
        await c
          .set({ reason: e, lucky_num: -a, user_id: E, lottery_id: n })
          .save();
        let o = T.c.getWithoutData(n);
        const i = T.d.create();
        t(
          null,
          await i
            .set({
              user_id: E,
              user: u,
              nickname: O.data.nickname,
              avatar_cache: O.data.avatar,
              lottery: o,
              weight: _
            })
            .save()
        );
      } catch (e) {
        t(e);
      }
    }
  }
]).default;

exports.main = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var _ = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(_.exports, _, _.exports, n), (_.l = !0), _.exports;
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
        for (var _ in e)
          n.d(
            r,
            _,
            function(t) {
              return e[t];
            }.bind(null, _)
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
    n((n.s = 11))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return _;
      }),
      n.d(t, "a", function() {
        return T;
      }),
      n.d(t, "b", function() {
        return a;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      _ = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573
      },
      T = "5d7917899d8da5229c037105",
      a = {
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
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return _;
    }),
      n.d(t, "c", function() {
        return T;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "e", function() {
        return c;
      });
    var r = n(0);
    const _ = new wx.BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      T = new wx.BaaS.TableObject(r.d.LOTTERY),
      a = new wx.BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD),
      u = new wx.BaaS.TableObject(r.d.CONFIG),
      c = new wx.BaaS.User();
    new wx.BaaS.TableObject(r.d.DAILY_CHECKIN),
      new wx.BaaS.TableObject(r.d.QUESTIONS);
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
        return T;
      });
    var r = n(2),
      _ = n(0);
    async function T(e, t) {
      const { lottery_id: n, weight: T } = e.data,
        a = e.request.user.id;
      try {
        let e,
          u = T / _.b.ONE_LUCKY_NUM_WEIGHT,
          c = await r.e.get(a);
        if (
          (0 === u
            ? ((e = `参与抽奖，减少${_.b.ATTEND_LOTTERY_COST}运气值`),
              (u = _.b.ATTEND_LOTTERY_COST))
            : ((e = `参与抽奖，减少${_.b.ATTEND_LOTTERY_COST}运气值，增加权重减少${u}运气值`),
              (u = _.b.ATTEND_LOTTERY_COST + u)),
          c.lucky_num < u)
        )
          throw new Error(_.c.OUT_OF_LUCKY_NUM);
        let o = r.e.getWithoutData(a);
        o.incrementBy("lucky_num", -u), await o.update();
        const E = r.a.create();
        await E.set({
          reason: e,
          lucky_num: -u,
          user_id: a,
          lottery_id: n
        }).save();
        let O = r.c.getWithoutData(n);
        const i = r.d.create();
        t(
          null,
          await i
            .set({
              user_id: a,
              user: o,
              nickname: c.data.nickname,
              avatar_cache: c.data.avatar,
              lottery: O,
              weight: T
            })
            .save()
        );
      } catch (e) {
        t(e);
      }
    }
  }
]).default;

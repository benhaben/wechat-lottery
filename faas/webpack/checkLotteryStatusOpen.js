exports.main = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
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
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
    n((n.s = 5))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "b", function() {
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
  function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
      return a;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "g", function() {
        return _;
      }),
      n.d(t, "h", function() {
        return d;
      });
    var r = n(0);
    const a = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      c = new BaaS.TableObject(r.d.ERROR),
      l = new BaaS.User(),
      i = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function _(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", o.getWithoutData(e)), a.setQuery(t).count()
      );
    }
    async function d() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        o
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
  },
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(6);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return o;
      });
    var r = n(0),
      a = n(1);
    async function o(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(a.h)()).data.objects;
        if (
          (console.log(`openedLotteries: ${JSON.stringify(e.map(e => e.id))}`),
          e)
        ) {
          let n = (await a.b.get(r.a)).data;
          for (let t in e) {
            let r = e[t],
              o = await Object(a.g)(r.id);
            console.log(`getAttendeesCount: ${o}`);
            let l =
              Math.round(Date.parse(r.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (o >= r.open_people_num && l <= 0) {
              console.log(`开奖 - lottery.id: ${r.id}`);
              let e = a.d.getWithoutData(r.id);
              e.set("status", 3), e.update();
              let t = c(r.open_people_num)(
                n.plans_lottery_package[r.plan_index]
              );
              await u(t, r.id);
              let o = c(r.open_people_num)(n.plans_lucky_package[r.plan_index]);
              await u(o, r.id, 2);
            } else r.open_people_num;
          }
          t(null, "success");
        } else t(r.c.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    }
    const u = async (e, t, n = 1) => {
        let r = (await Promise.all(
            e.map(e => {
              let n = new BaaS.Query();
              return (
                n.compare("lottery", "=", a.d.getWithoutData(t)),
                a.e
                  .setQuery(n)
                  .offset(e)
                  .limit(1)
                  .find()
              );
            })
          ))
            .map(e => (e.data.objects.length ? e.data.objects[0].id : null))
            .filter(e => e),
          o = new BaaS.Query();
        o.in("id", r),
          o.compare("lottery_result", "=", 0),
          o.compare("lottery", "=", a.d.getWithoutData(t));
        let u = a.e.getWithoutData(o);
        return u.set("lottery_result", n), u.update();
      },
      c = e => t => {
        let n = [];
        for (let r = 0; r < t; r++) {
          let t = Math.floor(Math.random() * e);
          n.sort((e, t) => e - t),
            n.forEach(e => {
              e <= t && (t += 1);
            }),
            n.push(t),
            e--;
        }
        return n;
      };
  }
]).default;

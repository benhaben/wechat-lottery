exports.main = (function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
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
    n((n.s = 5))
  );
})([
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return r;
    }),
      n.d(e, "b", function() {
        return o;
      });
    const r = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      o = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587
      };
  },
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return o;
    }),
      n.d(e, "e", function() {
        return a;
      }),
      n.d(e, "d", function() {
        return u;
      }),
      n.d(e, "b", function() {
        return l;
      }),
      n.d(e, "c", function() {
        return i;
      }),
      n.d(e, "f", function() {
        return c;
      }),
      n.d(e, "g", function() {
        return d;
      });
    var r = n(0);
    const o = "5d7917899d8da5229c037105",
      a = new BaaS.TableObject(r.b.USER_LOTTERY_RECORD),
      u = new BaaS.TableObject(r.b.LOTTERY),
      l = new BaaS.TableObject(r.b.CONFIG),
      i = new BaaS.TableObject(r.b.ERROR);
    async function c(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", u.getWithoutData(t)), a.setQuery(e).count()
      );
    }
    async function d() {
      let t = new BaaS.Query();
      return (
        t.compare("status", "=", 2),
        u
          .setQuery(t)
          .limit(10)
          .find()
      );
    }
  },
  ,
  ,
  ,
  function(t, e, n) {
    t.exports = n(6);
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return a;
      });
    var r = n(0),
      o = n(1);
    async function a(t, e) {
      console.log(`checkLotteryStatus - event: ${t}`);
      try {
        let t = (await Object(o.g)()).data.objects;
        if (
          (console.log(`openedLotteries: ${JSON.stringify(t.map(t => t.id))}`),
          t)
        ) {
          let n = (await o.b.get(o.a)).data;
          for (let e in t) {
            let r = t[e],
              a = await Object(o.f)(r.id);
            console.log(`getAttendeesCount: ${a}`);
            let i =
              Math.round(Date.parse(r.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (a >= r.open_people_num && i <= 0) {
              console.log(`开奖 - lottery.id: ${r.id}`);
              let t = o.d.getWithoutData(r.id);
              t.set("status", 3), t.update();
              let e = l(r.open_people_num)(
                n.plans_lottery_package[r.plan_index]
              );
              await u(e, r.id);
              let a = l(r.open_people_num)(n.plans_lucky_package[r.plan_index]);
              await u(a, r.id, 2);
            } else r.open_people_num;
          }
          e(null, "success");
        } else e(r.a.GET_LOTTERY_FAILED);
      } catch (t) {
        e(t);
      }
    }
    const u = async (t, e, n = 1) => {
        let r = (await Promise.all(
            t.map(t => {
              let n = new BaaS.Query();
              return (
                n.compare("lottery", "=", o.d.getWithoutData(e)),
                o.e
                  .setQuery(n)
                  .offset(t)
                  .limit(1)
                  .find()
              );
            })
          ))
            .map(t => (t.data.objects.length ? t.data.objects[0].id : null))
            .filter(t => t),
          a = new BaaS.Query();
        a.in("id", r),
          a.compare("lottery_result", "=", 0),
          a.compare("lottery", "=", o.d.getWithoutData(e));
        let u = o.e.getWithoutData(a);
        return u.set("lottery_result", n), u.update();
      },
      l = t => e => {
        let n = [];
        for (let r = 0; r < e; r++) {
          let e = Math.floor(Math.random() * t);
          n.sort((t, e) => t - e),
            n.forEach(t => {
              t <= e && (e += 1);
            }),
            n.push(e),
            t--;
        }
        return n;
      };
  }
]).default;

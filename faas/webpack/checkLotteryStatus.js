module.exports = (function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
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
    n((n.s = 3))
  );
})([
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(4);
  },
  function(e, t) {
    const n = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587
      },
      o = "GET_LOTTERY_FAILED";
    async function r(e) {
      let t = new BaaS.TableObject(n.USER_LOTTERY_RECORD),
        o = new BaaS.TableObject(n.LOTTERY),
        r = new BaaS.Query();
      return (
        r.compare("lottery", "=", o.getWithoutData(e)), t.setQuery(r).count()
      );
    }
    t.main = async function(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await (async function() {
          let e = new BaaS.TableObject(n.LOTTERY),
            t = new BaaS.Query();
          return (
            t.compare("status", "=", 2),
            e
              .setQuery(t)
              .limit(10)
              .find()
          );
        })()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let o = e[t];
            console.log("before");
            let l = await r(o.id);
            console.log(`getAttendeesCount: ${l}`);
            let u =
              Math.round(Date.parse(o.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (l >= o.open_people_num && u <= 0)
              console.log(`开奖 - lottery.id: ${o.id}`);
            else if (l < o.open_people_num && u <= 0) {
              let e =
                ((a = void 0),
                (a = Date.parse(new Date())),
                (a /= 1e3),
                new Date(1e3 * (a + 86400)).toISOString());
              console.log(
                `人数不够，时间已经到了，顺延24小时 - lottery.id: ${o.id}, time: ${e}`
              );
              let t = new BaaS.TableObject(n.LOTTERY).getWithoutData(o.id);
              t.set("open_date", e);
              await t.update();
            }
          }
          t(null, "success");
        } else t(o);
      } catch (e) {
        t(e);
      }
      var a;
    };
  }
]);

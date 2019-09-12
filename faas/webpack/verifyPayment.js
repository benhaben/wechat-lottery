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
    n((n.s = 14))
  );
})({
  0: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return r;
    }),
      n.d(e, "b", function() {
        return a;
      });
    const r = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      a = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587
      };
  },
  1: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return a;
    }),
      n.d(e, "e", function() {
        return o;
      }),
      n.d(e, "d", function() {
        return u;
      }),
      n.d(e, "b", function() {
        return i;
      }),
      n.d(e, "c", function() {
        return c;
      }),
      n.d(e, "f", function() {
        return f;
      }),
      n.d(e, "g", function() {
        return s;
      });
    var r = n(0);
    const a = "5d7917899d8da5229c037105",
      o = new BaaS.TableObject(r.b.USER_LOTTERY_RECORD),
      u = new BaaS.TableObject(r.b.LOTTERY),
      i = new BaaS.TableObject(r.b.CONFIG),
      c = new BaaS.TableObject(r.b.ERROR);
    async function f(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", u.getWithoutData(t)), o.setQuery(e).count()
      );
    }
    async function s() {
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
  14: function(t, e, n) {
    t.exports = n(15);
  },
  15: function(t, e, n) {
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
        let i = (await r.d.get(u)).data;
        if (i && i.total_prize === a) {
          let t = r.d.getWithoutData(u);
          t.set("status", 1),
            t.set("transaction_no", o),
            e(null, await t.update());
        } else {
          let t = {
            error: "支付金额和抽奖金额不一致",
            action: "verifyPayment",
            created_by: i.created_by,
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

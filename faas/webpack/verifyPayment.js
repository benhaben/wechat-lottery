!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
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
    n((n.s = 9));
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
  10: function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0);
    const a = r.b.LOTTERY,
      o = r.b.ERROR;
    exports.main = async function(t, e) {
      console.log(`verifyPayment event.data: ${JSON.stringify(t.data)}`);
      try {
        const n = t.data,
          r = n.total_cost,
          i = n.transaction_no,
          c = n.merchandise_snapshot.id,
          u = new BaaS.TableObject(a),
          s = new BaaS.Query();
        s.compare("id", "=", c);
        let f = (await u.setQuery(s).find()).data.objects[0];
        if (f && f.total_prize === r) {
          u.set("status", 1),
            u.set("transaction_no", i),
            e(null, await u.update());
        } else {
          let t = new BaaS.TableObject(o),
            n = {
              error: "支付金额和抽奖金额不一致",
              action: "verifyPayment",
              created_by: f.created_by,
              lottery: u.getWithoutData(c)
            };
          const r = t.create();
          await r.set(n).save();
          e(new Error(JSON.stringify(n)));
        }
      } catch (n) {
        let r = new BaaS.TableObject(o),
          a = {
            error: `verifyPayment event.data: ${JSON.stringify(
              t.data
            )} - Error: ${n.message}`,
            action: "verifyPayment"
          };
        const i = r.create();
        await i.set(a).save();
        e(new Error(JSON.stringify(a)));
      }
    };
  },
  9: function(t, e, n) {
    t.exports = n(10);
  }
});

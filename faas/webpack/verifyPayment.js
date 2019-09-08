!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 5));
})([
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return n;
    }),
      r.d(t, "b", function() {
        return a;
      });
    const n = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      a = { USER_LOTTERY_RECORD: 81892, LOTTERY: 81873, ERROR: 83510 };
  },
  ,
  ,
  ,
  ,
  function(e, t, r) {
    e.exports = r(6);
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0);
    const a = n.b.LOTTERY,
      o = n.b.ERROR;
    exports.main = async function(e, t) {
      console.log(`verifyPayment event.data: ${JSON.stringify(e.data)}`);
      try {
        const r = e.data,
          n = r.total_cost,
          i = (r.merchandise_record_id, r.transaction_no),
          c = r.merchandise_snapshot.id,
          u = new BaaS.TableObject(a),
          s = new BaaS.Query();
        s.compare("id", "=", c);
        let f = (await u.setQuery(s).find()).data.objects[0];
        if (f && f.total_prize === n) {
          u.set("status", 1),
            u.set("transaction_no", i),
            t(null, await u.update());
        } else {
          let e = new BaaS.TableObject(o),
            r = {
              error: "支付金额和抽奖金额不一致",
              action: "verifyPayment",
              created_by: f.created_by,
              lottery: u.getWithoutData(c)
            };
          const n = e.create();
          await n.set(r).save();
          t(new Error(JSON.stringify(r)));
        }
      } catch (r) {
        let n = new BaaS.TableObject(o),
          a = {
            error: `verifyPayment event.data: ${JSON.stringify(
              e.data
            )} - Error: ${r.message}`,
            action: "verifyPayment"
          };
        const i = n.create();
        await i.set(a).save();
        t(new Error(JSON.stringify(a)));
      }
    };
  }
]);

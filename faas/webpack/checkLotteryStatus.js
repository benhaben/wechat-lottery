!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
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
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
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
    n((n.s = 1));
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      });
    const r = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      o = { USER_LOTTERY_RECORD: 81892, LOTTERY: 81873, ERROR: 83510 };
  },
  function(e, t, n) {
    e.exports = n(2);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    let o = new BaaS.TableObject(r.b.LOTTERY),
      u = new BaaS.TableObject(r.b.USER_LOTTERY_RECORD);
    const a = e => {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", o.getWithoutData(e)), u.setQuery(t).count()
      );
    };
    exports.main = async function(e, t) {
      try {
        let e = (await (() => {
          let e = new BaaS.Query();
          return e.compare("status", "=", 2), o.setQuery(e).find();
        })()).data.objects;
        if (e)
          for (let t in e) {
            let n = e[t];
            a(n.id),
              Math.round(Date.parse(n.open_date) / 1e3),
              Math.round(new Date() / 1e3);
            n.open_people_num;
          }
        else t(r.a.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    };
  }
]);

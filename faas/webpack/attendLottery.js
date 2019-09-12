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
    n((n.s = 3))
  );
})([
  function(t, e, n) {
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
  ,
  ,
  function(t, e, n) {
    t.exports = n(4);
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0);
    exports.main = async function(t, e) {
      const { lottery_id: n, weight: a } = t.data,
        o = t.request.user.id;
      try {
        let t = new BaaS.User(),
          u = await t.get(o);
        console.log(`user : ${u}`);
        let i = new BaaS.TableObject(r.b.LOTTERY).getWithoutData(n);
        const c = new BaaS.TableObject(r.b.USER_LOTTERY_RECORD).create();
        e(
          null,
          await c
            .set({
              user: t.getWithoutData(o),
              avatar: u.data.avatar,
              nickname: u.data.nickname,
              lottery: i,
              weight: a
            })
            .save()
        );
      } catch (t) {
        e(t);
      }
    };
  }
]).default;

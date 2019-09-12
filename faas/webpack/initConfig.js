exports.main = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
    n((n.s = 12))
  );
})({
  0: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
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
  12: function(e, t, n) {
    e.exports = n(13);
  },
  13: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    exports.main = async function(e, t) {
      try {
        const e = new BaaS.TableObject(r.b.CONFIG).create();
        t(
          null,
          await e
            .set({
              lucky_cost_per: 1,
              weight_per_lucky: 2,
              lottery_prize_list: [
                9.9,
                16.8,
                33.3,
                51.8,
                66.6,
                86.8,
                88.8,
                99.9
              ],
              lottery_num_people: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
              prize_colors: [1, 0, 0, 0, 0, 0, 0, 0],
              plans: [
                "红包95个/福袋100个",
                "红包97个/福袋50个",
                "红包98个/福袋25个"
              ],
              plans_lucky_package: [100, 50, 25],
              plans_lottery_package: [95, 97, 98],
              lucky_ratio_open: 100,
              lucky_ratio_success: 1e3,
              lucky_ratio_lucky_package: 10,
              lucky_ratio_invitation: 100,
              lucky_ratio_invitation_open: 10
            })
            .save()
        );
      } catch (e) {
        t(e);
      }
    };
  }
}).default;

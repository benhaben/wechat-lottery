!(function(t) {
  var e = {};
  function n(a) {
    if (e[a]) return e[a].exports;
    var r = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            a,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
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
    n((n.s = 1));
})([
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return a;
    }),
      n.d(e, "c", function() {
        return r;
      });
    const a = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      r = { USER_LOTTERY_RECORD: "user_lottery_record", LOTTERY: "lottery" };
  },
  function(t, e, n) {
    n(2), n(3), n(4), n(5), (t.exports = n(6));
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(0);
    let r = new BaaS.TableObject(a.c.LOTTERY),
      o = new BaaS.TableObject(a.c.USER_LOTTERY_RECORD);
    const c = t => {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", r.getWithoutData(t)), o.setQuery(e).count()
      );
    };
    exports.main = async function(t, e) {
      try {
        let t = (await (() => {
          let t = new BaaS.Query();
          return t.compare("status", "=", 2), r.setQuery(t).find();
        })()).data.objects;
        if (t)
          for (let e in t) {
            let n = t[e];
            c(n.id),
              Math.round(Date.parse(n.open_date) / 1e3),
              Math.round(new Date() / 1e3);
            n.open_people_num;
          }
        else e(a.a.GET_LOTTERY_FAILED);
      } catch (t) {
        e(t);
      }
    };
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(0);
    exports.main = async function(t, e) {
      const n = t.data;
      try {
        e(
          null,
          new BaaS.TableObject(a.TABLE_ID.LOTTERY)
            .create()
            .set(n)
            .save()
        );
      } catch (t) {
        e(t);
      }
    };
  },
  function(t, e) {
    const n = 12345678,
      a = 123456789;
    e.main = function(t, e) {
      const { product_id: r } = t.data,
        o = t.request.user.id;
      (function(t) {
        const e = new BaaS.TableObject(n),
          a = new BaaS.Query();
        return (
          a.compare("id", "=", t),
          e
            .setQuery(a)
            .find()
            .then(t => {
              return (t.data.objects || [])[0] || {};
            })
        );
      })(r)
        .then(t =>
          (function(t, e) {
            const n = new BaaS.TableObject(a).create(),
              r = {
                product_id: t.id,
                product_snapshot: t,
                total_cost: t.price,
                status: "no_paid",
                created_by: e
              };
            return n.set(r).save();
          })(t, o)
        )
        .then(t => {
          const n = t.data || {};
          e(null, n);
        })
        .catch(t => {
          e(t);
        });
    };
  },
  function(t, e) {
    Page({
      data: { product: {} },
      onLoad(t) {
        const e = t.id || "5ade97135acfb521865bf766";
        this.getProductDetail(e);
      },
      getProductDetail(t) {
        const e = new wx.BaaS.TableObject(12345678),
          n = new wx.BaaS.Query();
        n.compare("id", "=", t),
          e
            .setQuery(n)
            .find()
            .then(t => {
              const e = (t.data.objects || [])[0] || {};
              this.setData({ product: e });
            });
      },
      createOrder(t) {
        wx.getSetting({
          success: t => {
            t.authSetting["scope.userInfo"]
              ? this.createOrderHandle()
              : wx.BaaS.login();
          }
        });
      },
      createOrderHandle() {
        wx.BaaS.invokeFunction("createOrder", {
          product_id: this.data.product.id
        })
          .then(t => ((this.order = t.data || {}), this.pay(this.order)))
          .then(t => {
            wx.navigateTo({ url: "../order/order" });
          });
      },
      pay(t) {
        const e = this.data.product,
          n = {
            totalCost: t.total_cost,
            merchandiseDescription: e.title,
            merchandiseSchemaID: 123456789,
            merchandiseRecordID: t.id,
            merchandiseSnapshot: e
          };
        return wx.BaaS.pay(n).then(t => t.transaction_no);
      }
    });
  },
  function(t, e) {
    const n = 12345678,
      a = 123456789;
    e.main = function(t, e) {
      const r = t.data,
        o = r.total_cost,
        c = r.merchandise_record_id,
        i = r.transaction_no;
      (function(t) {
        const e = new BaaS.TableObject(n),
          a = new BaaS.Query();
        return (
          a.compare("id", "=", t),
          e
            .setQuery(a)
            .find()
            .then(t => {
              return (t.data.objects || [])[0] || {};
            })
        );
      })(r.merchandise_snapshot.id).then(t => {
        t.price === o &&
          (function(t, e) {
            const n = new BaaS.TableObject(a),
              r = t,
              o = n.getWithoutData(r);
            o.set("status", "paid"), o.set("transaction_no", e), o.update();
          })(c, i);
      });
    };
  }
]);

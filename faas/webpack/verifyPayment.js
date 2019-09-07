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
    r((r.s = 7));
})({
  0: function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return n;
    }),
      r.d(t, "c", function() {
        return a;
      }),
      r.d(t, "a", function() {
        return o;
      });
    const n = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      a = {
        USER_LOTTERY_RECORD: "user_lottery_record",
        LOTTERY: "lottery",
        ORDER: "order",
        ERROR: "error"
      },
      o = {
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png",
        LOTTERY_PRIZE_LIST: [
          "9.9",
          "16.8",
          "33.3",
          "51.8",
          "66.6",
          "86.8",
          "88.8",
          "99.9"
        ],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_PACKAGE: [100, 50, 25],
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
  7: function(e, t, r) {
    e.exports = r(8);
  },
  8: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0);
    const a = n.c.LOTTERY,
      o = n.c.ORDER,
      i = n.c.ERROR;
    exports.main = async function(e, t) {
      console.log(`verifyPayment event.data: ${JSON.stringify(e.data)}`);
      try {
        const r = e.data,
          n = r.total_cost,
          c = r.merchandise_record_id,
          u = r.transaction_no,
          s = r.merchandise_snapshot.id,
          _ = new BaaS.TableObject(a),
          f = new BaaS.Query();
        f.compare("id", "=", s);
        let l = (await _.setQuery(f).find()).data.objects[0];
        if (l && l.total_prize === n) {
          const e = new BaaS.TableObject(o).getWithoutData(c);
          e.set("status", "paid"),
            e.set("transaction_no", u),
            t(null, await e.update());
        } else {
          let e = new BaaS.TableObject(i),
            r = {
              error: "支付金额和抽奖金额不一致",
              action: "verifyPayment",
              created_by: l.created_by,
              lottery: _.getWithoutData(s)
            };
          const n = e.create();
          await n.set(r).save();
          t(new Error(JSON.stringify(r)));
        }
      } catch (r) {
        let n = new BaaS.TableObject(i),
          a = {
            error: `verifyPayment event.data: ${JSON.stringify(
              e.data
            )} - Error: ${r.message}`,
            action: "verifyPayment"
          };
        const o = n.create();
        await o.set(a).save();
        t(new Error(JSON.stringify(a)));
      }
    };
  }
});

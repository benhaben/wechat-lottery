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
    n((n.s = 5));
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return a;
      });
    const r = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      o = {
        USER_LOTTERY_RECORD: "user_lottery_record",
        LOTTERY: "lottery",
        ORDER: "order"
      },
      a = {
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
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(6);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    const o = r.c.LOTTERY,
      a = r.c.ORDER;
    exports.main = async function(e, t) {
      try {
        const { lottery_id: n } = e.data,
          i = (e.request.user.id, new BaaS.TableObject(o)),
          u = new BaaS.Query();
        u.compare("id", "=", n);
        const _ = (await i.setQuery(u).find()).data.objects[0];
        console.log(`JSON.stringify ：${JSON.stringify(_)}`);
        const c = new BaaS.TableObject(a).create(),
          l = {
            lottery_id: i.getWithoutData(_.id),
            lottery_snapshot: {
              url: _.url,
              file: _.file,
              open_date: _.open_date,
              pic_data: _.pic_data,
              total_prize: _.total_prize,
              lucky_num: _.lucky_num,
              lucky_num_per: _.lucky_num_per,
              plan_index: _.plan_index,
              plan: r.a.PLANS[_.plan_index],
              open_people_num: _.open_people_num,
              tag_items: _.tag_items,
              desc_initiator: _.desc_initiator,
              avatar: _.avatar,
              nickname: _.nickname
            },
            total_cost: _.total_prize,
            status: "no_paid",
            created_by: e.request.user.id
          };
        t(null, (await c.set(l).save()).data || {});
      } catch (e) {
        t(e);
      }
    };
  }
]);

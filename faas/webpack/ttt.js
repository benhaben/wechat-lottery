module.exports = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
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
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
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
    r((r.s = 12))
  );
})([
  function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "ROUTE", function() {
        return n;
      }),
      r.d(t, "ROUTE_DATA", function() {
        return o;
      }),
      r.d(t, "ERR_TYPE", function() {
        return i;
      }),
      r.d(t, "CONTENT_GROUP", function() {
        return s;
      }),
      r.d(t, "TABLE_ID", function() {
        return u;
      }),
      r.d(t, "FUNCTION_NAME", function() {
        return c;
      }),
      r.d(t, "WECHAT_SCENE", function() {
        return a;
      }),
      r.d(t, "WECHAT_REPORT_ANALYTICS_MAP", function() {
        return f;
      }),
      r.d(t, "CONST", function() {
        return l;
      });
    const n = {
        HOME: "/pages/home/home",
        PIC_DETAILS: "/pages/pic_details/details",
        TAGS: "/pages/tags/tags",
        ADD_LOTTERY: "/pages/add_lottery/add_lottery",
        ATTEND_LOTTERY: "/pages/attend_lottery/attend_lottery",
        USER: "/pages/user/user",
        SHARE_PIC: "/pages/share_pic/share_pic"
      },
      o = {
        FROM_ADD_LOTTERY_TO_TAGS: "ADD_LOTTERY_TO_TAGS",
        BACK_PIC_DETAILS_TO_ADD_LOTTERY: "BACK_PIC_DETAILS_TO_ADD_LOTTERY",
        BACK_TAGS_TO_ADD_LOTTERY: "BACK_TAGS_TO_ADD_LOTTERY",
        FROM_ATTEND_LOTTERY_TO_SHARE_PIC: "FROM_ATTEND_LOTTERY_TO_SHARE_PIC"
      },
      i = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      s = "",
      u = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587
      },
      c = { CREATE_LOTTERY: "createLottery", ATTEND_LOTTERY: "attendLottery" },
      a = {
        FROM_CHAT: "FROM_CHAT",
        FROM_POSTER: "FROM_POSTER",
        FROM_DEFAULT: "FROM_DEFAULT"
      },
      f = {
        [a.FROM_CHAT]: [
          ["ana_user_source", "user_source", "Link"],
          ["ana_user_source_link", "link"],
          ["ana_user_source_share", "share"]
        ],
        [a.FROM_POSTER]: [
          ["ana_user_source", "user_source", "QR"],
          ["ana_user_source_qrcode", "qrcode"],
          ["ana_user_source_share", "share"]
        ],
        [a.FROM_DEFAULT]: [
          ["ana_user_source", "user_source", "default"],
          ["ana_user_source_default", "default"]
        ]
      },
      l = {
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png",
        LOTTERY_PRIZE_LIST: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        plans_lottery_package: [95, 97, 98],
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
  function(e, t, r) {
    var n;
    !(function(o) {
      "use strict";
      var i,
        s = 20,
        u = 1,
        c = 1e6,
        a = -7,
        f = 21,
        l = "[big.js] ",
        _ = l + "Invalid ",
        T = _ + "decimal places",
        h = _ + "rounding mode",
        E = {},
        p = void 0,
        d = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function O(e, t, r, n) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === r) n = o[i] >= 5;
          else if (2 === r)
            n =
              o[i] > 5 ||
              (5 == o[i] && (n || i < 0 || o[i + 1] !== p || 1 & o[i - 1]));
          else if (3 === r) n = n || !!o[0];
          else if (((n = !1), 0 !== r)) throw Error(h);
          if (i < 1)
            (o.length = 1), n ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), n))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (r < 0 || r > 3 || r !== ~~r) throw Error(h);
        return e;
      }
      function R(e, t, r, n) {
        var o,
          i,
          s = e.constructor,
          u = !e.c[0];
        if (r !== p) {
          if (r !== ~~r || r < (3 == t) || r > c)
            throw Error(3 == t ? _ + "precision" : T);
          for (
            r = n - (e = new s(e)).e,
              e.c.length > ++n && O(e, r, s.RM),
              2 == t && (n = e.e + r + 1);
            e.c.length < n;

          )
            e.c.push(0);
        }
        if (
          ((o = e.e),
          (r = (i = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && n <= o) || o <= s.NE || o >= s.PE))
        )
          i =
            i.charAt(0) +
            (r > 1 ? "." + i.slice(1) : "") +
            (o < 0 ? "e" : "e+") +
            o;
        else if (o < 0) {
          for (; ++o; ) i = "0" + i;
          i = "0." + i;
        } else if (o > 0)
          if (++o > r) for (o -= r; o--; ) i += "0";
          else o < r && (i = i.slice(0, o) + "." + i.slice(o));
        else r > 1 && (i = i.charAt(0) + "." + i.slice(1));
        return e.s < 0 && (!u || 4 == t) ? "-" + i : i;
      }
      (E.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (E.cmp = function(e) {
          var t,
            r = this,
            n = r.c,
            o = (e = new r.constructor(e)).c,
            i = r.s,
            s = e.s,
            u = r.e,
            c = e.e;
          if (!n[0] || !o[0]) return n[0] ? i : o[0] ? -s : 0;
          if (i != s) return i;
          if (((t = i < 0), u != c)) return (u > c) ^ t ? 1 : -1;
          for (s = (u = n.length) < (c = o.length) ? u : c, i = -1; ++i < s; )
            if (n[i] != o[i]) return (n[i] > o[i]) ^ t ? 1 : -1;
          return u == c ? 0 : (u > c) ^ t ? 1 : -1;
        }),
        (E.div = function(e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            o = (e = new r(e)).c,
            i = t.s == e.s ? 1 : -1,
            s = r.DP;
          if (s !== ~~s || s < 0 || s > c) throw Error(T);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * i);
          var u,
            a,
            f,
            l,
            _,
            h = o.slice(),
            E = (u = o.length),
            d = n.length,
            R = n.slice(0, u),
            g = R.length,
            A = e,
            D = (A.c = []),
            L = 0,
            w = s + (A.e = t.e - e.e) + 1;
          for (A.s = i, i = w < 0 ? 0 : w, h.unshift(0); g++ < u; ) R.push(0);
          do {
            for (f = 0; f < 10; f++) {
              if (u != (g = R.length)) l = u > g ? 1 : -1;
              else
                for (_ = -1, l = 0; ++_ < u; )
                  if (o[_] != R[_]) {
                    l = o[_] > R[_] ? 1 : -1;
                    break;
                  }
              if (!(l < 0)) break;
              for (a = g == u ? o : h; g; ) {
                if (R[--g] < a[g]) {
                  for (_ = g; _ && !R[--_]; ) R[_] = 9;
                  --R[_], (R[g] += 10);
                }
                R[g] -= a[g];
              }
              for (; !R[0]; ) R.shift();
            }
            (D[L++] = l ? f : ++f),
              R[0] && l ? (R[g] = n[E] || 0) : (R = [n[E]]);
          } while ((E++ < d || R[0] !== p) && i--);
          return (
            D[0] || 1 == L || (D.shift(), A.e--),
            L > w && O(A, s, r.RM, R[0] !== p),
            A
          );
        }),
        (E.eq = function(e) {
          return !this.cmp(e);
        }),
        (E.gt = function(e) {
          return this.cmp(e) > 0;
        }),
        (E.gte = function(e) {
          return this.cmp(e) > -1;
        }),
        (E.lt = function(e) {
          return this.cmp(e) < 0;
        }),
        (E.lte = function(e) {
          return this.cmp(e) < 1;
        }),
        (E.minus = E.sub = function(e) {
          var t,
            r,
            n,
            o,
            i = this,
            s = i.constructor,
            u = i.s,
            c = (e = new s(e)).s;
          if (u != c) return (e.s = -c), i.plus(e);
          var a = i.c.slice(),
            f = i.e,
            l = e.c,
            _ = e.e;
          if (!a[0] || !l[0])
            return l[0] ? ((e.s = -c), e) : new s(a[0] ? i : 0);
          if ((u = f - _)) {
            for (
              (o = u < 0) ? ((u = -u), (n = a)) : ((_ = f), (n = l)),
                n.reverse(),
                c = u;
              c--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((o = a.length < l.length) ? a : l).length, u = c = 0;
              c < r;
              c++
            )
              if (a[c] != l[c]) {
                o = a[c] < l[c];
                break;
              }
          if (
            (o && ((n = a), (a = l), (l = n), (e.s = -e.s)),
            (c = (r = l.length) - (t = a.length)) > 0)
          )
            for (; c--; ) a[t++] = 0;
          for (c = t; r > u; ) {
            if (a[--r] < l[r]) {
              for (t = r; t && !a[--t]; ) a[t] = 9;
              --a[t], (a[r] += 10);
            }
            a[r] -= l[r];
          }
          for (; 0 === a[--c]; ) a.pop();
          for (; 0 === a[0]; ) a.shift(), --_;
          return a[0] || ((e.s = 1), (a = [(_ = 0)])), (e.c = a), (e.e = _), e;
        }),
        (E.mod = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (!e.c[0]) throw Error("[big.js] Division by zero");
          return (
            (r.s = e.s = 1),
            (t = 1 == e.cmp(r)),
            (r.s = o),
            (e.s = i),
            t
              ? new n(r)
              : ((o = n.DP),
                (i = n.RM),
                (n.DP = n.RM = 0),
                (r = r.div(e)),
                (n.DP = o),
                (n.RM = i),
                this.minus(r.times(e)))
          );
        }),
        (E.plus = E.add = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (o != i) return (e.s = -i), r.minus(e);
          var s = r.e,
            u = r.c,
            c = e.e,
            a = e.c;
          if (!u[0] || !a[0]) return a[0] ? e : new n(u[0] ? r : 0 * o);
          if (((u = u.slice()), (o = s - c))) {
            for (
              o > 0 ? ((c = s), (t = a)) : ((o = -o), (t = u)), t.reverse();
              o--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            u.length - a.length < 0 && ((t = a), (a = u), (u = t)),
              o = a.length,
              i = 0;
            o;
            u[o] %= 10
          )
            i = ((u[--o] = u[o] + a[o] + i) / 10) | 0;
          for (i && (u.unshift(i), ++c), o = u.length; 0 === u[--o]; ) u.pop();
          return (e.c = u), (e.e = c), e;
        }),
        (E.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(_ + "exponent");
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (E.round = function(e, t) {
          var r = this.constructor;
          if (e === p) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(T);
          return O(new r(this), e, t === p ? r.RM : t);
        }),
        (E.sqrt = function() {
          var e,
            t,
            r,
            n = this,
            o = n.constructor,
            i = n.s,
            s = n.e,
            u = new o(0.5);
          if (!n.c[0]) return new o(n);
          if (i < 0) throw Error(l + "No square root");
          0 === (i = Math.sqrt(n + "")) || i === 1 / 0
            ? (((t = n.c.join("")).length + s) & 1 || (t += "0"),
              (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + s
              )))
            : (e = new o(i)),
            (s = e.e + (o.DP += 4));
          do {
            (r = e), (e = u.times(r.plus(n.div(r))));
          } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return O(e, (o.DP -= 4), o.RM);
        }),
        (E.times = E.mul = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.c,
            i = (e = new n(e)).c,
            s = o.length,
            u = i.length,
            c = r.e,
            a = e.e;
          if (((e.s = r.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new n(0 * e.s);
          for (
            e.e = c + a,
              s < u && ((t = o), (o = i), (i = t), (a = s), (s = u), (u = a)),
              t = new Array((a = s + u));
            a--;

          )
            t[a] = 0;
          for (c = u; c--; ) {
            for (u = 0, a = s + c; a > c; )
              (u = t[a] + i[c] * o[a - c - 1] + u),
                (t[a--] = u % 10),
                (u = (u / 10) | 0);
            t[a] = u;
          }
          for (u ? ++e.e : t.shift(), c = t.length; !t[--c]; ) t.pop();
          return (e.c = t), e;
        }),
        (E.toExponential = function(e) {
          return R(this, 1, e, e);
        }),
        (E.toFixed = function(e) {
          return R(this, 2, e, this.e + e);
        }),
        (E.toPrecision = function(e) {
          return R(this, 3, e, e - 1);
        }),
        (E.toString = function() {
          return R(this);
        }),
        (E.valueOf = E.toJSON = function() {
          return R(this, 4);
        }),
        ((i = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === p ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!d.test((t += ""))) throw Error(_ + "number");
                  (e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                    (r = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                  (n = t.search(/e/i)) > 0
                    ? (r < 0 && (r = n),
                      (r += +t.slice(n + 1)),
                      (t = t.substring(0, n)))
                    : r < 0 && (r = t.length);
                  for (o = t.length, n = 0; n < o && "0" == t.charAt(n); ) ++n;
                  if (n == o) e.c = [(e.e = 0)];
                  else {
                    for (; o > 0 && "0" == t.charAt(--o); );
                    for (e.e = r - n - 1, e.c = [], r = 0; n <= o; )
                      e.c[r++] = +t.charAt(n++);
                  }
                })(n, r),
              (n.constructor = t);
          }
          return (
            (t.prototype = E),
            (t.DP = s),
            (t.RM = u),
            (t.NE = a),
            (t.PE = f),
            (t.version = "5.2.2"),
            t
          );
        })()).default = i.Big = i),
        void 0 ===
          (n = function() {
            return i;
          }.call(t, r, t, e)) || (e.exports = n);
    })();
  },
  function(e, t, r) {
    "use strict";
    r.r(t),
      function(e) {
        var t = r(1),
          n = r.n(t);
        function o(e) {
          return (e = e.toString())[1] ? e : "0" + e;
        }
        e.exports = {
          formatTime: e => {
            var t = new Date();
            t.setTime(e);
            const r = t.getFullYear(),
              n = t.getMonth() + 1,
              i = t.getDate(),
              s = t.getHours(),
              u = t.getMinutes();
            t.getSeconds();
            return [r, n, i].map(o).join("-") + " " + [s, u].map(o).join(":");
          },
          formatDate: e => {
            var t = new Date();
            return (
              t.setTime(e),
              [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(o).join("-")
            );
          },
          toFixed1: e => new n.a(e).toFixed(1),
          openDateTimeStamp: function() {
            var e = Date.parse(new Date());
            return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
          },
          countDown: function(e) {
            let t =
              Math.round(Date.parse(e) / 1e3) - Math.round(new Date() / 1e3);
            if (t > 0) {
              let e = Math.floor(t / 86400),
                r = Math.floor(t / 3600) - 24 * e,
                n = Math.floor(t / 60) - 24 * e * 60 - 60 * r,
                o = Math.floor(t) - 24 * e * 60 * 60 - 60 * r * 60 - 60 * n;
              return (
                r < 10 && (r = "0" + r),
                n < 10 && (n = "0" + n),
                o < 10 && (o = "0" + o),
                r + "小时" + n + "分钟"
              );
            }
            return "已过期";
          }
        };
      }.call(this, r(3)(e));
  },
  function(e, t) {
    e.exports = function(e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, r) {
    e.exports = r(13);
  },
  function(e, t, r) {
    const n = r(0).TABLE_ID,
      o = r(0).ERR_TYPE,
      i = r(2).openDateTimeStamp;
    async function s(e) {
      let t = new BaaS.TableObject(n.USER_LOTTERY_RECORD),
        r = new BaaS.TableObject(n.LOTTERY),
        o = new BaaS.Query();
      return (
        o.compare("lottery", "=", r.getWithoutData(e)), t.setQuery(o).count()
      );
    }
    t.main = async function(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await (async function() {
          let e = new BaaS.TableObject(n.LOTTERY),
            t = new BaaS.Query();
          return t.compare("status", "=", 2), e.setQuery(t).find();
        })()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let r = e[t];
            console.log("before");
            let o = await s(r.id);
            console.log(`getAttendeesCount: ${o}`);
            let u =
              Math.round(Date.parse(r.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (o >= r.open_people_num && u <= 0)
              console.log(`开奖 - lottery.id: ${r.id}`);
            else if (o < r.open_people_num && u <= 0) {
              let e = i();
              console.log(
                `人数不够，时间已经到了，顺延24小时 - lottery.id: ${r.id}, time: ${e}`
              );
              let t = new BaaS.TableObject(n.LOTTERY).getWithoutData(r.id);
              t.set("open_date", e);
              await t.update();
            }
          }
          t(null, "success");
        } else t(o.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    };
  }
]);

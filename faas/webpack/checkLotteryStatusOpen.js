exports.main = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
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
    n((n.s = 13))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return u;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      i = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573
      },
      o = "5d7917899d8da5229c037105",
      u = {
        WAIT_APPROVE: 1,
        APPROVED: 2,
        REJECTED: -1,
        GET_ATTENDEES: 0,
        GET_FUDAI: 2,
        GET_HONGBAO: 1,
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i9fpj58fLEqdfsG.png",
        LOTTERY_PRIZE_LIST: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        PLANS_LOTTERY_PACKAGE: [95, 97, 98],
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
  function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return i;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return s;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "i", function() {
        return f;
      }),
      n.d(t, "j", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return d;
      }),
      n.d(t, "e", function() {
        return h;
      });
    var r = n(0);
    const i = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      s = new BaaS.TableObject(r.d.ERROR),
      c = new BaaS.User(),
      a = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function f(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", o.getWithoutData(e)), i.setQuery(t).count()
      );
    }
    async function l() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        o
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
    const d = [
        0,
        1,
        2,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        16,
        18,
        20,
        22,
        26,
        28,
        30,
        32,
        36,
        38,
        40,
        42,
        46,
        48,
        50,
        52,
        56,
        58,
        60,
        62,
        66,
        68,
        70,
        72,
        78,
        80,
        81,
        82,
        83,
        85,
        86,
        87,
        88,
        89,
        90,
        92,
        96,
        99,
        100,
        102,
        106,
        108,
        110,
        112,
        116,
        118,
        120,
        122,
        126,
        128,
        150,
        152,
        156,
        158,
        160,
        162,
        166,
        168,
        170,
        172,
        176,
        178,
        180,
        182,
        186,
        188,
        200,
        202,
        206,
        208,
        510,
        512,
        516,
        518,
        555,
        666,
        777,
        888,
        610,
        612,
        616,
        618,
        190,
        192,
        196,
        199,
        130,
        132,
        136,
        138
      ],
      h = [
        4,
        11,
        13,
        14,
        15,
        17,
        19,
        21,
        23,
        24,
        25,
        27,
        29,
        31,
        33,
        34,
        35,
        37,
        39,
        41,
        43,
        44,
        45,
        47,
        49,
        51,
        53,
        54,
        55,
        57,
        59,
        61,
        63,
        64,
        65,
        67,
        69,
        71,
        73,
        74,
        76,
        79,
        84,
        91,
        93,
        94,
        95,
        97,
        98,
        101,
        103,
        104,
        105,
        107,
        109,
        111,
        113,
        114,
        115,
        117,
        119,
        121,
        123,
        124,
        125,
        127,
        129,
        131,
        133,
        134,
        135,
        137,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        151,
        153,
        154,
        155,
        157,
        159,
        161,
        163,
        164,
        165,
        167,
        169,
        171,
        173,
        174,
        177,
        179,
        181,
        183,
        184,
        185,
        187,
        189,
        191,
        193,
        194,
        195,
        197,
        201,
        203,
        205,
        207,
        209,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        224,
        225,
        226,
        227,
        228
      ];
  },
  ,
  function(e, t, n) {
    var r;
    !(function(i) {
      "use strict";
      var o,
        u = 20,
        s = 1,
        c = 1e6,
        a = -7,
        f = 21,
        l = "[big.js] ",
        d = l + "Invalid ",
        h = d + "decimal places",
        _ = d + "rounding mode",
        p = {},
        E = void 0,
        g = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function O(e, t, n, r) {
        var i = e.c,
          o = e.e + t + 1;
        if (o < i.length) {
          if (1 === n) r = i[o] >= 5;
          else if (2 === n)
            r =
              i[o] > 5 ||
              (5 == i[o] && (r || o < 0 || i[o + 1] !== E || 1 & i[o - 1]));
          else if (3 === n) r = r || !!i[0];
          else if (((r = !1), 0 !== n)) throw Error(_);
          if (o < 1)
            (i.length = 1), r ? ((e.e = -t), (i[0] = 1)) : (i[0] = e.e = 0);
          else {
            if (((i.length = o--), r))
              for (; ++i[o] > 9; ) (i[o] = 0), o-- || (++e.e, i.unshift(1));
            for (o = i.length; !i[--o]; ) i.pop();
          }
        } else if (n < 0 || n > 3 || n !== ~~n) throw Error(_);
        return e;
      }
      function w(e, t, n, r) {
        var i,
          o,
          u = e.constructor,
          s = !e.c[0];
        if (n !== E) {
          if (n !== ~~n || n < (3 == t) || n > c)
            throw Error(3 == t ? d + "precision" : h);
          for (
            n = r - (e = new u(e)).e,
              e.c.length > ++r && O(e, n, u.RM),
              2 == t && (r = e.e + n + 1);
            e.c.length < r;

          )
            e.c.push(0);
        }
        if (
          ((i = e.e),
          (n = (o = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && r <= i) || i <= u.NE || i >= u.PE))
        )
          o =
            o.charAt(0) +
            (n > 1 ? "." + o.slice(1) : "") +
            (i < 0 ? "e" : "e+") +
            i;
        else if (i < 0) {
          for (; ++i; ) o = "0" + o;
          o = "0." + o;
        } else if (i > 0)
          if (++i > n) for (i -= n; i--; ) o += "0";
          else i < n && (o = o.slice(0, i) + "." + o.slice(i));
        else n > 1 && (o = o.charAt(0) + "." + o.slice(1));
        return e.s < 0 && (!s || 4 == t) ? "-" + o : o;
      }
      (p.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (p.cmp = function(e) {
          var t,
            n = this,
            r = n.c,
            i = (e = new n.constructor(e)).c,
            o = n.s,
            u = e.s,
            s = n.e,
            c = e.e;
          if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -u : 0;
          if (o != u) return o;
          if (((t = o < 0), s != c)) return (s > c) ^ t ? 1 : -1;
          for (u = (s = r.length) < (c = i.length) ? s : c, o = -1; ++o < u; )
            if (r[o] != i[o]) return (r[o] > i[o]) ^ t ? 1 : -1;
          return s == c ? 0 : (s > c) ^ t ? 1 : -1;
        }),
        (p.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            i = (e = new n(e)).c,
            o = t.s == e.s ? 1 : -1,
            u = n.DP;
          if (u !== ~~u || u < 0 || u > c) throw Error(h);
          if (!i[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * o);
          var s,
            a,
            f,
            l,
            d,
            _ = i.slice(),
            p = (s = i.length),
            g = r.length,
            w = r.slice(0, s),
            T = w.length,
            m = e,
            y = (m.c = []),
            A = 0,
            b = u + (m.e = t.e - e.e) + 1;
          for (m.s = o, o = b < 0 ? 0 : b, _.unshift(0); T++ < s; ) w.push(0);
          do {
            for (f = 0; f < 10; f++) {
              if (s != (T = w.length)) l = s > T ? 1 : -1;
              else
                for (d = -1, l = 0; ++d < s; )
                  if (i[d] != w[d]) {
                    l = i[d] > w[d] ? 1 : -1;
                    break;
                  }
              if (!(l < 0)) break;
              for (a = T == s ? i : _; T; ) {
                if (w[--T] < a[T]) {
                  for (d = T; d && !w[--d]; ) w[d] = 9;
                  --w[d], (w[T] += 10);
                }
                w[T] -= a[T];
              }
              for (; !w[0]; ) w.shift();
            }
            (y[A++] = l ? f : ++f),
              w[0] && l ? (w[T] = r[p] || 0) : (w = [r[p]]);
          } while ((p++ < g || w[0] !== E) && o--);
          return (
            y[0] || 1 == A || (y.shift(), m.e--),
            A > b && O(m, u, n.RM, w[0] !== E),
            m
          );
        }),
        (p.eq = function(e) {
          return !this.cmp(e);
        }),
        (p.gt = function(e) {
          return this.cmp(e) > 0;
        }),
        (p.gte = function(e) {
          return this.cmp(e) > -1;
        }),
        (p.lt = function(e) {
          return this.cmp(e) < 0;
        }),
        (p.lte = function(e) {
          return this.cmp(e) < 1;
        }),
        (p.minus = p.sub = function(e) {
          var t,
            n,
            r,
            i,
            o = this,
            u = o.constructor,
            s = o.s,
            c = (e = new u(e)).s;
          if (s != c) return (e.s = -c), o.plus(e);
          var a = o.c.slice(),
            f = o.e,
            l = e.c,
            d = e.e;
          if (!a[0] || !l[0])
            return l[0] ? ((e.s = -c), e) : new u(a[0] ? o : 0);
          if ((s = f - d)) {
            for (
              (i = s < 0) ? ((s = -s), (r = a)) : ((d = f), (r = l)),
                r.reverse(),
                c = s;
              c--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((i = a.length < l.length) ? a : l).length, s = c = 0;
              c < n;
              c++
            )
              if (a[c] != l[c]) {
                i = a[c] < l[c];
                break;
              }
          if (
            (i && ((r = a), (a = l), (l = r), (e.s = -e.s)),
            (c = (n = l.length) - (t = a.length)) > 0)
          )
            for (; c--; ) a[t++] = 0;
          for (c = t; n > s; ) {
            if (a[--n] < l[n]) {
              for (t = n; t && !a[--t]; ) a[t] = 9;
              --a[t], (a[n] += 10);
            }
            a[n] -= l[n];
          }
          for (; 0 === a[--c]; ) a.pop();
          for (; 0 === a[0]; ) a.shift(), --d;
          return a[0] || ((e.s = 1), (a = [(d = 0)])), (e.c = a), (e.e = d), e;
        }),
        (p.mod = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
          if (!e.c[0]) throw Error("[big.js] Division by zero");
          return (
            (n.s = e.s = 1),
            (t = 1 == e.cmp(n)),
            (n.s = i),
            (e.s = o),
            t
              ? new r(n)
              : ((i = r.DP),
                (o = r.RM),
                (r.DP = r.RM = 0),
                (n = n.div(e)),
                (r.DP = i),
                (r.RM = o),
                this.minus(n.times(e)))
          );
        }),
        (p.plus = p.add = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
          if (i != o) return (e.s = -o), n.minus(e);
          var u = n.e,
            s = n.c,
            c = e.e,
            a = e.c;
          if (!s[0] || !a[0]) return a[0] ? e : new r(s[0] ? n : 0 * i);
          if (((s = s.slice()), (i = u - c))) {
            for (
              i > 0 ? ((c = u), (t = a)) : ((i = -i), (t = s)), t.reverse();
              i--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            s.length - a.length < 0 && ((t = a), (a = s), (s = t)),
              i = a.length,
              o = 0;
            i;
            s[i] %= 10
          )
            o = ((s[--i] = s[i] + a[i] + o) / 10) | 0;
          for (o && (s.unshift(o), ++c), i = s.length; 0 === s[--i]; ) s.pop();
          return (e.c = s), (e.e = c), e;
        }),
        (p.pow = function(e) {
          var t = this,
            n = new t.constructor(1),
            r = n,
            i = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(d + "exponent");
          for (i && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return i ? n.div(r) : r;
        }),
        (p.round = function(e, t) {
          var n = this.constructor;
          if (e === E) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(h);
          return O(new n(this), e, t === E ? n.RM : t);
        }),
        (p.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            i = r.constructor,
            o = r.s,
            u = r.e,
            s = new i(0.5);
          if (!r.c[0]) return new i(r);
          if (o < 0) throw Error(l + "No square root");
          0 === (o = Math.sqrt(r + "")) || o === 1 / 0
            ? (((t = r.c.join("")).length + u) & 1 || (t += "0"),
              (u = (((u + 1) / 2) | 0) - (u < 0 || 1 & u)),
              (e = new i(
                ((o = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + u
              )))
            : (e = new i(o)),
            (u = e.e + (i.DP += 4));
          do {
            (n = e), (e = s.times(n.plus(r.div(n))));
          } while (n.c.slice(0, u).join("") !== e.c.slice(0, u).join(""));
          return O(e, (i.DP -= 4), i.RM);
        }),
        (p.times = p.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.c,
            o = (e = new r(e)).c,
            u = i.length,
            s = o.length,
            c = n.e,
            a = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !i[0] || !o[0]))
            return new r(0 * e.s);
          for (
            e.e = c + a,
              u < s && ((t = i), (i = o), (o = t), (a = u), (u = s), (s = a)),
              t = new Array((a = u + s));
            a--;

          )
            t[a] = 0;
          for (c = s; c--; ) {
            for (s = 0, a = u + c; a > c; )
              (s = t[a] + o[c] * i[a - c - 1] + s),
                (t[a--] = s % 10),
                (s = (s / 10) | 0);
            t[a] = s;
          }
          for (s ? ++e.e : t.shift(), c = t.length; !t[--c]; ) t.pop();
          return (e.c = t), e;
        }),
        (p.toExponential = function(e) {
          return w(this, 1, e, e);
        }),
        (p.toFixed = function(e) {
          return w(this, 2, e, this.e + e);
        }),
        (p.toPrecision = function(e) {
          return w(this, 3, e, e - 1);
        }),
        (p.toString = function() {
          return w(this);
        }),
        (p.valueOf = p.toJSON = function() {
          return w(this, 4);
        }),
        ((o = (function e() {
          function t(n) {
            var r = this;
            if (!(r instanceof t)) return n === E ? e() : new t(n);
            n instanceof t
              ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
              : (function(e, t) {
                  var n, r, i;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!g.test((t += ""))) throw Error(d + "number");
                  (e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                    (n = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                  (r = t.search(/e/i)) > 0
                    ? (n < 0 && (n = r),
                      (n += +t.slice(r + 1)),
                      (t = t.substring(0, r)))
                    : n < 0 && (n = t.length);
                  for (i = t.length, r = 0; r < i && "0" == t.charAt(r); ) ++r;
                  if (r == i) e.c = [(e.e = 0)];
                  else {
                    for (; i > 0 && "0" == t.charAt(--i); );
                    for (e.e = n - r - 1, e.c = [], n = 0; r <= i; )
                      e.c[n++] = +t.charAt(r++);
                  }
                })(r, n),
              (r.constructor = t);
          }
          return (
            (t.prototype = p),
            (t.DP = u),
            (t.RM = s),
            (t.NE = a),
            (t.PE = f),
            (t.version = "5.2.2"),
            t
          );
        })()).default = o.Big = o),
        void 0 ===
          (r = function() {
            return o;
          }.call(t, n, t, e)) || (e.exports = r);
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return c;
      });
    var r = n(3),
      i = n.n(r);
    function o(e) {
      return (e = e.toString())[1] ? e : "0" + e;
    }
    const u = e => {
      var t = new Date();
      return (
        t.setTime(e),
        [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(o).join("-")
      );
    };
    function s() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
    const c = e => new i.a(e).toFixed(3);
    (() => {
      const e = wx.getSystemInfoSync().model,
        t = { "iPhone X": /iPhone X/ };
    })();
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(14);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return u;
      });
    var r = n(0),
      i = n(4),
      o = n(1);
    async function u(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(o.j)()).data.objects;
        if (
          (console.log(`openedLotteries: ${JSON.stringify(e.map(e => e.id))}`),
          e)
        ) {
          let n = (await o.b.get(r.a)).data;
          for (let t in e) {
            let u = e[t],
              c = await Object(o.i)(u.id);
            console.log(`getAttendeesCount: ${c}`);
            Math.round(Date.parse(u.open_date) / 1e3),
              Math.round(new Date() / 1e3);
            if (c >= u.open_people_num) {
              console.log(`开奖 - lottery.id: ${u.id}`);
              let e = o.d.getWithoutData(u.id);
              e.set("status", 3), await e.update();
              let t = n.plans_lottery_package[u.plan_index],
                c = o.f.slice(0, t),
                a = Number(Object(i.c)(u.total_prize / r.b.HONHBAO_RATIO));
              await s(c, u, 1, a);
              let f = n.plans_lucky_package[u.plan_index],
                l = o.e.slice(0, f);
              await s(l, u, 2, u.lucky_num_per);
            } else u.open_people_num;
          }
          t(null, "success");
        } else t(r.c.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    }
    const s = async (e, t, n, u) => {
      let s = [],
        c = new BaaS.Query();
      c.compare("lottery", "=", o.d.getWithoutData(t.id));
      let a = (await o.g
        .setQuery(c)
        .offset(0)
        .limit(1e3)
        .orderBy("-weight")
        .find()).data.objects;
      for (let t = 0; t < e.length; t++) e[t] < a.length && s.push(a[e[t]]);
      let f = s.map(e => e.id);
      if (f.length <= 0) return;
      let l = new BaaS.Query();
      l.in("id", f),
        l.compare("lottery_result", "=", 0),
        l.compare("lottery", "=", o.d.getWithoutData(t.id));
      let d = o.g.getWithoutData(c);
      n === r.b.GET_HONGBAO ? d.set("balance", u) : d.set("lucky_num", u),
        d.set("lottery_result", n);
      let h = (await d.update()).data.operation_result.map(e => e.success.id),
        _ = new BaaS.Query();
      _.in("id", h);
      let p = {
        recipient_type: "user_list",
        user_list: (await o.g
          .setQuery(_)
          .select("user_id")
          .find()).data.objects.map(e => e.user_id),
        template_id: "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
        submission_type: "form_id",
        page: `pages/win_lottery/win_lottery?id=${t.id}`,
        keywords: {
          keyword1: { value: `${t.nickname}发起的抽奖` },
          keyword2: { value: "恭喜你，已经抽中红包" },
          keyword3: { value: `${Object(i.a)(Date.now())}` },
          keyword4: { value: `${t.id}` }
        }
      };
      return BaaS.sendTemplateMessage(p);
    };
  }
]).default;

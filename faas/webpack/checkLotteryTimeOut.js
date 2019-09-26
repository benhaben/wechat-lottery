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
    n((n.s = 17))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return u;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      o = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        ERROR: 83510,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573,
        WITHDRAW: 84648
      },
      i = "5d7917899d8da5229c037105",
      u = {
        LOTTERY_TYPE_PRODUCT: 1,
        LOTTERY_TYPE_MONEY: 0,
        PRODUCT_LOTTERY_PEOPLE_UNIT: 1e4,
        PRODUCT_DEFAULT_OPEN_PEOPLE_NUM: 5e4,
        DEFAULT_OPEN_PEOPLE_NUM: 1e3,
        MONEY_UNIT: 1e3,
        WAIT_APPROVE: 1,
        APPROVED: 2,
        OPENED: 3,
        REJECTED: -1,
        GET_ATTENDEES: 0,
        GET_FUDAI: 2,
        GET_HONGBAO: 1,
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iCf5gwsXZOPr2uG.png",
        LOTTERY_PRIZE_LIST: [
          9900,
          16800,
          33300,
          51800,
          66600,
          86800,
          88800,
          99900
        ],
        LOTTERY_NUM_PEOPLE: [1e3, 1500, 3500, 5e3, 6e3, 8e3, 8e3, 9e3],
        PRIZE_COLORS: [1, 0, 0, 0, 0, 0, 0, 0],
        PLANS: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"],
        PLANS_LUCKY_PACKAGE: [100, 50, 25],
        PLANS_LOTTERY_PACKAGE: [95, 97, 98],
        LUCKY_RATIO_OPEN: 100,
        LUCKY_RATIO_SUCCESS: 1e3,
        LUCKY_RATIO_FUDAI_PACKAGE: 10,
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
    n.d(t, "h", function() {
      return o;
    }),
      n.d(t, "e", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "d", function() {
        return c;
      }),
      n.d(t, "i", function() {
        return s;
      }),
      n.d(t, "b", function() {
        return f;
      }),
      n.d(t, "j", function() {
        return a;
      }),
      n.d(t, "k", function() {
        return l;
      }),
      n.d(t, "l", function() {
        return E;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "g", function() {
        return d;
      }),
      n.d(t, "f", function() {
        return _;
      });
    var r = n(0);
    const o = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      i = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      c = new BaaS.TableObject(r.d.ERROR),
      s = new BaaS.User(),
      f = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD),
      a = new BaaS.TableObject(r.d.WITHDRAW);
    async function l(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", i.getWithoutData(e)), o.setQuery(t).count()
      );
    }
    async function E() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        i
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
    const h = 5074,
      d = [
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
      _ = [
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
    !(function(o) {
      "use strict";
      var i,
        u = 20,
        c = 1,
        s = 1e6,
        f = -7,
        a = 21,
        l = "[big.js] ",
        E = l + "Invalid ",
        h = E + "decimal places",
        d = E + "rounding mode",
        _ = {},
        T = void 0,
        O = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function p(e, t, n, r) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === n) r = o[i] >= 5;
          else if (2 === n)
            r =
              o[i] > 5 ||
              (5 == o[i] && (r || i < 0 || o[i + 1] !== T || 1 & o[i - 1]));
          else if (3 === n) r = r || !!o[0];
          else if (((r = !1), 0 !== n)) throw Error(d);
          if (i < 1)
            (o.length = 1), r ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), r))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (n < 0 || n > 3 || n !== ~~n) throw Error(d);
        return e;
      }
      function g(e, t, n, r) {
        var o,
          i,
          u = e.constructor,
          c = !e.c[0];
        if (n !== T) {
          if (n !== ~~n || n < (3 == t) || n > s)
            throw Error(3 == t ? E + "precision" : h);
          for (
            n = r - (e = new u(e)).e,
              e.c.length > ++r && p(e, n, u.RM),
              2 == t && (r = e.e + n + 1);
            e.c.length < r;

          )
            e.c.push(0);
        }
        if (
          ((o = e.e),
          (n = (i = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && r <= o) || o <= u.NE || o >= u.PE))
        )
          i =
            i.charAt(0) +
            (n > 1 ? "." + i.slice(1) : "") +
            (o < 0 ? "e" : "e+") +
            o;
        else if (o < 0) {
          for (; ++o; ) i = "0" + i;
          i = "0." + i;
        } else if (o > 0)
          if (++o > n) for (o -= n; o--; ) i += "0";
          else o < n && (i = i.slice(0, o) + "." + i.slice(o));
        else n > 1 && (i = i.charAt(0) + "." + i.slice(1));
        return e.s < 0 && (!c || 4 == t) ? "-" + i : i;
      }
      (_.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (_.cmp = function(e) {
          var t,
            n = this,
            r = n.c,
            o = (e = new n.constructor(e)).c,
            i = n.s,
            u = e.s,
            c = n.e,
            s = e.e;
          if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -u : 0;
          if (i != u) return i;
          if (((t = i < 0), c != s)) return (c > s) ^ t ? 1 : -1;
          for (u = (c = r.length) < (s = o.length) ? c : s, i = -1; ++i < u; )
            if (r[i] != o[i]) return (r[i] > o[i]) ^ t ? 1 : -1;
          return c == s ? 0 : (c > s) ^ t ? 1 : -1;
        }),
        (_.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            o = (e = new n(e)).c,
            i = t.s == e.s ? 1 : -1,
            u = n.DP;
          if (u !== ~~u || u < 0 || u > s) throw Error(h);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * i);
          var c,
            f,
            a,
            l,
            E,
            d = o.slice(),
            _ = (c = o.length),
            O = r.length,
            g = r.slice(0, c),
            R = g.length,
            A = e,
            w = (A.c = []),
            L = 0,
            v = u + (A.e = t.e - e.e) + 1;
          for (A.s = i, i = v < 0 ? 0 : v, d.unshift(0); R++ < c; ) g.push(0);
          do {
            for (a = 0; a < 10; a++) {
              if (c != (R = g.length)) l = c > R ? 1 : -1;
              else
                for (E = -1, l = 0; ++E < c; )
                  if (o[E] != g[E]) {
                    l = o[E] > g[E] ? 1 : -1;
                    break;
                  }
              if (!(l < 0)) break;
              for (f = R == c ? o : d; R; ) {
                if (g[--R] < f[R]) {
                  for (E = R; E && !g[--E]; ) g[E] = 9;
                  --g[E], (g[R] += 10);
                }
                g[R] -= f[R];
              }
              for (; !g[0]; ) g.shift();
            }
            (w[L++] = l ? a : ++a),
              g[0] && l ? (g[R] = r[_] || 0) : (g = [r[_]]);
          } while ((_++ < O || g[0] !== T) && i--);
          return (
            w[0] || 1 == L || (w.shift(), A.e--),
            L > v && p(A, u, n.RM, g[0] !== T),
            A
          );
        }),
        (_.eq = function(e) {
          return !this.cmp(e);
        }),
        (_.gt = function(e) {
          return this.cmp(e) > 0;
        }),
        (_.gte = function(e) {
          return this.cmp(e) > -1;
        }),
        (_.lt = function(e) {
          return this.cmp(e) < 0;
        }),
        (_.lte = function(e) {
          return this.cmp(e) < 1;
        }),
        (_.minus = _.sub = function(e) {
          var t,
            n,
            r,
            o,
            i = this,
            u = i.constructor,
            c = i.s,
            s = (e = new u(e)).s;
          if (c != s) return (e.s = -s), i.plus(e);
          var f = i.c.slice(),
            a = i.e,
            l = e.c,
            E = e.e;
          if (!f[0] || !l[0])
            return l[0] ? ((e.s = -s), e) : new u(f[0] ? i : 0);
          if ((c = a - E)) {
            for (
              (o = c < 0) ? ((c = -c), (r = f)) : ((E = a), (r = l)),
                r.reverse(),
                s = c;
              s--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((o = f.length < l.length) ? f : l).length, c = s = 0;
              s < n;
              s++
            )
              if (f[s] != l[s]) {
                o = f[s] < l[s];
                break;
              }
          if (
            (o && ((r = f), (f = l), (l = r), (e.s = -e.s)),
            (s = (n = l.length) - (t = f.length)) > 0)
          )
            for (; s--; ) f[t++] = 0;
          for (s = t; n > c; ) {
            if (f[--n] < l[n]) {
              for (t = n; t && !f[--t]; ) f[t] = 9;
              --f[t], (f[n] += 10);
            }
            f[n] -= l[n];
          }
          for (; 0 === f[--s]; ) f.pop();
          for (; 0 === f[0]; ) f.shift(), --E;
          return f[0] || ((e.s = 1), (f = [(E = 0)])), (e.c = f), (e.e = E), e;
        }),
        (_.mod = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.s,
            i = (e = new r(e)).s;
          if (!e.c[0]) throw Error("[big.js] Division by zero");
          return (
            (n.s = e.s = 1),
            (t = 1 == e.cmp(n)),
            (n.s = o),
            (e.s = i),
            t
              ? new r(n)
              : ((o = r.DP),
                (i = r.RM),
                (r.DP = r.RM = 0),
                (n = n.div(e)),
                (r.DP = o),
                (r.RM = i),
                this.minus(n.times(e)))
          );
        }),
        (_.plus = _.add = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.s,
            i = (e = new r(e)).s;
          if (o != i) return (e.s = -i), n.minus(e);
          var u = n.e,
            c = n.c,
            s = e.e,
            f = e.c;
          if (!c[0] || !f[0]) return f[0] ? e : new r(c[0] ? n : 0 * o);
          if (((c = c.slice()), (o = u - s))) {
            for (
              o > 0 ? ((s = u), (t = f)) : ((o = -o), (t = c)), t.reverse();
              o--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            c.length - f.length < 0 && ((t = f), (f = c), (c = t)),
              o = f.length,
              i = 0;
            o;
            c[o] %= 10
          )
            i = ((c[--o] = c[o] + f[o] + i) / 10) | 0;
          for (i && (c.unshift(i), ++s), o = c.length; 0 === c[--o]; ) c.pop();
          return (e.c = c), (e.e = s), e;
        }),
        (_.pow = function(e) {
          var t = this,
            n = new t.constructor(1),
            r = n,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(E + "exponent");
          for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? n.div(r) : r;
        }),
        (_.round = function(e, t) {
          var n = this.constructor;
          if (e === T) e = 0;
          else if (e !== ~~e || e < -s || e > s) throw Error(h);
          return p(new n(this), e, t === T ? n.RM : t);
        }),
        (_.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            o = r.constructor,
            i = r.s,
            u = r.e,
            c = new o(0.5);
          if (!r.c[0]) return new o(r);
          if (i < 0) throw Error(l + "No square root");
          0 === (i = Math.sqrt(r + "")) || i === 1 / 0
            ? (((t = r.c.join("")).length + u) & 1 || (t += "0"),
              (u = (((u + 1) / 2) | 0) - (u < 0 || 1 & u)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + u
              )))
            : (e = new o(i)),
            (u = e.e + (o.DP += 4));
          do {
            (n = e), (e = c.times(n.plus(r.div(n))));
          } while (n.c.slice(0, u).join("") !== e.c.slice(0, u).join(""));
          return p(e, (o.DP -= 4), o.RM);
        }),
        (_.times = _.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.c,
            i = (e = new r(e)).c,
            u = o.length,
            c = i.length,
            s = n.e,
            f = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new r(0 * e.s);
          for (
            e.e = s + f,
              u < c && ((t = o), (o = i), (i = t), (f = u), (u = c), (c = f)),
              t = new Array((f = u + c));
            f--;

          )
            t[f] = 0;
          for (s = c; s--; ) {
            for (c = 0, f = u + s; f > s; )
              (c = t[f] + i[s] * o[f - s - 1] + c),
                (t[f--] = c % 10),
                (c = (c / 10) | 0);
            t[f] = c;
          }
          for (c ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
          return (e.c = t), e;
        }),
        (_.toExponential = function(e) {
          return g(this, 1, e, e);
        }),
        (_.toFixed = function(e) {
          return g(this, 2, e, this.e + e);
        }),
        (_.toPrecision = function(e) {
          return g(this, 3, e, e - 1);
        }),
        (_.toString = function() {
          return g(this);
        }),
        (_.valueOf = _.toJSON = function() {
          return g(this, 4);
        }),
        ((i = (function e() {
          function t(n) {
            var r = this;
            if (!(r instanceof t)) return n === T ? e() : new t(n);
            n instanceof t
              ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
              : (function(e, t) {
                  var n, r, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!O.test((t += ""))) throw Error(E + "number");
                  (e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                    (n = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                  (r = t.search(/e/i)) > 0
                    ? (n < 0 && (n = r),
                      (n += +t.slice(r + 1)),
                      (t = t.substring(0, r)))
                    : n < 0 && (n = t.length);
                  for (o = t.length, r = 0; r < o && "0" == t.charAt(r); ) ++r;
                  if (r == o) e.c = [(e.e = 0)];
                  else {
                    for (; o > 0 && "0" == t.charAt(--o); );
                    for (e.e = n - r - 1, e.c = [], n = 0; r <= o; )
                      e.c[n++] = +t.charAt(r++);
                  }
                })(r, n),
              (r.constructor = t);
          }
          return (
            (t.prototype = _),
            (t.DP = u),
            (t.RM = c),
            (t.NE = f),
            (t.PE = a),
            (t.version = "5.2.2"),
            t
          );
        })()).default = i.Big = i),
        void 0 ===
          (r = function() {
            return i;
          }.call(t, n, t, e)) || (e.exports = r);
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return i;
      });
    n(3);
    function r(e) {
      return (e = e.toString())[1] ? e : "0" + e;
    }
    const o = e => {
      var t = new Date();
      return (
        t.setTime(e),
        [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(r).join("-")
      );
    };
    function i() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(18);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return u;
      });
    var r = n(0),
      o = n(4),
      i = n(1);
    async function u(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(i.l)()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let n = e[t],
              r = await Object(i.k)(n.id);
            console.log(`getAttendeesCount: ${r}`);
            let u =
              Math.round(Date.parse(n.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (r < n.open_people_num && u <= 0) {
              let e = Object(o.b)();
              console.log(
                `人数不够，时间已经到了，顺延24小时 - lottery.id: ${n.id}, time: ${e}`
              );
              let t = i.e.getWithoutData(n.id);
              t.set("open_date", e);
              await t.update();
            }
          }
          t(null, "success");
        } else t(r.c.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    }
  }
]).default;

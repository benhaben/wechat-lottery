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
    n((n.s = 9))
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
        return c;
      });
    const r = {
        GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED",
        OUT_OF_LUCKY_NUM: "OUT_OF_LUCKY_NUM"
      },
      o = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587,
        BALANCE_LUCKY_RECORD: 83371
      },
      i = "5d7917899d8da5229c037105",
      c = {
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png",
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
      return o;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "i", function() {
        return a;
      }),
      n.d(t, "j", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return h;
      }),
      n.d(t, "e", function() {
        return d;
      });
    var r = n(0);
    const o = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      i = new BaaS.TableObject(r.d.LOTTERY),
      c = new BaaS.TableObject(r.d.CONFIG),
      u = new BaaS.TableObject(r.d.ERROR),
      s = new BaaS.User(),
      f = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function a(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", i.getWithoutData(e)), o.setQuery(t).count()
      );
    }
    async function l() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        i
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
    const h = [
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
      d = [
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
  function(e, t, n) {
    var r;
    !(function(o) {
      "use strict";
      var i,
        c = 20,
        u = 1,
        s = 1e6,
        f = -7,
        a = 21,
        l = "[big.js] ",
        h = l + "Invalid ",
        d = h + "decimal places",
        p = h + "rounding mode",
        E = {},
        _ = void 0,
        O = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function T(e, t, n, r) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === n) r = o[i] >= 5;
          else if (2 === n)
            r =
              o[i] > 5 ||
              (5 == o[i] && (r || i < 0 || o[i + 1] !== _ || 1 & o[i - 1]));
          else if (3 === n) r = r || !!o[0];
          else if (((r = !1), 0 !== n)) throw Error(p);
          if (i < 1)
            (o.length = 1), r ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), r))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (n < 0 || n > 3 || n !== ~~n) throw Error(p);
        return e;
      }
      function g(e, t, n, r) {
        var o,
          i,
          c = e.constructor,
          u = !e.c[0];
        if (n !== _) {
          if (n !== ~~n || n < (3 == t) || n > s)
            throw Error(3 == t ? h + "precision" : d);
          for (
            n = r - (e = new c(e)).e,
              e.c.length > ++r && T(e, n, c.RM),
              2 == t && (r = e.e + n + 1);
            e.c.length < r;

          )
            e.c.push(0);
        }
        if (
          ((o = e.e),
          (n = (i = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && r <= o) || o <= c.NE || o >= c.PE))
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
        return e.s < 0 && (!u || 4 == t) ? "-" + i : i;
      }
      (E.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (E.cmp = function(e) {
          var t,
            n = this,
            r = n.c,
            o = (e = new n.constructor(e)).c,
            i = n.s,
            c = e.s,
            u = n.e,
            s = e.e;
          if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -c : 0;
          if (i != c) return i;
          if (((t = i < 0), u != s)) return (u > s) ^ t ? 1 : -1;
          for (c = (u = r.length) < (s = o.length) ? u : s, i = -1; ++i < c; )
            if (r[i] != o[i]) return (r[i] > o[i]) ^ t ? 1 : -1;
          return u == s ? 0 : (u > s) ^ t ? 1 : -1;
        }),
        (E.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            o = (e = new n(e)).c,
            i = t.s == e.s ? 1 : -1,
            c = n.DP;
          if (c !== ~~c || c < 0 || c > s) throw Error(d);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * i);
          var u,
            f,
            a,
            l,
            h,
            p = o.slice(),
            E = (u = o.length),
            O = r.length,
            g = r.slice(0, u),
            w = g.length,
            v = e,
            R = (v.c = []),
            A = 0,
            L = c + (v.e = t.e - e.e) + 1;
          for (v.s = i, i = L < 0 ? 0 : L, p.unshift(0); w++ < u; ) g.push(0);
          do {
            for (a = 0; a < 10; a++) {
              if (u != (w = g.length)) l = u > w ? 1 : -1;
              else
                for (h = -1, l = 0; ++h < u; )
                  if (o[h] != g[h]) {
                    l = o[h] > g[h] ? 1 : -1;
                    break;
                  }
              if (!(l < 0)) break;
              for (f = w == u ? o : p; w; ) {
                if (g[--w] < f[w]) {
                  for (h = w; h && !g[--h]; ) g[h] = 9;
                  --g[h], (g[w] += 10);
                }
                g[w] -= f[w];
              }
              for (; !g[0]; ) g.shift();
            }
            (R[A++] = l ? a : ++a),
              g[0] && l ? (g[w] = r[E] || 0) : (g = [r[E]]);
          } while ((E++ < O || g[0] !== _) && i--);
          return (
            R[0] || 1 == A || (R.shift(), v.e--),
            A > L && T(v, c, n.RM, g[0] !== _),
            v
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
            n,
            r,
            o,
            i = this,
            c = i.constructor,
            u = i.s,
            s = (e = new c(e)).s;
          if (u != s) return (e.s = -s), i.plus(e);
          var f = i.c.slice(),
            a = i.e,
            l = e.c,
            h = e.e;
          if (!f[0] || !l[0])
            return l[0] ? ((e.s = -s), e) : new c(f[0] ? i : 0);
          if ((u = a - h)) {
            for (
              (o = u < 0) ? ((u = -u), (r = f)) : ((h = a), (r = l)),
                r.reverse(),
                s = u;
              s--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((o = f.length < l.length) ? f : l).length, u = s = 0;
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
          for (s = t; n > u; ) {
            if (f[--n] < l[n]) {
              for (t = n; t && !f[--t]; ) f[t] = 9;
              --f[t], (f[n] += 10);
            }
            f[n] -= l[n];
          }
          for (; 0 === f[--s]; ) f.pop();
          for (; 0 === f[0]; ) f.shift(), --h;
          return f[0] || ((e.s = 1), (f = [(h = 0)])), (e.c = f), (e.e = h), e;
        }),
        (E.mod = function(e) {
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
        (E.plus = E.add = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.s,
            i = (e = new r(e)).s;
          if (o != i) return (e.s = -i), n.minus(e);
          var c = n.e,
            u = n.c,
            s = e.e,
            f = e.c;
          if (!u[0] || !f[0]) return f[0] ? e : new r(u[0] ? n : 0 * o);
          if (((u = u.slice()), (o = c - s))) {
            for (
              o > 0 ? ((s = c), (t = f)) : ((o = -o), (t = u)), t.reverse();
              o--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            u.length - f.length < 0 && ((t = f), (f = u), (u = t)),
              o = f.length,
              i = 0;
            o;
            u[o] %= 10
          )
            i = ((u[--o] = u[o] + f[o] + i) / 10) | 0;
          for (i && (u.unshift(i), ++s), o = u.length; 0 === u[--o]; ) u.pop();
          return (e.c = u), (e.e = s), e;
        }),
        (E.pow = function(e) {
          var t = this,
            n = new t.constructor(1),
            r = n,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(h + "exponent");
          for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? n.div(r) : r;
        }),
        (E.round = function(e, t) {
          var n = this.constructor;
          if (e === _) e = 0;
          else if (e !== ~~e || e < -s || e > s) throw Error(d);
          return T(new n(this), e, t === _ ? n.RM : t);
        }),
        (E.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            o = r.constructor,
            i = r.s,
            c = r.e,
            u = new o(0.5);
          if (!r.c[0]) return new o(r);
          if (i < 0) throw Error(l + "No square root");
          0 === (i = Math.sqrt(r + "")) || i === 1 / 0
            ? (((t = r.c.join("")).length + c) & 1 || (t += "0"),
              (c = (((c + 1) / 2) | 0) - (c < 0 || 1 & c)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + c
              )))
            : (e = new o(i)),
            (c = e.e + (o.DP += 4));
          do {
            (n = e), (e = u.times(n.plus(r.div(n))));
          } while (n.c.slice(0, c).join("") !== e.c.slice(0, c).join(""));
          return T(e, (o.DP -= 4), o.RM);
        }),
        (E.times = E.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.c,
            i = (e = new r(e)).c,
            c = o.length,
            u = i.length,
            s = n.e,
            f = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new r(0 * e.s);
          for (
            e.e = s + f,
              c < u && ((t = o), (o = i), (i = t), (f = c), (c = u), (u = f)),
              t = new Array((f = c + u));
            f--;

          )
            t[f] = 0;
          for (s = u; s--; ) {
            for (u = 0, f = c + s; f > s; )
              (u = t[f] + i[s] * o[f - s - 1] + u),
                (t[f--] = u % 10),
                (u = (u / 10) | 0);
            t[f] = u;
          }
          for (u ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
          return (e.c = t), e;
        }),
        (E.toExponential = function(e) {
          return g(this, 1, e, e);
        }),
        (E.toFixed = function(e) {
          return g(this, 2, e, this.e + e);
        }),
        (E.toPrecision = function(e) {
          return g(this, 3, e, e - 1);
        }),
        (E.toString = function() {
          return g(this);
        }),
        (E.valueOf = E.toJSON = function() {
          return g(this, 4);
        }),
        ((i = (function e() {
          function t(n) {
            var r = this;
            if (!(r instanceof t)) return n === _ ? e() : new t(n);
            n instanceof t
              ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
              : (function(e, t) {
                  var n, r, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!O.test((t += ""))) throw Error(h + "number");
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
            (t.prototype = E),
            (t.DP = c),
            (t.RM = u),
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
      return i;
    }),
      n.d(t, "b", function() {
        return c;
      });
    var r = n(2),
      o = n.n(r);
    function i() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
    const c = e => new o.a(e).toFixed(3);
  },
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(10);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return c;
      });
    var r = n(0),
      o = n(3),
      i = n(1);
    async function c(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(i.j)()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let n = e[t],
              r = await Object(i.i)(n.id);
            console.log(`getAttendeesCount: ${r}`);
            let c =
              Math.round(Date.parse(n.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (r < n.open_people_num && c <= 0) {
              let e = Object(o.a)();
              console.log(
                `人数不够，时间已经到了，顺延24小时 - lottery.id: ${n.id}, time: ${e}`
              );
              let t = i.d.getWithoutData(n.id);
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

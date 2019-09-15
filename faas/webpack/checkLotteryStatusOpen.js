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
    n((n.s = 6))
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
        ERROR: 83510,
        CONFIG: 83587,
        BALANCE_LUCKY_RECORD: 83371
      },
      o = "5d7917899d8da5229c037105",
      u = {
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
      return i;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return c;
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
    const i = new BaaS.TableObject(r.d.USER_LOTTERY_RECORD),
      o = new BaaS.TableObject(r.d.LOTTERY),
      u = new BaaS.TableObject(r.d.CONFIG),
      c = new BaaS.TableObject(r.d.ERROR),
      s = new BaaS.User(),
      f = new BaaS.TableObject(r.d.BALANCE_LUCKY_RECORD);
    async function a(e) {
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
    !(function(i) {
      "use strict";
      var o,
        u = 20,
        c = 1,
        s = 1e6,
        f = -7,
        a = 21,
        l = "[big.js] ",
        h = l + "Invalid ",
        d = h + "decimal places",
        p = h + "rounding mode",
        _ = {},
        E = void 0,
        O = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function g(e, t, n, r) {
        var i = e.c,
          o = e.e + t + 1;
        if (o < i.length) {
          if (1 === n) r = i[o] >= 5;
          else if (2 === n)
            r =
              i[o] > 5 ||
              (5 == i[o] && (r || o < 0 || i[o + 1] !== E || 1 & i[o - 1]));
          else if (3 === n) r = r || !!i[0];
          else if (((r = !1), 0 !== n)) throw Error(p);
          if (o < 1)
            (i.length = 1), r ? ((e.e = -t), (i[0] = 1)) : (i[0] = e.e = 0);
          else {
            if (((i.length = o--), r))
              for (; ++i[o] > 9; ) (i[o] = 0), o-- || (++e.e, i.unshift(1));
            for (o = i.length; !i[--o]; ) i.pop();
          }
        } else if (n < 0 || n > 3 || n !== ~~n) throw Error(p);
        return e;
      }
      function T(e, t, n, r) {
        var i,
          o,
          u = e.constructor,
          c = !e.c[0];
        if (n !== E) {
          if (n !== ~~n || n < (3 == t) || n > s)
            throw Error(3 == t ? h + "precision" : d);
          for (
            n = r - (e = new u(e)).e,
              e.c.length > ++r && g(e, n, u.RM),
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
        return e.s < 0 && (!c || 4 == t) ? "-" + o : o;
      }
      (_.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (_.cmp = function(e) {
          var t,
            n = this,
            r = n.c,
            i = (e = new n.constructor(e)).c,
            o = n.s,
            u = e.s,
            c = n.e,
            s = e.e;
          if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -u : 0;
          if (o != u) return o;
          if (((t = o < 0), c != s)) return (c > s) ^ t ? 1 : -1;
          for (u = (c = r.length) < (s = i.length) ? c : s, o = -1; ++o < u; )
            if (r[o] != i[o]) return (r[o] > i[o]) ^ t ? 1 : -1;
          return c == s ? 0 : (c > s) ^ t ? 1 : -1;
        }),
        (_.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            i = (e = new n(e)).c,
            o = t.s == e.s ? 1 : -1,
            u = n.DP;
          if (u !== ~~u || u < 0 || u > s) throw Error(d);
          if (!i[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * o);
          var c,
            f,
            a,
            l,
            h,
            p = i.slice(),
            _ = (c = i.length),
            O = r.length,
            T = r.slice(0, c),
            w = T.length,
            b = e,
            R = (b.c = []),
            v = 0,
            m = u + (b.e = t.e - e.e) + 1;
          for (b.s = o, o = m < 0 ? 0 : m, p.unshift(0); w++ < c; ) T.push(0);
          do {
            for (a = 0; a < 10; a++) {
              if (c != (w = T.length)) l = c > w ? 1 : -1;
              else
                for (h = -1, l = 0; ++h < c; )
                  if (i[h] != T[h]) {
                    l = i[h] > T[h] ? 1 : -1;
                    break;
                  }
              if (!(l < 0)) break;
              for (f = w == c ? i : p; w; ) {
                if (T[--w] < f[w]) {
                  for (h = w; h && !T[--h]; ) T[h] = 9;
                  --T[h], (T[w] += 10);
                }
                T[w] -= f[w];
              }
              for (; !T[0]; ) T.shift();
            }
            (R[v++] = l ? a : ++a),
              T[0] && l ? (T[w] = r[_] || 0) : (T = [r[_]]);
          } while ((_++ < O || T[0] !== E) && o--);
          return (
            R[0] || 1 == v || (R.shift(), b.e--),
            v > m && g(b, u, n.RM, T[0] !== E),
            b
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
            i,
            o = this,
            u = o.constructor,
            c = o.s,
            s = (e = new u(e)).s;
          if (c != s) return (e.s = -s), o.plus(e);
          var f = o.c.slice(),
            a = o.e,
            l = e.c,
            h = e.e;
          if (!f[0] || !l[0])
            return l[0] ? ((e.s = -s), e) : new u(f[0] ? o : 0);
          if ((c = a - h)) {
            for (
              (i = c < 0) ? ((c = -c), (r = f)) : ((h = a), (r = l)),
                r.reverse(),
                s = c;
              s--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((i = f.length < l.length) ? f : l).length, c = s = 0;
              s < n;
              s++
            )
              if (f[s] != l[s]) {
                i = f[s] < l[s];
                break;
              }
          if (
            (i && ((r = f), (f = l), (l = r), (e.s = -e.s)),
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
          for (; 0 === f[0]; ) f.shift(), --h;
          return f[0] || ((e.s = 1), (f = [(h = 0)])), (e.c = f), (e.e = h), e;
        }),
        (_.mod = function(e) {
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
        (_.plus = _.add = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
          if (i != o) return (e.s = -o), n.minus(e);
          var u = n.e,
            c = n.c,
            s = e.e,
            f = e.c;
          if (!c[0] || !f[0]) return f[0] ? e : new r(c[0] ? n : 0 * i);
          if (((c = c.slice()), (i = u - s))) {
            for (
              i > 0 ? ((s = u), (t = f)) : ((i = -i), (t = c)), t.reverse();
              i--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            c.length - f.length < 0 && ((t = f), (f = c), (c = t)),
              i = f.length,
              o = 0;
            i;
            c[i] %= 10
          )
            o = ((c[--i] = c[i] + f[i] + o) / 10) | 0;
          for (o && (c.unshift(o), ++s), i = c.length; 0 === c[--i]; ) c.pop();
          return (e.c = c), (e.e = s), e;
        }),
        (_.pow = function(e) {
          var t = this,
            n = new t.constructor(1),
            r = n,
            i = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(h + "exponent");
          for (i && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return i ? n.div(r) : r;
        }),
        (_.round = function(e, t) {
          var n = this.constructor;
          if (e === E) e = 0;
          else if (e !== ~~e || e < -s || e > s) throw Error(d);
          return g(new n(this), e, t === E ? n.RM : t);
        }),
        (_.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            i = r.constructor,
            o = r.s,
            u = r.e,
            c = new i(0.5);
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
            (n = e), (e = c.times(n.plus(r.div(n))));
          } while (n.c.slice(0, u).join("") !== e.c.slice(0, u).join(""));
          return g(e, (i.DP -= 4), i.RM);
        }),
        (_.times = _.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.c,
            o = (e = new r(e)).c,
            u = i.length,
            c = o.length,
            s = n.e,
            f = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !i[0] || !o[0]))
            return new r(0 * e.s);
          for (
            e.e = s + f,
              u < c && ((t = i), (i = o), (o = t), (f = u), (u = c), (c = f)),
              t = new Array((f = u + c));
            f--;

          )
            t[f] = 0;
          for (s = c; s--; ) {
            for (c = 0, f = u + s; f > s; )
              (c = t[f] + o[s] * i[f - s - 1] + c),
                (t[f--] = c % 10),
                (c = (c / 10) | 0);
            t[f] = c;
          }
          for (c ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
          return (e.c = t), e;
        }),
        (_.toExponential = function(e) {
          return T(this, 1, e, e);
        }),
        (_.toFixed = function(e) {
          return T(this, 2, e, this.e + e);
        }),
        (_.toPrecision = function(e) {
          return T(this, 3, e, e - 1);
        }),
        (_.toString = function() {
          return T(this);
        }),
        (_.valueOf = _.toJSON = function() {
          return T(this, 4);
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
                  else if (!O.test((t += ""))) throw Error(h + "number");
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
            (t.prototype = _),
            (t.DP = u),
            (t.RM = c),
            (t.NE = f),
            (t.PE = a),
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
      return o;
    }),
      n.d(t, "b", function() {
        return u;
      });
    var r = n(2),
      i = n.n(r);
    function o() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
    const u = e => new i.a(e).toFixed(3);
  },
  ,
  ,
  function(e, t, n) {
    e.exports = n(7);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return u;
      });
    var r = n(0),
      i = n(3),
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
              s = await Object(o.i)(u.id);
            console.log(`getAttendeesCount: ${s}`);
            Math.round(Date.parse(u.open_date) / 1e3),
              Math.round(new Date() / 1e3);
            if (s >= u.open_people_num) {
              console.log(`开奖 - lottery.id: ${u.id}`);
              let e = o.d.getWithoutData(u.id);
              e.set("status", 3), e.update();
              let t = n.plans_lottery_package[u.plan_index],
                s = o.f.slice(0, t),
                f = Number(Object(i.b)(u.total_prize / r.b.HONHBAO_RATIO));
              await c(s, u.id, 1, f);
              let a = n.plans_lucky_package[u.plan_index],
                l = o.e.slice(0, a);
              await c(l, u.id, 2, u.lucky_num_per);
            } else u.open_people_num;
          }
          t(null, "success");
        } else t(r.c.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    }
    const c = async (e, t, n, r) => {
      let i = (await Promise.all(
          e.map(e => {
            let n = new BaaS.Query();
            return (
              n.compare("lottery", "=", o.d.getWithoutData(t)),
              o.g
                .setQuery(n)
                .offset(e)
                .limit(1)
                .orderBy("-weight")
                .find()
            );
          })
        ))
          .map(e => (e.data.objects.length ? e.data.objects[0].id : null))
          .filter(e => e),
        u = new BaaS.Query();
      u.in("id", i),
        u.compare("lottery_result", "=", 0),
        u.compare("lottery", "=", o.d.getWithoutData(t));
      let c = o.g.getWithoutData(u);
      return (
        1 === n ? c.set("balance", r) : c.set("lucky_num", r),
        c.set("lottery_result", n),
        c.update()
      );
    };
  }
]).default;

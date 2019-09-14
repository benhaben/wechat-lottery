exports.main = (function(e) {
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
    r((r.s = 7))
  );
})([
  function(e, t, r) {
    "use strict";
    r.d(t, "c", function() {
      return n;
    }),
      r.d(t, "d", function() {
        return o;
      }),
      r.d(t, "a", function() {
        return i;
      }),
      r.d(t, "b", function() {
        return c;
      });
    const n = {
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
    "use strict";
    r.d(t, "e", function() {
      return o;
    }),
      r.d(t, "d", function() {
        return i;
      }),
      r.d(t, "b", function() {
        return c;
      }),
      r.d(t, "c", function() {
        return s;
      }),
      r.d(t, "f", function() {
        return u;
      }),
      r.d(t, "a", function() {
        return f;
      }),
      r.d(t, "g", function() {
        return l;
      }),
      r.d(t, "h", function() {
        return a;
      });
    var n = r(0);
    const o = new BaaS.TableObject(n.d.USER_LOTTERY_RECORD),
      i = new BaaS.TableObject(n.d.LOTTERY),
      c = new BaaS.TableObject(n.d.CONFIG),
      s = new BaaS.TableObject(n.d.ERROR),
      u = new BaaS.User(),
      f = new BaaS.TableObject(n.d.BALANCE_LUCKY_RECORD);
    async function l(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", i.getWithoutData(e)), o.setQuery(t).count()
      );
    }
    async function a() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        i
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
  },
  function(e, t, r) {
    var n;
    !(function(o) {
      "use strict";
      var i,
        c = 20,
        s = 1,
        u = 1e6,
        f = -7,
        l = 21,
        a = "[big.js] ",
        h = a + "Invalid ",
        d = h + "decimal places",
        p = h + "rounding mode",
        _ = {},
        E = void 0,
        g = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function O(e, t, r, n) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === r) n = o[i] >= 5;
          else if (2 === r)
            n =
              o[i] > 5 ||
              (5 == o[i] && (n || i < 0 || o[i + 1] !== E || 1 & o[i - 1]));
          else if (3 === r) n = n || !!o[0];
          else if (((n = !1), 0 !== r)) throw Error(p);
          if (i < 1)
            (o.length = 1), n ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), n))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (r < 0 || r > 3 || r !== ~~r) throw Error(p);
        return e;
      }
      function T(e, t, r, n) {
        var o,
          i,
          c = e.constructor,
          s = !e.c[0];
        if (r !== E) {
          if (r !== ~~r || r < (3 == t) || r > u)
            throw Error(3 == t ? h + "precision" : d);
          for (
            r = n - (e = new c(e)).e,
              e.c.length > ++n && O(e, r, c.RM),
              2 == t && (n = e.e + r + 1);
            e.c.length < n;

          )
            e.c.push(0);
        }
        if (
          ((o = e.e),
          (r = (i = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && n <= o) || o <= c.NE || o >= c.PE))
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
        return e.s < 0 && (!s || 4 == t) ? "-" + i : i;
      }
      (_.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (_.cmp = function(e) {
          var t,
            r = this,
            n = r.c,
            o = (e = new r.constructor(e)).c,
            i = r.s,
            c = e.s,
            s = r.e,
            u = e.e;
          if (!n[0] || !o[0]) return n[0] ? i : o[0] ? -c : 0;
          if (i != c) return i;
          if (((t = i < 0), s != u)) return (s > u) ^ t ? 1 : -1;
          for (c = (s = n.length) < (u = o.length) ? s : u, i = -1; ++i < c; )
            if (n[i] != o[i]) return (n[i] > o[i]) ^ t ? 1 : -1;
          return s == u ? 0 : (s > u) ^ t ? 1 : -1;
        }),
        (_.div = function(e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            o = (e = new r(e)).c,
            i = t.s == e.s ? 1 : -1,
            c = r.DP;
          if (c !== ~~c || c < 0 || c > u) throw Error(d);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * i);
          var s,
            f,
            l,
            a,
            h,
            p = o.slice(),
            _ = (s = o.length),
            g = n.length,
            T = n.slice(0, s),
            w = T.length,
            v = e,
            R = (v.c = []),
            L = 0,
            b = c + (v.e = t.e - e.e) + 1;
          for (v.s = i, i = b < 0 ? 0 : b, p.unshift(0); w++ < s; ) T.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (s != (w = T.length)) a = s > w ? 1 : -1;
              else
                for (h = -1, a = 0; ++h < s; )
                  if (o[h] != T[h]) {
                    a = o[h] > T[h] ? 1 : -1;
                    break;
                  }
              if (!(a < 0)) break;
              for (f = w == s ? o : p; w; ) {
                if (T[--w] < f[w]) {
                  for (h = w; h && !T[--h]; ) T[h] = 9;
                  --T[h], (T[w] += 10);
                }
                T[w] -= f[w];
              }
              for (; !T[0]; ) T.shift();
            }
            (R[L++] = a ? l : ++l),
              T[0] && a ? (T[w] = n[_] || 0) : (T = [n[_]]);
          } while ((_++ < g || T[0] !== E) && i--);
          return (
            R[0] || 1 == L || (R.shift(), v.e--),
            L > b && O(v, c, r.RM, T[0] !== E),
            v
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
            r,
            n,
            o,
            i = this,
            c = i.constructor,
            s = i.s,
            u = (e = new c(e)).s;
          if (s != u) return (e.s = -u), i.plus(e);
          var f = i.c.slice(),
            l = i.e,
            a = e.c,
            h = e.e;
          if (!f[0] || !a[0])
            return a[0] ? ((e.s = -u), e) : new c(f[0] ? i : 0);
          if ((s = l - h)) {
            for (
              (o = s < 0) ? ((s = -s), (n = f)) : ((h = l), (n = a)),
                n.reverse(),
                u = s;
              u--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((o = f.length < a.length) ? f : a).length, s = u = 0;
              u < r;
              u++
            )
              if (f[u] != a[u]) {
                o = f[u] < a[u];
                break;
              }
          if (
            (o && ((n = f), (f = a), (a = n), (e.s = -e.s)),
            (u = (r = a.length) - (t = f.length)) > 0)
          )
            for (; u--; ) f[t++] = 0;
          for (u = t; r > s; ) {
            if (f[--r] < a[r]) {
              for (t = r; t && !f[--t]; ) f[t] = 9;
              --f[t], (f[r] += 10);
            }
            f[r] -= a[r];
          }
          for (; 0 === f[--u]; ) f.pop();
          for (; 0 === f[0]; ) f.shift(), --h;
          return f[0] || ((e.s = 1), (f = [(h = 0)])), (e.c = f), (e.e = h), e;
        }),
        (_.mod = function(e) {
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
        (_.plus = _.add = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (o != i) return (e.s = -i), r.minus(e);
          var c = r.e,
            s = r.c,
            u = e.e,
            f = e.c;
          if (!s[0] || !f[0]) return f[0] ? e : new n(s[0] ? r : 0 * o);
          if (((s = s.slice()), (o = c - u))) {
            for (
              o > 0 ? ((u = c), (t = f)) : ((o = -o), (t = s)), t.reverse();
              o--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            s.length - f.length < 0 && ((t = f), (f = s), (s = t)),
              o = f.length,
              i = 0;
            o;
            s[o] %= 10
          )
            i = ((s[--o] = s[o] + f[o] + i) / 10) | 0;
          for (i && (s.unshift(i), ++u), o = s.length; 0 === s[--o]; ) s.pop();
          return (e.c = s), (e.e = u), e;
        }),
        (_.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(h + "exponent");
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (_.round = function(e, t) {
          var r = this.constructor;
          if (e === E) e = 0;
          else if (e !== ~~e || e < -u || e > u) throw Error(d);
          return O(new r(this), e, t === E ? r.RM : t);
        }),
        (_.sqrt = function() {
          var e,
            t,
            r,
            n = this,
            o = n.constructor,
            i = n.s,
            c = n.e,
            s = new o(0.5);
          if (!n.c[0]) return new o(n);
          if (i < 0) throw Error(a + "No square root");
          0 === (i = Math.sqrt(n + "")) || i === 1 / 0
            ? (((t = n.c.join("")).length + c) & 1 || (t += "0"),
              (c = (((c + 1) / 2) | 0) - (c < 0 || 1 & c)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + c
              )))
            : (e = new o(i)),
            (c = e.e + (o.DP += 4));
          do {
            (r = e), (e = s.times(r.plus(n.div(r))));
          } while (r.c.slice(0, c).join("") !== e.c.slice(0, c).join(""));
          return O(e, (o.DP -= 4), o.RM);
        }),
        (_.times = _.mul = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.c,
            i = (e = new n(e)).c,
            c = o.length,
            s = i.length,
            u = r.e,
            f = e.e;
          if (((e.s = r.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new n(0 * e.s);
          for (
            e.e = u + f,
              c < s && ((t = o), (o = i), (i = t), (f = c), (c = s), (s = f)),
              t = new Array((f = c + s));
            f--;

          )
            t[f] = 0;
          for (u = s; u--; ) {
            for (s = 0, f = c + u; f > u; )
              (s = t[f] + i[u] * o[f - u - 1] + s),
                (t[f--] = s % 10),
                (s = (s / 10) | 0);
            t[f] = s;
          }
          for (s ? ++e.e : t.shift(), u = t.length; !t[--u]; ) t.pop();
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
        ((i = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === E ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!g.test((t += ""))) throw Error(h + "number");
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
            (t.prototype = _),
            (t.DP = c),
            (t.RM = s),
            (t.NE = f),
            (t.PE = l),
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
  ,
  ,
  ,
  ,
  function(e, t, r) {
    e.exports = r(14);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0);
    r(2);
    var o = r(1);
    async function i(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(o.h)()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let n = e[t],
              i = await Object(o.g)(n.id);
            console.log(`getAttendeesCount: ${i}`);
            let c =
              Math.round(Date.parse(n.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (i < n.open_people_num && c <= 0) {
              let e =
                ((r = void 0),
                (r = Date.parse(new Date())),
                (r /= 1e3),
                new Date(1e3 * (r + 86400)).toISOString());
              console.log(
                `人数不够，时间已经到了，顺延24小时 - lottery.id: ${n.id}, time: ${e}`
              );
              let t = o.d.getWithoutData(n.id);
              t.set("open_date", e);
              await t.update();
            }
          }
          t(null, "success");
        } else t(n.c.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
      var r;
    }
    r.d(t, "default", function() {
      return i;
    });
  }
]).default;

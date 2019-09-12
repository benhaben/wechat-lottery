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
    r((r.s = 9))
  );
})({
  0: function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return n;
    }),
      r.d(t, "b", function() {
        return o;
      });
    const n = { GET_LOTTERY_FAILED: "GET_LOTTERY_FAILED" },
      o = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        ERROR: 83510,
        CONFIG: 83587
      };
  },
  1: function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return o;
    }),
      r.d(t, "e", function() {
        return i;
      }),
      r.d(t, "d", function() {
        return s;
      }),
      r.d(t, "b", function() {
        return c;
      }),
      r.d(t, "c", function() {
        return u;
      }),
      r.d(t, "f", function() {
        return f;
      }),
      r.d(t, "g", function() {
        return l;
      });
    var n = r(0);
    const o = "5d7917899d8da5229c037105",
      i = new BaaS.TableObject(n.b.USER_LOTTERY_RECORD),
      s = new BaaS.TableObject(n.b.LOTTERY),
      c = new BaaS.TableObject(n.b.CONFIG),
      u = new BaaS.TableObject(n.b.ERROR);
    async function f(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", s.getWithoutData(e)), i.setQuery(t).count()
      );
    }
    async function l() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", 2),
        s
          .setQuery(e)
          .limit(10)
          .find()
      );
    }
  },
  16: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0);
    r(2);
    var o = r(1);
    async function i(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`);
      try {
        let e = (await Object(o.g)()).data.objects;
        if ((console.log(`openedLotteries: ${JSON.stringify(e)}`), e)) {
          for (let t in e) {
            console.log(`openedLotteries[lotteryIndex] - ${e[t]}`);
            let n = e[t],
              i = await Object(o.f)(n.id);
            console.log(`getAttendeesCount: ${i}`);
            let s =
              Math.round(Date.parse(n.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (i < n.open_people_num && s <= 0) {
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
        } else t(n.a.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
      var r;
    }
    r.d(t, "default", function() {
      return i;
    });
  },
  2: function(e, t, r) {
    var n;
    !(function(o) {
      "use strict";
      var i,
        s = 20,
        c = 1,
        u = 1e6,
        f = -7,
        l = 21,
        a = "[big.js] ",
        h = a + "Invalid ",
        d = h + "decimal places",
        p = h + "rounding mode",
        g = {},
        v = void 0,
        w = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function b(e, t, r, n) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === r) n = o[i] >= 5;
          else if (2 === r)
            n =
              o[i] > 5 ||
              (5 == o[i] && (n || i < 0 || o[i + 1] !== v || 1 & o[i - 1]));
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
      function E(e, t, r, n) {
        var o,
          i,
          s = e.constructor,
          c = !e.c[0];
        if (r !== v) {
          if (r !== ~~r || r < (3 == t) || r > u)
            throw Error(3 == t ? h + "precision" : d);
          for (
            r = n - (e = new s(e)).e,
              e.c.length > ++n && b(e, r, s.RM),
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
        return e.s < 0 && (!c || 4 == t) ? "-" + i : i;
      }
      (g.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (g.cmp = function(e) {
          var t,
            r = this,
            n = r.c,
            o = (e = new r.constructor(e)).c,
            i = r.s,
            s = e.s,
            c = r.e,
            u = e.e;
          if (!n[0] || !o[0]) return n[0] ? i : o[0] ? -s : 0;
          if (i != s) return i;
          if (((t = i < 0), c != u)) return (c > u) ^ t ? 1 : -1;
          for (s = (c = n.length) < (u = o.length) ? c : u, i = -1; ++i < s; )
            if (n[i] != o[i]) return (n[i] > o[i]) ^ t ? 1 : -1;
          return c == u ? 0 : (c > u) ^ t ? 1 : -1;
        }),
        (g.div = function(e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            o = (e = new r(e)).c,
            i = t.s == e.s ? 1 : -1,
            s = r.DP;
          if (s !== ~~s || s < 0 || s > u) throw Error(d);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * i);
          var c,
            f,
            l,
            a,
            h,
            p = o.slice(),
            g = (c = o.length),
            w = n.length,
            E = n.slice(0, c),
            m = E.length,
            O = e,
            y = (O.c = []),
            R = 0,
            T = s + (O.e = t.e - e.e) + 1;
          for (O.s = i, i = T < 0 ? 0 : T, p.unshift(0); m++ < c; ) E.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (c != (m = E.length)) a = c > m ? 1 : -1;
              else
                for (h = -1, a = 0; ++h < c; )
                  if (o[h] != E[h]) {
                    a = o[h] > E[h] ? 1 : -1;
                    break;
                  }
              if (!(a < 0)) break;
              for (f = m == c ? o : p; m; ) {
                if (E[--m] < f[m]) {
                  for (h = m; h && !E[--h]; ) E[h] = 9;
                  --E[h], (E[m] += 10);
                }
                E[m] -= f[m];
              }
              for (; !E[0]; ) E.shift();
            }
            (y[R++] = a ? l : ++l),
              E[0] && a ? (E[m] = n[g] || 0) : (E = [n[g]]);
          } while ((g++ < w || E[0] !== v) && i--);
          return (
            y[0] || 1 == R || (y.shift(), O.e--),
            R > T && b(O, s, r.RM, E[0] !== v),
            O
          );
        }),
        (g.eq = function(e) {
          return !this.cmp(e);
        }),
        (g.gt = function(e) {
          return this.cmp(e) > 0;
        }),
        (g.gte = function(e) {
          return this.cmp(e) > -1;
        }),
        (g.lt = function(e) {
          return this.cmp(e) < 0;
        }),
        (g.lte = function(e) {
          return this.cmp(e) < 1;
        }),
        (g.minus = g.sub = function(e) {
          var t,
            r,
            n,
            o,
            i = this,
            s = i.constructor,
            c = i.s,
            u = (e = new s(e)).s;
          if (c != u) return (e.s = -u), i.plus(e);
          var f = i.c.slice(),
            l = i.e,
            a = e.c,
            h = e.e;
          if (!f[0] || !a[0])
            return a[0] ? ((e.s = -u), e) : new s(f[0] ? i : 0);
          if ((c = l - h)) {
            for (
              (o = c < 0) ? ((c = -c), (n = f)) : ((h = l), (n = a)),
                n.reverse(),
                u = c;
              u--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((o = f.length < a.length) ? f : a).length, c = u = 0;
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
          for (u = t; r > c; ) {
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
        (g.mod = function(e) {
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
        (g.plus = g.add = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (o != i) return (e.s = -i), r.minus(e);
          var s = r.e,
            c = r.c,
            u = e.e,
            f = e.c;
          if (!c[0] || !f[0]) return f[0] ? e : new n(c[0] ? r : 0 * o);
          if (((c = c.slice()), (o = s - u))) {
            for (
              o > 0 ? ((u = s), (t = f)) : ((o = -o), (t = c)), t.reverse();
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
          for (i && (c.unshift(i), ++u), o = c.length; 0 === c[--o]; ) c.pop();
          return (e.c = c), (e.e = u), e;
        }),
        (g.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(h + "exponent");
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (g.round = function(e, t) {
          var r = this.constructor;
          if (e === v) e = 0;
          else if (e !== ~~e || e < -u || e > u) throw Error(d);
          return b(new r(this), e, t === v ? r.RM : t);
        }),
        (g.sqrt = function() {
          var e,
            t,
            r,
            n = this,
            o = n.constructor,
            i = n.s,
            s = n.e,
            c = new o(0.5);
          if (!n.c[0]) return new o(n);
          if (i < 0) throw Error(a + "No square root");
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
            (r = e), (e = c.times(r.plus(n.div(r))));
          } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return b(e, (o.DP -= 4), o.RM);
        }),
        (g.times = g.mul = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.c,
            i = (e = new n(e)).c,
            s = o.length,
            c = i.length,
            u = r.e,
            f = e.e;
          if (((e.s = r.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new n(0 * e.s);
          for (
            e.e = u + f,
              s < c && ((t = o), (o = i), (i = t), (f = s), (s = c), (c = f)),
              t = new Array((f = s + c));
            f--;

          )
            t[f] = 0;
          for (u = c; u--; ) {
            for (c = 0, f = s + u; f > u; )
              (c = t[f] + i[u] * o[f - u - 1] + c),
                (t[f--] = c % 10),
                (c = (c / 10) | 0);
            t[f] = c;
          }
          for (c ? ++e.e : t.shift(), u = t.length; !t[--u]; ) t.pop();
          return (e.c = t), e;
        }),
        (g.toExponential = function(e) {
          return E(this, 1, e, e);
        }),
        (g.toFixed = function(e) {
          return E(this, 2, e, this.e + e);
        }),
        (g.toPrecision = function(e) {
          return E(this, 3, e, e - 1);
        }),
        (g.toString = function() {
          return E(this);
        }),
        (g.valueOf = g.toJSON = function() {
          return E(this, 4);
        }),
        ((i = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === v ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!w.test((t += ""))) throw Error(h + "number");
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
            (t.prototype = g),
            (t.DP = s),
            (t.RM = c),
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
  9: function(e, t, r) {
    e.exports = r(16);
  }
}).default;

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
    r((r.s = 1))
  );
})([
  function(e, t, r) {
    var n;
    !(function(o) {
      "use strict";
      var i,
        s = 20,
        u = 1,
        c = 1e6,
        f = -7,
        l = 21,
        a = "[big.js] ",
        h = a + "Invalid ",
        p = h + "decimal places",
        g = h + "rounding mode",
        d = {},
        m = void 0,
        v = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function w(e, t, r, n) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === r) n = o[i] >= 5;
          else if (2 === r)
            n =
              o[i] > 5 ||
              (5 == o[i] && (n || i < 0 || o[i + 1] !== m || 1 & o[i - 1]));
          else if (3 === r) n = n || !!o[0];
          else if (((n = !1), 0 !== r)) throw Error(g);
          if (i < 1)
            (o.length = 1), n ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), n))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (r < 0 || r > 3 || r !== ~~r) throw Error(g);
        return e;
      }
      function b(e, t, r, n) {
        var o,
          i,
          s = e.constructor,
          u = !e.c[0];
        if (r !== m) {
          if (r !== ~~r || r < (3 == t) || r > c)
            throw Error(3 == t ? h + "precision" : p);
          for (
            r = n - (e = new s(e)).e,
              e.c.length > ++n && w(e, r, s.RM),
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
      (d.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (d.cmp = function(e) {
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
        (d.div = function(e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            o = (e = new r(e)).c,
            i = t.s == e.s ? 1 : -1,
            s = r.DP;
          if (s !== ~~s || s < 0 || s > c) throw Error(p);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * i);
          var u,
            f,
            l,
            a,
            h,
            g = o.slice(),
            d = (u = o.length),
            v = n.length,
            b = n.slice(0, u),
            D = b.length,
            M = e,
            E = (M.c = []),
            y = 0,
            O = s + (M.e = t.e - e.e) + 1;
          for (M.s = i, i = O < 0 ? 0 : O, g.unshift(0); D++ < u; ) b.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (u != (D = b.length)) a = u > D ? 1 : -1;
              else
                for (h = -1, a = 0; ++h < u; )
                  if (o[h] != b[h]) {
                    a = o[h] > b[h] ? 1 : -1;
                    break;
                  }
              if (!(a < 0)) break;
              for (f = D == u ? o : g; D; ) {
                if (b[--D] < f[D]) {
                  for (h = D; h && !b[--h]; ) b[h] = 9;
                  --b[h], (b[D] += 10);
                }
                b[D] -= f[D];
              }
              for (; !b[0]; ) b.shift();
            }
            (E[y++] = a ? l : ++l),
              b[0] && a ? (b[D] = n[d] || 0) : (b = [n[d]]);
          } while ((d++ < v || b[0] !== m) && i--);
          return (
            E[0] || 1 == y || (E.shift(), M.e--),
            y > O && w(M, s, r.RM, b[0] !== m),
            M
          );
        }),
        (d.eq = function(e) {
          return !this.cmp(e);
        }),
        (d.gt = function(e) {
          return this.cmp(e) > 0;
        }),
        (d.gte = function(e) {
          return this.cmp(e) > -1;
        }),
        (d.lt = function(e) {
          return this.cmp(e) < 0;
        }),
        (d.lte = function(e) {
          return this.cmp(e) < 1;
        }),
        (d.minus = d.sub = function(e) {
          var t,
            r,
            n,
            o,
            i = this,
            s = i.constructor,
            u = i.s,
            c = (e = new s(e)).s;
          if (u != c) return (e.s = -c), i.plus(e);
          var f = i.c.slice(),
            l = i.e,
            a = e.c,
            h = e.e;
          if (!f[0] || !a[0])
            return a[0] ? ((e.s = -c), e) : new s(f[0] ? i : 0);
          if ((u = l - h)) {
            for (
              (o = u < 0) ? ((u = -u), (n = f)) : ((h = l), (n = a)),
                n.reverse(),
                c = u;
              c--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((o = f.length < a.length) ? f : a).length, u = c = 0;
              c < r;
              c++
            )
              if (f[c] != a[c]) {
                o = f[c] < a[c];
                break;
              }
          if (
            (o && ((n = f), (f = a), (a = n), (e.s = -e.s)),
            (c = (r = a.length) - (t = f.length)) > 0)
          )
            for (; c--; ) f[t++] = 0;
          for (c = t; r > u; ) {
            if (f[--r] < a[r]) {
              for (t = r; t && !f[--t]; ) f[t] = 9;
              --f[t], (f[r] += 10);
            }
            f[r] -= a[r];
          }
          for (; 0 === f[--c]; ) f.pop();
          for (; 0 === f[0]; ) f.shift(), --h;
          return f[0] || ((e.s = 1), (f = [(h = 0)])), (e.c = f), (e.e = h), e;
        }),
        (d.mod = function(e) {
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
        (d.plus = d.add = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (o != i) return (e.s = -i), r.minus(e);
          var s = r.e,
            u = r.c,
            c = e.e,
            f = e.c;
          if (!u[0] || !f[0]) return f[0] ? e : new n(u[0] ? r : 0 * o);
          if (((u = u.slice()), (o = s - c))) {
            for (
              o > 0 ? ((c = s), (t = f)) : ((o = -o), (t = u)), t.reverse();
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
          for (i && (u.unshift(i), ++c), o = u.length; 0 === u[--o]; ) u.pop();
          return (e.c = u), (e.e = c), e;
        }),
        (d.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(h + "exponent");
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (d.round = function(e, t) {
          var r = this.constructor;
          if (e === m) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(p);
          return w(new r(this), e, t === m ? r.RM : t);
        }),
        (d.sqrt = function() {
          var e,
            t,
            r,
            n = this,
            o = n.constructor,
            i = n.s,
            s = n.e,
            u = new o(0.5);
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
            (r = e), (e = u.times(r.plus(n.div(r))));
          } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return w(e, (o.DP -= 4), o.RM);
        }),
        (d.times = d.mul = function(e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.c,
            i = (e = new n(e)).c,
            s = o.length,
            u = i.length,
            c = r.e,
            f = e.e;
          if (((e.s = r.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new n(0 * e.s);
          for (
            e.e = c + f,
              s < u && ((t = o), (o = i), (i = t), (f = s), (s = u), (u = f)),
              t = new Array((f = s + u));
            f--;

          )
            t[f] = 0;
          for (c = u; c--; ) {
            for (u = 0, f = s + c; f > c; )
              (u = t[f] + i[c] * o[f - c - 1] + u),
                (t[f--] = u % 10),
                (u = (u / 10) | 0);
            t[f] = u;
          }
          for (u ? ++e.e : t.shift(), c = t.length; !t[--c]; ) t.pop();
          return (e.c = t), e;
        }),
        (d.toExponential = function(e) {
          return b(this, 1, e, e);
        }),
        (d.toFixed = function(e) {
          return b(this, 2, e, this.e + e);
        }),
        (d.toPrecision = function(e) {
          return b(this, 3, e, e - 1);
        }),
        (d.toString = function() {
          return b(this);
        }),
        (d.valueOf = d.toJSON = function() {
          return b(this, 4);
        }),
        ((i = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === m ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!v.test((t += ""))) throw Error(h + "number");
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
            (t.prototype = d),
            (t.DP = s),
            (t.RM = u),
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
  function(e, t, r) {
    "use strict";
    r.r(t);
    const n = {
      USER_LOTTERY_RECORD: 81892,
      LOTTERY: 81873,
      ERROR: 83510,
      CONFIG: 83587
    };
    var o = r(0),
      i = r.n(o),
      s = {
        formatNumber: e => ((e = e.toString())[1] ? e : "0" + e),
        formatTime(e) {
          var t = new Date();
          t.setTime(e);
          const r = t.getFullYear(),
            n = t.getMonth() + 1,
            o = t.getDate(),
            i = t.getHours(),
            s = t.getMinutes();
          t.getSeconds();
          return (
            [r, n, o].map(formatNumber).join("-") +
            " " +
            [i, s].map(formatNumber).join(":")
          );
        },
        formatDate(e) {
          var t = new Date();
          return (
            t.setTime(e),
            [t.getFullYear(), t.getMonth() + 1, t.getDate()]
              .map(formatNumber)
              .join("-")
          );
        },
        countDown(e) {
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
        },
        openDateTimeStamp() {
          var e = Date.parse(new Date());
          return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
        },
        toFixed1: e => new i.a(e).toFixed(1)
      };
    async function u(e, t) {
      console.log(`checkLotteryStatus - event: ${e}`),
        console.log(s.openDateTimeStamp());
      try {
        console.log(`openedLotteries: ${JSON.stringify(n)}`),
          t(null, "success");
      } catch (e) {
        t(e);
      }
    }
    r.d(t, "default", function() {
      return u;
    });
  }
]).default;

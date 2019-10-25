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
    r((r.s = 11))
  );
})([
  function(e, t, r) {
    "use strict";
    r.d(t, "e", function() {
      return n;
    }),
      r.d(t, "d", function() {
        return o;
      }),
      r.d(t, "f", function() {
        return i;
      }),
      r.d(t, "g", function() {
        return s;
      }),
      r.d(t, "a", function() {
        return u;
      }),
      r.d(t, "h", function() {
        return c;
      }),
      r.d(t, "b", function() {
        return a;
      }),
      r.d(t, "c", function() {
        return f;
      });
    const n = {
        HOME: "/pages/home/home",
        PIC_DETAILS: "/pages/pic_details/details",
        ADD_LOTTERY: "/pages/add_lottery/add_lottery",
        ADD_PRODUCT_LOTTERY: "/pages/add_product_lottery/add_product_lottery",
        LOTTERY_FINISHED: "/pages/lottery_finished/lottery_finished",
        ATTEND_LOTTERY: "/pages/attend_lottery/attend_lottery",
        WIN_LOTTERY: "/pages/win_lottery/win_lottery",
        USER: "/pages/user/user",
        USER_LUCKY: "/pages/user_lucky/user_lucky",
        SHARE_PIC: "/pages/share_pic/share_pic",
        ATTENDEES: "/pages/attendees/attendees",
        SHARE_PIC_HOME: "/pages/share_pic_home/share_pic_home",
        USER_LUCKY_DETAILS: "/pages/user_lucky_details/user_lucky_details",
        USER_BALANCE: "/pages/user_balance/user_balance",
        USER_FANS: "/pages/user_fans/user_fans",
        USER_QUESTION: "/pages/user_question/user_question",
        USER_ADS: "/pages/user_ads/user_ads",
        USER_DESC: "/pages/user_desc/user_desc",
        USER_BALANCE_DETAILS:
          "/pages/user_balance_details/user_balance_details",
        USER_ALL_LOTTERIES: "/pages/user_all_lotteries/user_all_lotteries",
        USER_GET_LOTTERIES: "/pages/user_get_lotteries/user_get_lotteries",
        USER_SEND_LOTTERIES: "/pages/user_send_lotteries/user_send_lotteries"
      },
      o = {
        GET_LOTTERY_FAILED: "get lottery failed",
        OUT_OF_LUCKY_NUM: "out of lucky num",
        INSUFFICIENT_AUTHORITY: "Insufficient authority",
        APPROVE_LOTTERY_STATUS_ERROR:
          "status 状态错误；状态只能从1到2或者从1到-1",
        NOT_PAID: "抽奖未支付",
        INVALID_PARAM: "参数不对",
        APPROVED: "抽奖已经审批通过",
        WITHDRAW_NOT_INTEGER: "提现值不是整数",
        WITHDRAW_NOT_IN_RANGE: "提现值不在范围内",
        WITHDRAW_INSUFFICIENT_BALANCE: "余额不足",
        WITHDRAW_DAILY_ONCE: "提现失败，每日只能提现一次",
        WITHDRAW_STATUS_ERROR: "status 状态错误；修改的目标状态只能是1或者-1",
        WITHDRAW_APPROVED: "提现已经审批通过了",
        WITHDRAW_STATUS_CURRENT_ERROR:
          "status 状态错误；状态只能从0到1或者从0到-1，当前不是0",
        ADD_INVITER_ID_SAME: "邀请人和被邀请人不能是同一人",
        ADD_INVITER_UID_EXIST: "已经存在邀请人",
        UID_NOT_EXIST: "找不到该用户"
      },
      i = { WITHDRAW_CREATE_SUCCESS: "提现申请成功" },
      s = {
        USER_LOTTERY_RECORD: 81892,
        LOTTERY: 81873,
        CONFIG: 83587,
        ERROR: 83510,
        DAILY_CHECKIN: 84214,
        BALANCE_LUCKY_RECORD: 83371,
        QUESTIONS: 84573,
        WITHDRAW: 84648,
        ADDRESS_BOOK: 84947
      },
      u = "5d7917899d8da5229c037105",
      c = {
        LOTTERY_TYPE_PRODUCT: "实物抽奖",
        LOTTERY_TYPE_MONEY: "现金抽奖",
        WITHDRAW: "提现",
        APPROVED: "审批通过",
        REJECTED: "审批不通过"
      },
      a = { LUCKY_RATIO_INVITATION: "lucky_ratio_invitation" },
      f = {
        WITHDRAW_MAX: 100,
        WITHDRAW_MIN: 1,
        WITHDRAW_REJECT: -1,
        WITHDRAW_APPROVE: 1,
        WITHDRAW_WAIT_APPROVE: 0,
        LOTTERY_TYPE_PRODUCT: 1,
        LOTTERY_TYPE_MONEY: 0,
        PRODUCT_LOTTERY_PEOPLE_UNIT: 1e3,
        PRODUCT_DEFAULT_OPEN_PEOPLE_NUM: 1e3,
        DEFAULT_OPEN_PEOPLE_NUM: 1e3,
        MONEY_UNIT: 1e3,
        WAIT_PAY: 0,
        WAIT_APPROVE: 1,
        APPROVED: 2,
        OPENED: 3,
        REJECTED: -1,
        GET_ATTENDEES: 0,
        GET_PRODUCT: 3,
        GET_FUDAI: 2,
        GET_HONGBAO: 1,
        HONHBAO_RATIO: 100,
        ATTEND_LOTTERY_COST: 1,
        ONE_LUCKY_NUM_WEIGHT: 2,
        GET_MORE_REDUCE_LUCKY_NUM: -10,
        DEFAULT_URL: [
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOgsfu2HFutx16.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOdGDewsFUU6Zt.png"
        ],
        DEFAULT_MONEY_URL: [
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOpGejZ7rKJQI3.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOpZx36XK2NrIJ.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOptxmdhThZA6i.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOqMwj9AdAU12E.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOqbc4iJMfwI2I.png",
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iGOquZGoPOXC9x6.png"
        ],
        HOME_SHARE_IMAGE:
          "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iJgw3ghv9QBEKet.png",
        LUCKY_RATIO_SUCCESS: 1e3,
        LUCKY_RATIO_FUDAI_PACKAGE: 10,
        LUCKY_RATIO_INVITATION: 100,
        HONGBAO_NUM: 100,
        FUDAI_NUM: 100
      };
  },
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return s;
    }),
      r.d(t, "f", function() {
        return u;
      }),
      r.d(t, "i", function() {
        return c;
      }),
      r.d(t, "e", function() {
        return a;
      }),
      r.d(t, "c", function() {
        return f;
      }),
      r.d(t, "d", function() {
        return _;
      }),
      r.d(t, "j", function() {
        return l;
      }),
      r.d(t, "b", function() {
        return E;
      }),
      r.d(t, "k", function() {
        return T;
      }),
      r.d(t, "l", function() {
        return d;
      }),
      r.d(t, "n", function() {
        return R;
      }),
      r.d(t, "o", function() {
        return p;
      }),
      r.d(t, "m", function() {
        return O;
      }),
      r.d(t, "g", function() {
        return h;
      }),
      r.d(t, "h", function() {
        return A;
      });
    var n = r(0);
    const o = 100,
      i = 5074,
      s = "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA",
      u = "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
      c = new BaaS.TableObject(n.g.USER_LOTTERY_RECORD),
      a = new BaaS.TableObject(n.g.LOTTERY),
      f = new BaaS.TableObject(n.g.CONFIG),
      _ = new BaaS.TableObject(n.g.ERROR),
      l = new BaaS.User(),
      E = new BaaS.TableObject(n.g.BALANCE_LUCKY_RECORD),
      T = new BaaS.TableObject(n.g.WITHDRAW);
    async function d(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", a.getWithoutData(e)), c.setQuery(t).count()
      );
    }
    async function R() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", n.c.APPROVED),
        a
          .setQuery(e)
          .limit(o)
          .find()
      );
    }
    async function p(e) {
      let t = new BaaS.Query();
      if ("78355122" == e)
        return console.log("inAdminGroup : cloudAdmin call..."), !0;
      t.in("_group", [i]);
      let r = await l.setQuery(t).find(),
        n = !1;
      for (let t of r.data.objects)
        if (t.id === e) {
          n = !0;
          break;
        }
      return n;
    }
    async function O(e) {
      return (await f.get(n.a)).data[e];
    }
    const h = { ADD_INVITER: "邀请好友，增加运气值" },
      A = {
        ...(() => {
          let e = [],
            t = [];
          for (let r = 0; r < 1e3; r++) r % 2 == 0 ? e.push(r) : t.push(r);
          return { LUCKY_SEED_HONGBAO: e, LUCKY_SEED_FUDAI: t };
        })()
      };
  },
  ,
  function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return o;
    }),
      r.d(t, "b", function() {
        return i;
      });
    r(4), r(0);
    function n(e) {
      return (e = e.toString())[1] ? e : "0" + e;
    }
    const o = e => {
      var t = new Date();
      return (
        t.setTime(e),
        [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-")
      );
    };
    function i() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
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
        _ = "[big.js] ",
        l = _ + "Invalid ",
        E = l + "decimal places",
        T = l + "rounding mode",
        d = {},
        R = void 0,
        p = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function O(e, t, r, n) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === r) n = o[i] >= 5;
          else if (2 === r)
            n =
              o[i] > 5 ||
              (5 == o[i] && (n || i < 0 || o[i + 1] !== R || 1 & o[i - 1]));
          else if (3 === r) n = n || !!o[0];
          else if (((n = !1), 0 !== r)) throw Error(T);
          if (i < 1)
            (o.length = 1), n ? ((e.e = -t), (o[0] = 1)) : (o[0] = e.e = 0);
          else {
            if (((o.length = i--), n))
              for (; ++o[i] > 9; ) (o[i] = 0), i-- || (++e.e, o.unshift(1));
            for (i = o.length; !o[--i]; ) o.pop();
          }
        } else if (r < 0 || r > 3 || r !== ~~r) throw Error(T);
        return e;
      }
      function h(e, t, r, n) {
        var o,
          i,
          s = e.constructor,
          u = !e.c[0];
        if (r !== R) {
          if (r !== ~~r || r < (3 == t) || r > c)
            throw Error(3 == t ? l + "precision" : E);
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
          if (s !== ~~s || s < 0 || s > c) throw Error(E);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * i);
          var u,
            a,
            f,
            _,
            l,
            T = o.slice(),
            d = (u = o.length),
            p = n.length,
            h = n.slice(0, u),
            A = h.length,
            g = e,
            D = (g.c = []),
            I = 0,
            S = s + (g.e = t.e - e.e) + 1;
          for (g.s = i, i = S < 0 ? 0 : S, T.unshift(0); A++ < u; ) h.push(0);
          do {
            for (f = 0; f < 10; f++) {
              if (u != (A = h.length)) _ = u > A ? 1 : -1;
              else
                for (l = -1, _ = 0; ++l < u; )
                  if (o[l] != h[l]) {
                    _ = o[l] > h[l] ? 1 : -1;
                    break;
                  }
              if (!(_ < 0)) break;
              for (a = A == u ? o : T; A; ) {
                if (h[--A] < a[A]) {
                  for (l = A; l && !h[--l]; ) h[l] = 9;
                  --h[l], (h[A] += 10);
                }
                h[A] -= a[A];
              }
              for (; !h[0]; ) h.shift();
            }
            (D[I++] = _ ? f : ++f),
              h[0] && _ ? (h[A] = n[d] || 0) : (h = [n[d]]);
          } while ((d++ < p || h[0] !== R) && i--);
          return (
            D[0] || 1 == I || (D.shift(), g.e--),
            I > S && O(g, s, r.RM, h[0] !== R),
            g
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
          var a = i.c.slice(),
            f = i.e,
            _ = e.c,
            l = e.e;
          if (!a[0] || !_[0])
            return _[0] ? ((e.s = -c), e) : new s(a[0] ? i : 0);
          if ((u = f - l)) {
            for (
              (o = u < 0) ? ((u = -u), (n = a)) : ((l = f), (n = _)),
                n.reverse(),
                c = u;
              c--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((o = a.length < _.length) ? a : _).length, u = c = 0;
              c < r;
              c++
            )
              if (a[c] != _[c]) {
                o = a[c] < _[c];
                break;
              }
          if (
            (o && ((n = a), (a = _), (_ = n), (e.s = -e.s)),
            (c = (r = _.length) - (t = a.length)) > 0)
          )
            for (; c--; ) a[t++] = 0;
          for (c = t; r > u; ) {
            if (a[--r] < _[r]) {
              for (t = r; t && !a[--t]; ) a[t] = 9;
              --a[t], (a[r] += 10);
            }
            a[r] -= _[r];
          }
          for (; 0 === a[--c]; ) a.pop();
          for (; 0 === a[0]; ) a.shift(), --l;
          return a[0] || ((e.s = 1), (a = [(l = 0)])), (e.c = a), (e.e = l), e;
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
        (d.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(l + "exponent");
          for (o && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? r.div(n) : n;
        }),
        (d.round = function(e, t) {
          var r = this.constructor;
          if (e === R) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(E);
          return O(new r(this), e, t === R ? r.RM : t);
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
          if (i < 0) throw Error(_ + "No square root");
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
        (d.times = d.mul = function(e) {
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
        (d.toExponential = function(e) {
          return h(this, 1, e, e);
        }),
        (d.toFixed = function(e) {
          return h(this, 2, e, this.e + e);
        }),
        (d.toPrecision = function(e) {
          return h(this, 3, e, e - 1);
        }),
        (d.toString = function() {
          return h(this);
        }),
        (d.valueOf = d.toJSON = function() {
          return h(this, 4);
        }),
        ((i = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === R ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!p.test((t += ""))) throw Error(l + "number");
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
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, r) {
    e.exports = r(12);
  },
  function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "default", function() {
        return s;
      });
    var n = r(1),
      o = r(0),
      i = r(3);
    async function s(e, t) {
      console.log(`event : ${JSON.stringify(e)}`);
      try {
        const { id: r, status: s } = e.data,
          u = e.request.user.id;
        if (!(await Object(n.o)(u)))
          throw new Error(o.d.INSUFFICIENT_AUTHORITY);
        if (s !== o.c.WITHDRAW_APPROVE && s !== o.c.WITHDRAW_REJECT)
          throw new Error(o.d.WITHDRAW_STATUS_ERROR);
        let c = (await n.k.get(r)).data;
        if (c.status === o.c.WITHDRAW_APPROVE)
          throw new Error(o.d.WITHDRAW_APPROVED);
        if (c.status !== o.c.WITHDRAW_WAIT_APPROVE)
          throw new Error(o.d.WITHDRAW_STATUS_CURRENT_ERROR);
        let a = n.k.getWithoutData(r);
        a.set({ status: s });
        let f = await a.update();
        console.log(
          `approveWithdraw - withdrawRecord.update - ret : ${JSON.stringify(f)}`
        );
        const _ = n.a;
        let l,
          E = o.h.WITHDRAW,
          T = o.e.USER;
        s === o.c.WITHDRAW_REJECT
          ? (l = o.h.REJECTED)
          : s === o.c.APPROVED && (l = o.h.APPROVED);
        let d = {
          recipient_type: "user_list",
          user_list: [u],
          template_id: _,
          submission_type: "form_id",
          page: `${T}`,
          keywords: {
            keyword1: { value: `${r}` },
            keyword3: { value: l },
            keyword2: { value: E },
            keyword4: { value: `${Object(i.a)(Date.now())}` }
          }
        };
        console.log(
          `approveWithdraw - sendTemplateMessage data : ${JSON.stringify(d)}`
        ),
          BaaS.sendTemplateMessage(d),
          t(null, f);
      } catch (e) {
        console.log(e), t(e);
      }
    }
  }
]).default;

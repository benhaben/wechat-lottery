exports.main = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
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
        for (var i in e)
          r.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
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
    r.d(t, "e", function() {
      return n;
    }),
      r.d(t, "d", function() {
        return i;
      }),
      r.d(t, "f", function() {
        return o;
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
        return _;
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
      i = {
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
      o = { WITHDRAW_CREATE_SUCCESS: "提现申请成功" },
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
      _ = {
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
        return _;
      }),
      r.d(t, "d", function() {
        return f;
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
        return O;
      }),
      r.d(t, "m", function() {
        return p;
      }),
      r.d(t, "g", function() {
        return h;
      }),
      r.d(t, "h", function() {
        return A;
      });
    var n = r(0);
    const i = 100,
      o = 5074,
      s = "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA",
      u = "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
      c = new BaaS.TableObject(n.g.USER_LOTTERY_RECORD),
      a = new BaaS.TableObject(n.g.LOTTERY),
      _ = new BaaS.TableObject(n.g.CONFIG),
      f = new BaaS.TableObject(n.g.ERROR),
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
          .limit(i)
          .find()
      );
    }
    async function O(e) {
      let t = new BaaS.Query();
      if ("78355122" == e)
        return console.log("inAdminGroup : cloudAdmin call..."), !0;
      t.in("_group", [o]);
      let r = await l.setQuery(t).find(),
        n = !1;
      for (let t of r.data.objects)
        if (t.id === e) {
          n = !0;
          break;
        }
      return n;
    }
    async function p(e) {
      return (await _.get(n.a)).data[e];
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
      return i;
    }),
      r.d(t, "b", function() {
        return o;
      });
    r(4), r(0);
    function n(e) {
      return (e = e.toString())[1] ? e : "0" + e;
    }
    const i = e => {
      var t = new Date();
      return (
        t.setTime(e),
        [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-")
      );
    };
    function o() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
  },
  function(e, t, r) {
    var n;
    !(function(i) {
      "use strict";
      var o,
        s = 20,
        u = 1,
        c = 1e6,
        a = -7,
        _ = 21,
        f = "[big.js] ",
        l = f + "Invalid ",
        E = l + "decimal places",
        T = l + "rounding mode",
        d = {},
        R = void 0,
        O = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function p(e, t, r, n) {
        var i = e.c,
          o = e.e + t + 1;
        if (o < i.length) {
          if (1 === r) n = i[o] >= 5;
          else if (2 === r)
            n =
              i[o] > 5 ||
              (5 == i[o] && (n || o < 0 || i[o + 1] !== R || 1 & i[o - 1]));
          else if (3 === r) n = n || !!i[0];
          else if (((n = !1), 0 !== r)) throw Error(T);
          if (o < 1)
            (i.length = 1), n ? ((e.e = -t), (i[0] = 1)) : (i[0] = e.e = 0);
          else {
            if (((i.length = o--), n))
              for (; ++i[o] > 9; ) (i[o] = 0), o-- || (++e.e, i.unshift(1));
            for (o = i.length; !i[--o]; ) i.pop();
          }
        } else if (r < 0 || r > 3 || r !== ~~r) throw Error(T);
        return e;
      }
      function h(e, t, r, n) {
        var i,
          o,
          s = e.constructor,
          u = !e.c[0];
        if (r !== R) {
          if (r !== ~~r || r < (3 == t) || r > c)
            throw Error(3 == t ? l + "precision" : E);
          for (
            r = n - (e = new s(e)).e,
              e.c.length > ++n && p(e, r, s.RM),
              2 == t && (n = e.e + r + 1);
            e.c.length < n;

          )
            e.c.push(0);
        }
        if (
          ((i = e.e),
          (r = (o = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && n <= i) || i <= s.NE || i >= s.PE))
        )
          o =
            o.charAt(0) +
            (r > 1 ? "." + o.slice(1) : "") +
            (i < 0 ? "e" : "e+") +
            i;
        else if (i < 0) {
          for (; ++i; ) o = "0" + o;
          o = "0." + o;
        } else if (i > 0)
          if (++i > r) for (i -= r; i--; ) o += "0";
          else i < r && (o = o.slice(0, i) + "." + o.slice(i));
        else r > 1 && (o = o.charAt(0) + "." + o.slice(1));
        return e.s < 0 && (!u || 4 == t) ? "-" + o : o;
      }
      (d.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (d.cmp = function(e) {
          var t,
            r = this,
            n = r.c,
            i = (e = new r.constructor(e)).c,
            o = r.s,
            s = e.s,
            u = r.e,
            c = e.e;
          if (!n[0] || !i[0]) return n[0] ? o : i[0] ? -s : 0;
          if (o != s) return o;
          if (((t = o < 0), u != c)) return (u > c) ^ t ? 1 : -1;
          for (s = (u = n.length) < (c = i.length) ? u : c, o = -1; ++o < s; )
            if (n[o] != i[o]) return (n[o] > i[o]) ^ t ? 1 : -1;
          return u == c ? 0 : (u > c) ^ t ? 1 : -1;
        }),
        (d.div = function(e) {
          var t = this,
            r = t.constructor,
            n = t.c,
            i = (e = new r(e)).c,
            o = t.s == e.s ? 1 : -1,
            s = r.DP;
          if (s !== ~~s || s < 0 || s > c) throw Error(E);
          if (!i[0]) throw Error("[big.js] Division by zero");
          if (!n[0]) return new r(0 * o);
          var u,
            a,
            _,
            f,
            l,
            T = i.slice(),
            d = (u = i.length),
            O = n.length,
            h = n.slice(0, u),
            A = h.length,
            g = e,
            D = (g.c = []),
            I = 0,
            P = s + (g.e = t.e - e.e) + 1;
          for (g.s = o, o = P < 0 ? 0 : P, T.unshift(0); A++ < u; ) h.push(0);
          do {
            for (_ = 0; _ < 10; _++) {
              if (u != (A = h.length)) f = u > A ? 1 : -1;
              else
                for (l = -1, f = 0; ++l < u; )
                  if (i[l] != h[l]) {
                    f = i[l] > h[l] ? 1 : -1;
                    break;
                  }
              if (!(f < 0)) break;
              for (a = A == u ? i : T; A; ) {
                if (h[--A] < a[A]) {
                  for (l = A; l && !h[--l]; ) h[l] = 9;
                  --h[l], (h[A] += 10);
                }
                h[A] -= a[A];
              }
              for (; !h[0]; ) h.shift();
            }
            (D[I++] = f ? _ : ++_),
              h[0] && f ? (h[A] = n[d] || 0) : (h = [n[d]]);
          } while ((d++ < O || h[0] !== R) && o--);
          return (
            D[0] || 1 == I || (D.shift(), g.e--),
            I > P && p(g, s, r.RM, h[0] !== R),
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
            i,
            o = this,
            s = o.constructor,
            u = o.s,
            c = (e = new s(e)).s;
          if (u != c) return (e.s = -c), o.plus(e);
          var a = o.c.slice(),
            _ = o.e,
            f = e.c,
            l = e.e;
          if (!a[0] || !f[0])
            return f[0] ? ((e.s = -c), e) : new s(a[0] ? o : 0);
          if ((u = _ - l)) {
            for (
              (i = u < 0) ? ((u = -u), (n = a)) : ((l = _), (n = f)),
                n.reverse(),
                c = u;
              c--;

            )
              n.push(0);
            n.reverse();
          } else
            for (
              r = ((i = a.length < f.length) ? a : f).length, u = c = 0;
              c < r;
              c++
            )
              if (a[c] != f[c]) {
                i = a[c] < f[c];
                break;
              }
          if (
            (i && ((n = a), (a = f), (f = n), (e.s = -e.s)),
            (c = (r = f.length) - (t = a.length)) > 0)
          )
            for (; c--; ) a[t++] = 0;
          for (c = t; r > u; ) {
            if (a[--r] < f[r]) {
              for (t = r; t && !a[--t]; ) a[t] = 9;
              --a[t], (a[r] += 10);
            }
            a[r] -= f[r];
          }
          for (; 0 === a[--c]; ) a.pop();
          for (; 0 === a[0]; ) a.shift(), --l;
          return a[0] || ((e.s = 1), (a = [(l = 0)])), (e.c = a), (e.e = l), e;
        }),
        (d.mod = function(e) {
          var t,
            r = this,
            n = r.constructor,
            i = r.s,
            o = (e = new n(e)).s;
          if (!e.c[0]) throw Error("[big.js] Division by zero");
          return (
            (r.s = e.s = 1),
            (t = 1 == e.cmp(r)),
            (r.s = i),
            (e.s = o),
            t
              ? new n(r)
              : ((i = n.DP),
                (o = n.RM),
                (n.DP = n.RM = 0),
                (r = r.div(e)),
                (n.DP = i),
                (n.RM = o),
                this.minus(r.times(e)))
          );
        }),
        (d.plus = d.add = function(e) {
          var t,
            r = this,
            n = r.constructor,
            i = r.s,
            o = (e = new n(e)).s;
          if (i != o) return (e.s = -o), r.minus(e);
          var s = r.e,
            u = r.c,
            c = e.e,
            a = e.c;
          if (!u[0] || !a[0]) return a[0] ? e : new n(u[0] ? r : 0 * i);
          if (((u = u.slice()), (i = s - c))) {
            for (
              i > 0 ? ((c = s), (t = a)) : ((i = -i), (t = u)), t.reverse();
              i--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            u.length - a.length < 0 && ((t = a), (a = u), (u = t)),
              i = a.length,
              o = 0;
            i;
            u[i] %= 10
          )
            o = ((u[--i] = u[i] + a[i] + o) / 10) | 0;
          for (o && (u.unshift(o), ++c), i = u.length; 0 === u[--i]; ) u.pop();
          return (e.c = u), (e.e = c), e;
        }),
        (d.pow = function(e) {
          var t = this,
            r = new t.constructor(1),
            n = r,
            i = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(l + "exponent");
          for (i && (e = -e); 1 & e && (n = n.times(t)), (e >>= 1); )
            t = t.times(t);
          return i ? r.div(n) : n;
        }),
        (d.round = function(e, t) {
          var r = this.constructor;
          if (e === R) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(E);
          return p(new r(this), e, t === R ? r.RM : t);
        }),
        (d.sqrt = function() {
          var e,
            t,
            r,
            n = this,
            i = n.constructor,
            o = n.s,
            s = n.e,
            u = new i(0.5);
          if (!n.c[0]) return new i(n);
          if (o < 0) throw Error(f + "No square root");
          0 === (o = Math.sqrt(n + "")) || o === 1 / 0
            ? (((t = n.c.join("")).length + s) & 1 || (t += "0"),
              (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
              (e = new i(
                ((o = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s
              )))
            : (e = new i(o)),
            (s = e.e + (i.DP += 4));
          do {
            (r = e), (e = u.times(r.plus(n.div(r))));
          } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return p(e, (i.DP -= 4), i.RM);
        }),
        (d.times = d.mul = function(e) {
          var t,
            r = this,
            n = r.constructor,
            i = r.c,
            o = (e = new n(e)).c,
            s = i.length,
            u = o.length,
            c = r.e,
            a = e.e;
          if (((e.s = r.s == e.s ? 1 : -1), !i[0] || !o[0]))
            return new n(0 * e.s);
          for (
            e.e = c + a,
              s < u && ((t = i), (i = o), (o = t), (a = s), (s = u), (u = a)),
              t = new Array((a = s + u));
            a--;

          )
            t[a] = 0;
          for (c = u; c--; ) {
            for (u = 0, a = s + c; a > c; )
              (u = t[a] + o[c] * i[a - c - 1] + u),
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
        ((o = (function e() {
          function t(r) {
            var n = this;
            if (!(n instanceof t)) return r === R ? e() : new t(r);
            r instanceof t
              ? ((n.s = r.s), (n.e = r.e), (n.c = r.c.slice()))
              : (function(e, t) {
                  var r, n, i;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!O.test((t += ""))) throw Error(l + "number");
                  (e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
                    (r = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                  (n = t.search(/e/i)) > 0
                    ? (r < 0 && (r = n),
                      (r += +t.slice(n + 1)),
                      (t = t.substring(0, n)))
                    : r < 0 && (r = t.length);
                  for (i = t.length, n = 0; n < i && "0" == t.charAt(n); ) ++n;
                  if (n == i) e.c = [(e.e = 0)];
                  else {
                    for (; i > 0 && "0" == t.charAt(--i); );
                    for (e.e = r - n - 1, e.c = [], r = 0; n <= i; )
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
            (t.PE = _),
            (t.version = "5.2.2"),
            t
          );
        })()).default = o.Big = o),
        void 0 ===
          (n = function() {
            return o;
          }.call(t, r, t, e)) || (e.exports = n);
    })();
  },
  ,
  ,
  function(e, t, r) {
    e.exports = r(8);
  },
  function(e, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "default", function() {
        return s;
      });
    var n = r(1),
      i = r(0),
      o = r(3);
    async function s(e, t) {
      console.log(`event : ${JSON.stringify(e)}`);
      try {
        const { id: r, status: s } = e.data,
          u = e.request.user.id;
        if (!(await Object(n.o)(u)))
          throw new Error(i.d.INSUFFICIENT_AUTHORITY);
        if (s !== i.c.REJECTED && s !== i.c.APPROVED)
          throw new Error(i.d.APPROVE_LOTTERY_STATUS_ERROR);
        let c = (await n.e.get(r)).data;
        if (c.status === i.c.APPROVED) throw new Error(i.d.APPROVED);
        if (c.status !== i.c.WAIT_APPROVE) throw new Error(i.d.NOT_PAID);
        let a = n.e.getWithoutData(r);
        a.set({ status: s });
        let _,
          f = await a.update();
        console.log(`lotteryRecord.update - ${JSON.stringify(f)}`);
        const l = n.a;
        let E =
          c.lottery_type == i.c.LOTTERY_TYPE_MONEY
            ? i.h.LOTTERY_TYPE_MONEY
            : i.h.LOTTERY_TYPE_PRODUCT;
        if (s === i.c.REJECTED) {
          let e =
              c.lottery_type == i.c.LOTTERY_TYPE_MONEY
                ? i.e.ADD_LOTTERY
                : i.e.ADD_PRODUCT_LOTTERY,
            t = i.h.REJECTED,
            r = `${Object(o.a)(Date.now())}`;
          _ = {
            recipient_type: "user_list",
            user_list: [c.created_by],
            template_id: l,
            submission_type: "form_id",
            page: `${e}?id=${c.id}`,
            keywords: {
              keyword1: { value: `${c.id}` },
              keyword3: { value: t },
              keyword2: { value: E },
              keyword4: { value: r }
            }
          };
        } else if (s === i.c.APPROVED) {
          let e = i.e.ATTEND_LOTTERY,
            t = i.h.APPROVED,
            r = `${Object(o.a)(Date.now())}`;
          _ = {
            recipient_type: "user_list",
            user_list: [c.created_by],
            template_id: l,
            submission_type: "form_id",
            page: `${e}?id=${c.id}`,
            keywords: {
              keyword1: { value: `${c.id}` },
              keyword3: { value: t },
              keyword2: { value: E },
              keyword4: { value: r }
            }
          };
        }
        console.log(
          `approveLottery - sendTemplateMessage data : ${JSON.stringify(_)}`
        ),
          await BaaS.sendTemplateMessage(_),
          t(null, !0);
      } catch (e) {
        console.log(e), t(e);
      }
    }
  }
]).default;

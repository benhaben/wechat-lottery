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
    n.d(t, "e", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "f", function() {
        return i;
      }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return l;
      });
    const r = {
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
      a = {
        LOTTERY_TYPE_PRODUCT: "实物抽奖",
        LOTTERY_TYPE_MONEY: "现金抽奖",
        WITHDRAW: "提现",
        APPROVED: "审批通过",
        REJECTED: "审批不通过"
      },
      c = { LUCKY_RATIO_INVITATION: "lucky_ratio_invitation" },
      l = {
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
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "i", function() {
        return a;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return _;
      }),
      n.d(t, "j", function() {
        return f;
      }),
      n.d(t, "b", function() {
        return d;
      }),
      n.d(t, "k", function() {
        return p;
      }),
      n.d(t, "l", function() {
        return E;
      }),
      n.d(t, "n", function() {
        return g;
      }),
      n.d(t, "o", function() {
        return T;
      }),
      n.d(t, "m", function() {
        return O;
      }),
      n.d(t, "g", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return R;
      });
    var r = n(0);
    const o = 100,
      i = 5074,
      s = "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA",
      u = "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
      a = new BaaS.TableObject(r.g.USER_LOTTERY_RECORD),
      c = new BaaS.TableObject(r.g.LOTTERY),
      l = new BaaS.TableObject(r.g.CONFIG),
      _ = new BaaS.TableObject(r.g.ERROR),
      f = new BaaS.User(),
      d = new BaaS.TableObject(r.g.BALANCE_LUCKY_RECORD),
      p = new BaaS.TableObject(r.g.WITHDRAW);
    async function E(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", c.getWithoutData(e)), a.setQuery(t).count()
      );
    }
    async function g() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", r.c.APPROVED),
        c
          .setQuery(e)
          .limit(o)
          .find()
      );
    }
    async function T(e) {
      let t = new BaaS.Query();
      if ("78355122" == e)
        return console.log("inAdminGroup : cloudAdmin call..."), !0;
      t.in("_group", [i]);
      let n = await f.setQuery(t).find(),
        r = !1;
      for (let t of n.data.objects)
        if (t.id === e) {
          r = !0;
          break;
        }
      return r;
    }
    async function O(e) {
      return (await l.get(r.a)).data[e];
    }
    const h = { ADD_INVITER: "邀请好友，增加运气值" },
      R = {
        ...(() => {
          let e = [],
            t = [];
          for (let n = 0; n < 1e3; n++) n % 2 == 0 ? e.push(n) : t.push(n);
          return { LUCKY_SEED_HONGBAO: e, LUCKY_SEED_FUDAI: t };
        })()
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return i;
      });
    n(4), n(0);
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
  function(e, t, n) {
    var r;
    !(function(o) {
      "use strict";
      var i,
        s = 20,
        u = 1,
        a = 1e6,
        c = -7,
        l = 21,
        _ = "[big.js] ",
        f = _ + "Invalid ",
        d = f + "decimal places",
        p = f + "rounding mode",
        E = {},
        g = void 0,
        T = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function O(e, t, n, r) {
        var o = e.c,
          i = e.e + t + 1;
        if (i < o.length) {
          if (1 === n) r = o[i] >= 5;
          else if (2 === n)
            r =
              o[i] > 5 ||
              (5 == o[i] && (r || i < 0 || o[i + 1] !== g || 1 & o[i - 1]));
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
      function h(e, t, n, r) {
        var o,
          i,
          s = e.constructor,
          u = !e.c[0];
        if (n !== g) {
          if (n !== ~~n || n < (3 == t) || n > a)
            throw Error(3 == t ? f + "precision" : d);
          for (
            n = r - (e = new s(e)).e,
              e.c.length > ++r && O(e, n, s.RM),
              2 == t && (r = e.e + n + 1);
            e.c.length < r;

          )
            e.c.push(0);
        }
        if (
          ((o = e.e),
          (n = (i = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && r <= o) || o <= s.NE || o >= s.PE))
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
            s = e.s,
            u = n.e,
            a = e.e;
          if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -s : 0;
          if (i != s) return i;
          if (((t = i < 0), u != a)) return (u > a) ^ t ? 1 : -1;
          for (s = (u = r.length) < (a = o.length) ? u : a, i = -1; ++i < s; )
            if (r[i] != o[i]) return (r[i] > o[i]) ^ t ? 1 : -1;
          return u == a ? 0 : (u > a) ^ t ? 1 : -1;
        }),
        (E.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            o = (e = new n(e)).c,
            i = t.s == e.s ? 1 : -1,
            s = n.DP;
          if (s !== ~~s || s < 0 || s > a) throw Error(d);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * i);
          var u,
            c,
            l,
            _,
            f,
            p = o.slice(),
            E = (u = o.length),
            T = r.length,
            h = r.slice(0, u),
            R = h.length,
            A = e,
            D = (A.c = []),
            y = 0,
            w = s + (A.e = t.e - e.e) + 1;
          for (A.s = i, i = w < 0 ? 0 : w, p.unshift(0); R++ < u; ) h.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (u != (R = h.length)) _ = u > R ? 1 : -1;
              else
                for (f = -1, _ = 0; ++f < u; )
                  if (o[f] != h[f]) {
                    _ = o[f] > h[f] ? 1 : -1;
                    break;
                  }
              if (!(_ < 0)) break;
              for (c = R == u ? o : p; R; ) {
                if (h[--R] < c[R]) {
                  for (f = R; f && !h[--f]; ) h[f] = 9;
                  --h[f], (h[R] += 10);
                }
                h[R] -= c[R];
              }
              for (; !h[0]; ) h.shift();
            }
            (D[y++] = _ ? l : ++l),
              h[0] && _ ? (h[R] = r[E] || 0) : (h = [r[E]]);
          } while ((E++ < T || h[0] !== g) && i--);
          return (
            D[0] || 1 == y || (D.shift(), A.e--),
            y > w && O(A, s, n.RM, h[0] !== g),
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
            n,
            r,
            o,
            i = this,
            s = i.constructor,
            u = i.s,
            a = (e = new s(e)).s;
          if (u != a) return (e.s = -a), i.plus(e);
          var c = i.c.slice(),
            l = i.e,
            _ = e.c,
            f = e.e;
          if (!c[0] || !_[0])
            return _[0] ? ((e.s = -a), e) : new s(c[0] ? i : 0);
          if ((u = l - f)) {
            for (
              (o = u < 0) ? ((u = -u), (r = c)) : ((f = l), (r = _)),
                r.reverse(),
                a = u;
              a--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((o = c.length < _.length) ? c : _).length, u = a = 0;
              a < n;
              a++
            )
              if (c[a] != _[a]) {
                o = c[a] < _[a];
                break;
              }
          if (
            (o && ((r = c), (c = _), (_ = r), (e.s = -e.s)),
            (a = (n = _.length) - (t = c.length)) > 0)
          )
            for (; a--; ) c[t++] = 0;
          for (a = t; n > u; ) {
            if (c[--n] < _[n]) {
              for (t = n; t && !c[--t]; ) c[t] = 9;
              --c[t], (c[n] += 10);
            }
            c[n] -= _[n];
          }
          for (; 0 === c[--a]; ) c.pop();
          for (; 0 === c[0]; ) c.shift(), --f;
          return c[0] || ((e.s = 1), (c = [(f = 0)])), (e.c = c), (e.e = f), e;
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
          var s = n.e,
            u = n.c,
            a = e.e,
            c = e.c;
          if (!u[0] || !c[0]) return c[0] ? e : new r(u[0] ? n : 0 * o);
          if (((u = u.slice()), (o = s - a))) {
            for (
              o > 0 ? ((a = s), (t = c)) : ((o = -o), (t = u)), t.reverse();
              o--;

            )
              t.push(0);
            t.reverse();
          }
          for (
            u.length - c.length < 0 && ((t = c), (c = u), (u = t)),
              o = c.length,
              i = 0;
            o;
            u[o] %= 10
          )
            i = ((u[--o] = u[o] + c[o] + i) / 10) | 0;
          for (i && (u.unshift(i), ++a), o = u.length; 0 === u[--o]; ) u.pop();
          return (e.c = u), (e.e = a), e;
        }),
        (E.pow = function(e) {
          var t = this,
            n = new t.constructor(1),
            r = n,
            o = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(f + "exponent");
          for (o && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return o ? n.div(r) : r;
        }),
        (E.round = function(e, t) {
          var n = this.constructor;
          if (e === g) e = 0;
          else if (e !== ~~e || e < -a || e > a) throw Error(d);
          return O(new n(this), e, t === g ? n.RM : t);
        }),
        (E.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            o = r.constructor,
            i = r.s,
            s = r.e,
            u = new o(0.5);
          if (!r.c[0]) return new o(r);
          if (i < 0) throw Error(_ + "No square root");
          0 === (i = Math.sqrt(r + "")) || i === 1 / 0
            ? (((t = r.c.join("")).length + s) & 1 || (t += "0"),
              (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
              (e = new o(
                ((i = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + s
              )))
            : (e = new o(i)),
            (s = e.e + (o.DP += 4));
          do {
            (n = e), (e = u.times(n.plus(r.div(n))));
          } while (n.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return O(e, (o.DP -= 4), o.RM);
        }),
        (E.times = E.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            o = n.c,
            i = (e = new r(e)).c,
            s = o.length,
            u = i.length,
            a = n.e,
            c = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !o[0] || !i[0]))
            return new r(0 * e.s);
          for (
            e.e = a + c,
              s < u && ((t = o), (o = i), (i = t), (c = s), (s = u), (u = c)),
              t = new Array((c = s + u));
            c--;

          )
            t[c] = 0;
          for (a = u; a--; ) {
            for (u = 0, c = s + a; c > a; )
              (u = t[c] + i[a] * o[c - a - 1] + u),
                (t[c--] = u % 10),
                (u = (u / 10) | 0);
            t[c] = u;
          }
          for (u ? ++e.e : t.shift(), a = t.length; !t[--a]; ) t.pop();
          return (e.c = t), e;
        }),
        (E.toExponential = function(e) {
          return h(this, 1, e, e);
        }),
        (E.toFixed = function(e) {
          return h(this, 2, e, this.e + e);
        }),
        (E.toPrecision = function(e) {
          return h(this, 3, e, e - 1);
        }),
        (E.toString = function() {
          return h(this);
        }),
        (E.valueOf = E.toJSON = function() {
          return h(this, 4);
        }),
        ((i = (function e() {
          function t(n) {
            var r = this;
            if (!(r instanceof t)) return n === g ? e() : new t(n);
            n instanceof t
              ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
              : (function(e, t) {
                  var n, r, o;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!T.test((t += ""))) throw Error(f + "number");
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
            (t.DP = s),
            (t.RM = u),
            (t.NE = c),
            (t.PE = l),
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
        return s;
      });
    var r = n(0),
      o = n(3),
      i = n(1);
    async function s(e, t) {
      console.log(`event: ${JSON.stringify(e)}`);
      try {
        let e = (await Object(i.n)()).data.objects;
        if (
          (console.log(
            `获取待开奖抽奖成功，openedLotteries: ${JSON.stringify(
              e.map(e => e.id)
            )}`
          ),
          e)
        ) {
          let n = (await i.c.get(r.a)).data;
          for (let t in e) {
            let r = e[t];
            console.log(`遍历待开奖抽奖 lottery.id - ${r.id}`);
            let s =
              Math.round(Date.parse(r.open_date) / 1e3) -
              Math.round(new Date() / 1e3);
            if (0 === r.open_people_num)
              s <= 0
                ? (console.log("定时开奖"), await u(r, n))
                : console.log(
                    `定时开奖，时间不到24小时，继续等待下一波定时器 - lottery.id: ${r.id}`
                  );
            else {
              let e = await Object(i.l)(r.id);
              if (
                (console.log(`按人数开奖 getAttendeesCount: ${e}`),
                e >= r.open_people_num)
              )
                console.log(`按人数开奖 - lottery.id: ${r.id}`), await u(r, n);
              else if (e < r.open_people_num && s <= 0) {
                console.log("按人数开奖 - 需要延期");
                let e = Object(o.b)();
                console.log(
                  `人数不够，时间已经到了，顺延24小时 - lottery.id: ${r.id}, time: ${e}`
                );
                let t = i.e.getWithoutData(r.id);
                t.set("open_date", e);
                let n = await t.update();
                console.log(
                  `openedLotteries[updateRes] - ${JSON.stringify(n)}`
                );
              } else
                console.log(
                  "按人数开奖 - 继续等待 - count < lottery.open_people_num && time_distance > 0"
                );
            }
          }
          t(null, "success");
        } else t(r.d.GET_LOTTERY_FAILED);
      } catch (e) {
        t(e);
      }
    }
    async function u(e, t) {
      let n = i.e.getWithoutData(e.id);
      n.set("status", r.c.OPENED), await n.update();
      let o = "";
      if (e.lottery_type === r.c.LOTTERY_TYPE_PRODUCT) {
        console.log(
          `openLottery - 开奖实物抽奖 - lottery.product_name: ${e.product_name} - lottery.product_num: ${e.product_num}`
        );
        let t = [];
        for (let n = 0; n < e.product_num; n++) t.push(n);
        let n = await a(t, e, r.c.GET_PRODUCT);
        (o = `恭喜您！已经抽中${e.product_name}`),
          n && n.length > 0
            ? (await l(n, e, o), await c(n, e))
            : console.log(
                "------实物开奖没有找到中奖者，异常情况log记录------"
              );
      } else {
        let t = r.c.HONGBAO_NUM,
          n = i.h.LUCKY_SEED_HONGBAO.slice(0, t),
          s = Math.floor(
            (e.total_prize / r.c.MONEY_UNIT / r.c.HONGBAO_NUM) * r.c.MONEY_UNIT
          );
        console.log(`开奖红包 - price_per: ${s} - seed_hongbao: ${n} `);
        let u = await a(n, e, r.c.GET_HONGBAO, s);
        u && u.length > 0
          ? ((o = `恭喜您！已经抽中红包${s / r.c.MONEY_UNIT}元！`),
            await l(u, e, o))
          : console.log("----------红包开奖没有找到中奖者，异常情况记录------");
        let _ = i.h.LUCKY_SEED_FUDAI.slice(0, r.c.FUDAI_NUM);
        console.log(
          `开奖福袋 - lucky_num_per: ${e.lucky_num_per} - seed_fudai: ${_}`
        );
        let f = await a(_, e, r.c.GET_FUDAI, e.lucky_num_per);
        if (
          (f && f.length > 0
            ? ((o = `恭喜您！已经抽中福袋，运气值${e.lucky_num_per}个！`),
              f && f.length && (await l(f, e, o)))
            : console.log(
                "----------福袋开奖没有找到中奖者，异常情况记录------"
              ),
          f && f.length > 0 && u && u.length > 0)
        ) {
          let t = [...u, ...f];
          await c(t, e);
        }
      }
    }
    const a = async (e, t, n, o) => {
      let s = await (async function(e, t) {
        let n = [],
          r = new BaaS.Query();
        r.compare("lottery", "=", i.e.getWithoutData(e.id));
        let o = (await i.i
          .setQuery(r)
          .offset(0)
          .limit(1e3)
          .orderBy("-weight")
          .find()).data.objects;
        for (let e = 0; e < t.length; e++) t[e] < o.length && n.push(o[t[e]]);
        return n.map(e => e.id);
      })(t, e);
      if (
        (console.log(`updateUserLotteryRecords - ids : ${JSON.stringify(s)}`),
        s.length <= 0)
      )
        return;
      let u = new BaaS.Query();
      u.in("id", s), u.compare("lottery_result", "=", 0);
      let a = i.i.getWithoutData(u);
      n === r.c.GET_HONGBAO
        ? a.set("balance", o)
        : n === r.c.GET_FUDAI && a.set("lucky_num", o),
        a.set("lottery_result", n);
      let c = await a.update();
      console.log(`updateUserLotteryRecords resUpdate : ${JSON.stringify(c)}`);
      let l = c.data.operation_result.map(e => e.success.id),
        _ = new BaaS.Query();
      _.in("id", l), _.compare("lottery", "=", i.e.getWithoutData(t.id));
      let f = (await i.i
        .setQuery(_)
        .select("user_id")
        .find()).data.objects.map(e => e.user_id);
      return (
        console.log(`updateUserLotteryRecords userIds : ${JSON.stringify(f)}`),
        f
      );
    };
    async function c(e, t) {
      console.log(`sendNotGetMessage user_ids_win : ${JSON.stringify(e)}`);
      let n = new BaaS.Query();
      e && e.length > 0 && n.notIn("user_id", e),
        n.compare("lottery", "=", i.e.getWithoutData(t.id));
      let r = (await i.i
        .setQuery(n)
        .select("user_id")
        .find()).data.objects.map(e => e.user_id);
      if (
        (console.log(
          `sendNotGetMessage user_ids_not_in : ${JSON.stringify(r)}`
        ),
        r && r.length <= 0)
      )
        return;
      let s = t.sponsor || t.nickname,
        u = {
          recipient_type: "user_list",
          user_list: r,
          template_id: "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
          submission_type: "form_id",
          page: `pages/win_lottery/win_lottery?id=${t.id}`,
          keywords: {
            keyword1: { value: `${s}发起的抽奖` },
            keyword2: { value: "很遗憾，您没有中奖..." },
            keyword3: { value: `${Object(o.a)(Date.now())}` },
            keyword4: { value: `${t.id}` }
          }
        },
        a = await BaaS.sendTemplateMessage(u);
      return (
        console.log(
          `sendNotGetMessage [send_not_win] res : ${JSON.stringify(a)}`
        ),
        a
      );
    }
    async function l(e, t, n) {
      if (
        (console.log(`sendMessage user_ids_win : ${JSON.stringify(e)}`),
        e && e.length <= 0)
      )
        return;
      let r = t.sponsor || t.nickname,
        s = {
          recipient_type: "user_list",
          user_list: e,
          template_id: i.f,
          submission_type: "form_id",
          page: `pages/win_lottery/win_lottery?id=${t.id}`,
          keywords: {
            keyword1: { value: `${r}发起的抽奖` },
            keyword2: { value: n },
            keyword3: { value: `${Object(o.a)(Date.now())}` },
            keyword4: { value: `${t.id}` }
          }
        },
        u = await BaaS.sendTemplateMessage(s);
      return (
        console.log(
          `sendMessage sendTemplateMessage [send_winners] res : ${JSON.stringify(
            u
          )}`
        ),
        u
      );
    }
  }
]).default;
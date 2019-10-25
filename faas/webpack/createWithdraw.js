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
    n((n.s = 22))
  );
})({
  0: function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "f", function() {
        return o;
      }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "c", function() {
        return f;
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
  1: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "i", function() {
        return c;
      }),
      n.d(t, "e", function() {
        return a;
      }),
      n.d(t, "c", function() {
        return f;
      }),
      n.d(t, "d", function() {
        return _;
      }),
      n.d(t, "j", function() {
        return l;
      }),
      n.d(t, "b", function() {
        return E;
      }),
      n.d(t, "k", function() {
        return T;
      }),
      n.d(t, "l", function() {
        return d;
      }),
      n.d(t, "n", function() {
        return R;
      }),
      n.d(t, "o", function() {
        return p;
      }),
      n.d(t, "m", function() {
        return O;
      }),
      n.d(t, "g", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return A;
      });
    var r = n(0);
    const i = 100,
      o = 5074,
      s = "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA",
      u = "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
      c = new BaaS.TableObject(r.g.USER_LOTTERY_RECORD),
      a = new BaaS.TableObject(r.g.LOTTERY),
      f = new BaaS.TableObject(r.g.CONFIG),
      _ = new BaaS.TableObject(r.g.ERROR),
      l = new BaaS.User(),
      E = new BaaS.TableObject(r.g.BALANCE_LUCKY_RECORD),
      T = new BaaS.TableObject(r.g.WITHDRAW);
    async function d(e) {
      let t = new BaaS.Query();
      return (
        t.compare("lottery", "=", a.getWithoutData(e)), c.setQuery(t).count()
      );
    }
    async function R() {
      let e = new BaaS.Query();
      return (
        e.compare("status", "=", r.c.APPROVED),
        a
          .setQuery(e)
          .limit(i)
          .find()
      );
    }
    async function p(e) {
      let t = new BaaS.Query();
      if ("78355122" == e)
        return console.log("inAdminGroup : cloudAdmin call..."), !0;
      t.in("_group", [o]);
      let n = await l.setQuery(t).find(),
        r = !1;
      for (let t of n.data.objects)
        if (t.id === e) {
          r = !0;
          break;
        }
      return r;
    }
    async function O(e) {
      return (await f.get(r.a)).data[e];
    }
    const h = { ADD_INVITER: "邀请好友，增加运气值" },
      A = {
        ...(() => {
          let e = [],
            t = [];
          for (let n = 0; n < 1e3; n++) n % 2 == 0 ? e.push(n) : t.push(n);
          return { LUCKY_SEED_HONGBAO: e, LUCKY_SEED_FUDAI: t };
        })()
      };
  },
  22: function(e, t, n) {
    e.exports = n(32);
  },
  3: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      });
    n(4), n(0);
    function r(e) {
      return (e = e.toString())[1] ? e : "0" + e;
    }
    const i = e => {
      var t = new Date();
      return (
        t.setTime(e),
        [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(r).join("-")
      );
    };
    function o() {
      var e = Date.parse(new Date());
      return (e /= 1e3), new Date(1e3 * (e + 86400)).toISOString();
    }
  },
  32: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      i = n(0);
    var o = n(3);
    async function s(e, t) {
      console.log(`event : ${JSON.stringify(e)}`);
      try {
        const n = e.request.user.id,
          s = e.data;
        console.log(`withdraw - user_id : ${n}，money：${s}`);
        let u = await r.j.get(n),
          c = u.data;
        !(function(e, t) {
          if (!Number.isInteger(e / i.c.MONEY_UNIT))
            throw new Error(i.d.WITHDRAW_NOT_INTEGER);
          if (
            e > i.c.WITHDRAW_MAX * i.c.MONEY_UNIT ||
            e < i.c.WITHDRAW_MIN * i.c.MONEY_UNIT
          )
            throw new Error(i.d.WITHDRAW_NOT_IN_RANGE);
          if (t < e) throw new Error(i.d.WITHDRAW_INSUFFICIENT_BALANCE);
        })(s, c.balance),
          console.log(`withdraw - before - userRes : ${JSON.stringify(u)}`);
        let a = r.k.create(),
          f = Object(o.a)(Date.now()),
          _ = await a
            .set({ balance: s, date: f, user_id: n, nickname: c.nickname })
            .save();
        console.log(`withdraw - createObject ret: ${JSON.stringify(_)}`);
        let l = r.j.getWithoutData(n);
        l.incrementBy("balance", -s);
        let E = await l.update();
        console.log(`withdraw - after - userUpdateRet : ${JSON.stringify(E)}`),
          t(null, i.f.WITHDRAW_CREATE_SUCCESS);
      } catch (e) {
        console.log(e), t(e);
      }
    }
    n.d(t, "default", function() {
      return s;
    });
  },
  4: function(e, t, n) {
    var r;
    !(function(i) {
      "use strict";
      var o,
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
      function O(e, t, n, r) {
        var i = e.c,
          o = e.e + t + 1;
        if (o < i.length) {
          if (1 === n) r = i[o] >= 5;
          else if (2 === n)
            r =
              i[o] > 5 ||
              (5 == i[o] && (r || o < 0 || i[o + 1] !== R || 1 & i[o - 1]));
          else if (3 === n) r = r || !!i[0];
          else if (((r = !1), 0 !== n)) throw Error(T);
          if (o < 1)
            (i.length = 1), r ? ((e.e = -t), (i[0] = 1)) : (i[0] = e.e = 0);
          else {
            if (((i.length = o--), r))
              for (; ++i[o] > 9; ) (i[o] = 0), o-- || (++e.e, i.unshift(1));
            for (o = i.length; !i[--o]; ) i.pop();
          }
        } else if (n < 0 || n > 3 || n !== ~~n) throw Error(T);
        return e;
      }
      function h(e, t, n, r) {
        var i,
          o,
          s = e.constructor,
          u = !e.c[0];
        if (n !== R) {
          if (n !== ~~n || n < (3 == t) || n > c)
            throw Error(3 == t ? l + "precision" : E);
          for (
            n = r - (e = new s(e)).e,
              e.c.length > ++r && O(e, n, s.RM),
              2 == t && (r = e.e + n + 1);
            e.c.length < r;

          )
            e.c.push(0);
        }
        if (
          ((i = e.e),
          (n = (o = e.c.join("")).length),
          2 != t && (1 == t || (3 == t && r <= i) || i <= s.NE || i >= s.PE))
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
        return e.s < 0 && (!u || 4 == t) ? "-" + o : o;
      }
      (d.abs = function() {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (d.cmp = function(e) {
          var t,
            n = this,
            r = n.c,
            i = (e = new n.constructor(e)).c,
            o = n.s,
            s = e.s,
            u = n.e,
            c = e.e;
          if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -s : 0;
          if (o != s) return o;
          if (((t = o < 0), u != c)) return (u > c) ^ t ? 1 : -1;
          for (s = (u = r.length) < (c = i.length) ? u : c, o = -1; ++o < s; )
            if (r[o] != i[o]) return (r[o] > i[o]) ^ t ? 1 : -1;
          return u == c ? 0 : (u > c) ^ t ? 1 : -1;
        }),
        (d.div = function(e) {
          var t = this,
            n = t.constructor,
            r = t.c,
            i = (e = new n(e)).c,
            o = t.s == e.s ? 1 : -1,
            s = n.DP;
          if (s !== ~~s || s < 0 || s > c) throw Error(E);
          if (!i[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return new n(0 * o);
          var u,
            a,
            f,
            _,
            l,
            T = i.slice(),
            d = (u = i.length),
            p = r.length,
            h = r.slice(0, u),
            A = h.length,
            g = e,
            I = (g.c = []),
            D = 0,
            N = s + (g.e = t.e - e.e) + 1;
          for (g.s = o, o = N < 0 ? 0 : N, T.unshift(0); A++ < u; ) h.push(0);
          do {
            for (f = 0; f < 10; f++) {
              if (u != (A = h.length)) _ = u > A ? 1 : -1;
              else
                for (l = -1, _ = 0; ++l < u; )
                  if (i[l] != h[l]) {
                    _ = i[l] > h[l] ? 1 : -1;
                    break;
                  }
              if (!(_ < 0)) break;
              for (a = A == u ? i : T; A; ) {
                if (h[--A] < a[A]) {
                  for (l = A; l && !h[--l]; ) h[l] = 9;
                  --h[l], (h[A] += 10);
                }
                h[A] -= a[A];
              }
              for (; !h[0]; ) h.shift();
            }
            (I[D++] = _ ? f : ++f),
              h[0] && _ ? (h[A] = r[d] || 0) : (h = [r[d]]);
          } while ((d++ < p || h[0] !== R) && o--);
          return (
            I[0] || 1 == D || (I.shift(), g.e--),
            D > N && O(g, s, n.RM, h[0] !== R),
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
            n,
            r,
            i,
            o = this,
            s = o.constructor,
            u = o.s,
            c = (e = new s(e)).s;
          if (u != c) return (e.s = -c), o.plus(e);
          var a = o.c.slice(),
            f = o.e,
            _ = e.c,
            l = e.e;
          if (!a[0] || !_[0])
            return _[0] ? ((e.s = -c), e) : new s(a[0] ? o : 0);
          if ((u = f - l)) {
            for (
              (i = u < 0) ? ((u = -u), (r = a)) : ((l = f), (r = _)),
                r.reverse(),
                c = u;
              c--;

            )
              r.push(0);
            r.reverse();
          } else
            for (
              n = ((i = a.length < _.length) ? a : _).length, u = c = 0;
              c < n;
              c++
            )
              if (a[c] != _[c]) {
                i = a[c] < _[c];
                break;
              }
          if (
            (i && ((r = a), (a = _), (_ = r), (e.s = -e.s)),
            (c = (n = _.length) - (t = a.length)) > 0)
          )
            for (; c--; ) a[t++] = 0;
          for (c = t; n > u; ) {
            if (a[--n] < _[n]) {
              for (t = n; t && !a[--t]; ) a[t] = 9;
              --a[t], (a[n] += 10);
            }
            a[n] -= _[n];
          }
          for (; 0 === a[--c]; ) a.pop();
          for (; 0 === a[0]; ) a.shift(), --l;
          return a[0] || ((e.s = 1), (a = [(l = 0)])), (e.c = a), (e.e = l), e;
        }),
        (d.mod = function(e) {
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
        (d.plus = d.add = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
          if (i != o) return (e.s = -o), n.minus(e);
          var s = n.e,
            u = n.c,
            c = e.e,
            a = e.c;
          if (!u[0] || !a[0]) return a[0] ? e : new r(u[0] ? n : 0 * i);
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
            n = new t.constructor(1),
            r = n,
            i = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(l + "exponent");
          for (i && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return i ? n.div(r) : r;
        }),
        (d.round = function(e, t) {
          var n = this.constructor;
          if (e === R) e = 0;
          else if (e !== ~~e || e < -c || e > c) throw Error(E);
          return O(new n(this), e, t === R ? n.RM : t);
        }),
        (d.sqrt = function() {
          var e,
            t,
            n,
            r = this,
            i = r.constructor,
            o = r.s,
            s = r.e,
            u = new i(0.5);
          if (!r.c[0]) return new i(r);
          if (o < 0) throw Error(_ + "No square root");
          0 === (o = Math.sqrt(r + "")) || o === 1 / 0
            ? (((t = r.c.join("")).length + s) & 1 || (t += "0"),
              (s = (((s + 1) / 2) | 0) - (s < 0 || 1 & s)),
              (e = new i(
                ((o = Math.sqrt(t)) == 1 / 0
                  ? "1e"
                  : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s
              )))
            : (e = new i(o)),
            (s = e.e + (i.DP += 4));
          do {
            (n = e), (e = u.times(n.plus(r.div(n))));
          } while (n.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
          return O(e, (i.DP -= 4), i.RM);
        }),
        (d.times = d.mul = function(e) {
          var t,
            n = this,
            r = n.constructor,
            i = n.c,
            o = (e = new r(e)).c,
            s = i.length,
            u = o.length,
            c = n.e,
            a = e.e;
          if (((e.s = n.s == e.s ? 1 : -1), !i[0] || !o[0]))
            return new r(0 * e.s);
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
          function t(n) {
            var r = this;
            if (!(r instanceof t)) return n === R ? e() : new t(n);
            n instanceof t
              ? ((r.s = n.s), (r.e = n.e), (r.c = n.c.slice()))
              : (function(e, t) {
                  var n, r, i;
                  if (0 === t && 1 / t < 0) t = "-0";
                  else if (!p.test((t += ""))) throw Error(l + "number");
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
            (t.prototype = d),
            (t.DP = s),
            (t.RM = u),
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
  }
}).default;

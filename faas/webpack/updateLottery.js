exports.main = (function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var u = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var u in t)
          n.d(
            r,
            u,
            function(e) {
              return t[e];
            }.bind(null, u)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 29))
  );
})({
  0: function(t, e, n) {
    "use strict";
    n.d(e, "e", function() {
      return r;
    }),
      n.d(e, "d", function() {
        return u;
      }),
      n.d(e, "f", function() {
        return _;
      }),
      n.d(e, "g", function() {
        return a;
      }),
      n.d(e, "a", function() {
        return o;
      }),
      n.d(e, "h", function() {
        return s;
      }),
      n.d(e, "b", function() {
        return i;
      }),
      n.d(e, "c", function() {
        return c;
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
      u = {
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
      _ = { WITHDRAW_CREATE_SUCCESS: "提现申请成功" },
      a = {
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
      o = "5d7917899d8da5229c037105",
      s = {
        LOTTERY_TYPE_PRODUCT: "实物抽奖",
        LOTTERY_TYPE_MONEY: "现金抽奖",
        WITHDRAW: "提现",
        APPROVED: "审批通过",
        REJECTED: "审批不通过"
      },
      i = { LUCKY_RATIO_INVITATION: "lucky_ratio_invitation" },
      c = {
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
  1: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return a;
    }),
      n.d(e, "f", function() {
        return o;
      }),
      n.d(e, "i", function() {
        return s;
      }),
      n.d(e, "e", function() {
        return i;
      }),
      n.d(e, "c", function() {
        return c;
      }),
      n.d(e, "d", function() {
        return E;
      }),
      n.d(e, "j", function() {
        return T;
      }),
      n.d(e, "b", function() {
        return d;
      }),
      n.d(e, "k", function() {
        return R;
      }),
      n.d(e, "l", function() {
        return l;
      }),
      n.d(e, "n", function() {
        return O;
      }),
      n.d(e, "o", function() {
        return A;
      }),
      n.d(e, "m", function() {
        return p;
      }),
      n.d(e, "g", function() {
        return I;
      }),
      n.d(e, "h", function() {
        return f;
      });
    var r = n(0);
    const u = 100,
      _ = 5074,
      a = "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA",
      o = "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
      s = new BaaS.TableObject(r.g.USER_LOTTERY_RECORD),
      i = new BaaS.TableObject(r.g.LOTTERY),
      c = new BaaS.TableObject(r.g.CONFIG),
      E = new BaaS.TableObject(r.g.ERROR),
      T = new BaaS.User(),
      d = new BaaS.TableObject(r.g.BALANCE_LUCKY_RECORD),
      R = new BaaS.TableObject(r.g.WITHDRAW);
    async function l(t) {
      let e = new BaaS.Query();
      return (
        e.compare("lottery", "=", i.getWithoutData(t)), s.setQuery(e).count()
      );
    }
    async function O() {
      let t = new BaaS.Query();
      return (
        t.compare("status", "=", r.c.APPROVED),
        i
          .setQuery(t)
          .limit(u)
          .find()
      );
    }
    async function A(t) {
      let e = new BaaS.Query();
      if ("78355122" == t)
        return console.log("inAdminGroup : cloudAdmin call..."), !0;
      e.in("_group", [_]);
      let n = await T.setQuery(e).find(),
        r = !1;
      for (let e of n.data.objects)
        if (e.id === t) {
          r = !0;
          break;
        }
      return r;
    }
    async function p(t) {
      return (await c.get(r.a)).data[t];
    }
    const I = { ADD_INVITER: "邀请好友，增加运气值" },
      f = {
        ...(() => {
          let t = [],
            e = [];
          for (let n = 0; n < 1e3; n++) n % 2 == 0 ? t.push(n) : e.push(n);
          return { LUCKY_SEED_HONGBAO: t, LUCKY_SEED_FUDAI: e };
        })()
      };
  },
  29: function(t, e, n) {
    t.exports = n(30);
  },
  30: function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function() {
        return _;
      });
    var r = n(1),
      u = n(0);
    async function _(t, e) {
      try {
        const { id: n } = t.data;
        let _ = t.data,
          a = (await r.e.get(n)).data;
        if (a.status !== u.c.REJECTED && a.status !== u.c.WAIT_APPROVE)
          throw new Error("status状态错误，lottery.status - ${lottery.status}");
        let o = r.e.getWithoutData(n);
        o.set({
          url: _.url,
          product_num: parseInt(_.product_num),
          product_name: _.product_name,
          sponsor: _.sponsor,
          pic_data: _.pic_data,
          tag_items: _.tag_items,
          desc_initiator: _.desc_initiator,
          show_in_main: _.show_in_main,
          status: u.c.WAIT_APPROVE
        }),
          e(null, await o.update());
      } catch (t) {
        console.log(t), e(t);
      }
    }
  }
}).default;

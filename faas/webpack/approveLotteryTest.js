exports.main = (function(e) {
  var t = {};
  function n(_) {
    if (t[_]) return t[_].exports;
    var r = (t[_] = { i: _, l: !1, exports: {} });
    return e[_].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, _) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: _ });
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
      var _ = Object.create(null);
      if (
        (n.r(_),
        Object.defineProperty(_, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            _,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return _;
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
    n((n.s = 11))
  );
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
      return _;
    }),
      n.d(t, "d", function() {
        return r;
      }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "g", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return E;
      }),
      n.d(t, "h", function() {
        return T;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return o;
      });
    const _ = {
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
      r = {
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
      u = { WITHDRAW_CREATE_SUCCESS: "提现申请成功" },
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
      E = "5d7917899d8da5229c037105",
      T = {
        LOTTERY_TYPE_PRODUCT: "实物抽奖",
        LOTTERY_TYPE_MONEY: "现金抽奖",
        WITHDRAW: "提现",
        APPROVED: "审批通过",
        REJECTED: "审批不通过"
      },
      s = { LUCKY_RATIO_INVITATION: "lucky_ratio_invitation" },
      o = {
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
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return E;
      }),
      n.d(t, "e", function() {
        return T;
      });
    var _ = n(0);
    const r = new wx.BaaS.TableObject(_.g.USER_LOTTERY_RECORD),
      u = new wx.BaaS.TableObject(_.g.LOTTERY),
      a = new wx.BaaS.TableObject(_.g.BALANCE_LUCKY_RECORD),
      E = new wx.BaaS.TableObject(_.g.CONFIG),
      T = new wx.BaaS.User();
    new wx.BaaS.TableObject(_.g.DAILY_CHECKIN),
      new wx.BaaS.TableObject(_.g.QUESTIONS),
      new wx.BaaS.TableObject(_.g.WITHDRAW),
      new wx.BaaS.TableObject(_.g.ADDRESS_BOOK);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(12);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return u;
      });
    var _ = n(2),
      r = n(0);
    async function u(e, t) {
      console.log(`event : ${JSON.stringify(e)}`);
      try {
        const { id: n, status: u } = e.data;
        e.request.user.id;
        if (u !== r.c.REJECTED && u !== r.c.APPROVED)
          throw new Error("status状态错误");
        if ((await _.c.get(n)).data.status !== r.c.WAIT_APPROVE)
          throw new Error("抽奖未支付");
        let a = _.c.getWithoutData(n);
        a.set({ status: u }), t(null, await a.update());
      } catch (e) {
        console.log(e), t(e);
      }
    }
  }
]).default;

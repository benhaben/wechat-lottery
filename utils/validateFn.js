import { CONST, ERR_TYPE } from "./constants";

export function vWithdrawMoney(money, balance) {
  if (!Number.isInteger(money / CONST.MONEY_UNIT)) {
    throw new Error(ERR_TYPE.WITHDRAW_NOT_INTEGER);
  } else if (
    money > CONST.WITHDRAW_MAX * CONST.MONEY_UNIT ||
    money < CONST.WITHDRAW_MIN * CONST.MONEY_UNIT
  ) {
    throw new Error(ERR_TYPE.WITHDRAW_NOT_IN_RANGE);
  } else if (balance < money) {
    throw new Error(ERR_TYPE.WITHDRAW_INSUFFICIENT_BALANCE);
  }
}

export function vAddUpdateLotteryParam(data) {
  if (!data.sponsor) {
    throw new Error("请输入赞助商");
  }

  if (!data.product_name) {
    throw new Error("请输入奖品名称");
  }

  if (!data.product_num || data.product_num < 1) {
    throw new Error("请输入奖品数目");
  }
}

export function vAddUpdateMoneyLotteryParam(data) {
  if (!data.total_prize || data.total_prize < 0.1) {
    throw new Error("请输入金额");
  }

  if (!data.open_people_num || data.open_people_num < 1) {
    throw new Error("请输入开奖人数");
  }
}

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
  let ret = true;
  if (!data.sponsor) {
    throw new Error("请输入赞助商");
  }

  if (!data.product_name) {
    throw new Error("请输入奖品名称");
    ret = false;
  }

  if (!data.product_num) {
    throw new Error("请输入奖品数目");
  }
}

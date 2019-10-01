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

/**
 *  scene总共就32个字符，user_id 14个，lottery_id 只能用剩下的18个
 * @param user_id
 * @param lottery_id
 * @returns {string}
 */
export function genSceneOfAttendPage(user_id, lottery_id) {
  let _lottery_id = lottery_id.substr(0, 18);
  let scene = `${user_id}${_lottery_id}`;
  return scene;
}

export function deSceneOfAttendPage(scene) {
  let sceneStr = decodeURIComponent(scene);
  let inviter_uid = sceneStr.substring(0, 14);
  let lottery_id = sceneStr.substring(14, 32);
  return {
    inviter_uid,
    lottery_id
  };
}

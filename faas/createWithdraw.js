import { WITHDRAW_TABLE, USER_TABLE } from "./common/index";
import { vWithdrawMoney } from "../miniprogram/utils/validateFn";
import { CONST, SUCCESS_TYPE } from "../miniprogram/utils/constants";
import { formatDate } from "../miniprogram/utils/function";

// {
//   "money":20,
//   "request":{"user":{"id":"94581109019031"}}
// }

/**
 * 提现
 * 1. 减去用户余额
 * 2. 增加用户提现审批，相当于冻结一部分钱 status = 0，在 WITHDRAW_TABLE
 * 3. 管理员审批，打钱给用户，在 balance_lucky_record 记一笔账，后面对账用 balance_lucky_record 就可以（在审批函数）
 *
 * 注意：余额增加是红包开奖，那个是触发器自动更新的，这边不用触发器了，触发器更新需要手动，还不如这边写代码
 * https://doc.minapp.com/cloud-function/node-sdk/wx-promotion-transfer.html
 * @param event
 * @param callback
 * @returns {Promise<void>}
 */
export default async function createWithdraw(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const user_id = event.request.user.id;
    const money = event.data;

    console.log(`withdraw - user_id : ${user_id}，money：${money}`);

    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;

    vWithdrawMoney(money, user.balance);

    console.log(`withdraw - before - userRes : ${JSON.stringify(userRes)}`);

    // 没有事务，顺序很重要
    let createObject = WITHDRAW_TABLE.create();
    let date = formatDate(Date.now());
    let ret = await createObject
      .set({
        balance: money,
        date,
        user_id,
        nickname: user.nickname
      })
      .save();

    console.log(`withdraw - createObject ret: ${JSON.stringify(ret)}`);

    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.incrementBy("balance", -money);
    let userUpdateRet = await userUpdate.update();
    console.log(
      `withdraw - after - userUpdateRet : ${JSON.stringify(userUpdateRet)}`
    );

    callback(null, SUCCESS_TYPE.WITHDRAW_CREATE_SUCCESS);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

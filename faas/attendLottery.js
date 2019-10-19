import {
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  BALANCE_LUCKY_RECORD_TABLE
} from "./common";
import { CONST, ERR_TYPE } from "../utils/constants";
/**
 * 参加抽奖，需要在 user_lottery_record 增加一条记录，记录参与者，参与的抽奖，中奖的权重
 * @param event
 * @param callback
 * @returns {Promise<void>}
 *
 */

// let testData = {
//   lottery_id: "5d83933a866d04242107d925",
//   weight: 0,
//   request: { user: { id: "81550584324453" } }
// };

export default async function attendLottery(event, callback) {
  const { lottery_id, weight } = event.data;
  const user_id = event.request.user.id;

  try {
    let cost = weight;
    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;
    console.log(`user : ${JSON.stringify(user)}`);

    //TODO: 没有事务，感觉不保险；参数配置在云端
    let reason;
    if (cost === 0) {
      reason = `参与抽奖，减少${CONST.ATTEND_LOTTERY_COST}运气值`;
      cost = CONST.ATTEND_LOTTERY_COST;
    } else {
      reason = `参与抽奖，减少${CONST.ATTEND_LOTTERY_COST}运气值，增加权重减少${cost}运气值`;
      cost = CONST.ATTEND_LOTTERY_COST + cost;
    }
    console.log(`cost : ${cost}`);

    if (user.lucky_num < cost) {
      throw new Error(ERR_TYPE.OUT_OF_LUCKY_NUM);
    }

    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.incrementBy("lucky_num", -cost);
    let userUpdateRet = await userUpdate.update();
    console.log(`userUpdateRet : ${JSON.stringify(userUpdateRet)}`);

    const createBalanceRecord = BALANCE_LUCKY_RECORD_TABLE.create();
    let createBalanceRecordRet = await createBalanceRecord
      .set({
        reason,
        lucky_num: -cost,
        user_id: user_id,
        lottery_id: lottery_id
      })
      .save();
    console.log(
      `createBalanceRecordRet : ${JSON.stringify(createBalanceRecordRet)}`
    );

    let lottery = LOTTERY_TABLE.getWithoutData(lottery_id);
    const createUserLotteryObject = USER_LOTTERY_RECORD_TABLE.create();
    let createUserLotteryRet = await createUserLotteryObject
      .set({
        user_id,
        user: userUpdate,
        nickname: user.nickname,
        avatar_cache: user.avatar,
        lottery,
        weight
      })
      .save();
    console.log(
      `createUserLotteryRet : ${JSON.stringify(createUserLotteryRet)}`
    );

    callback(null, true);
  } catch (e) {
    callback(e);
  }
}

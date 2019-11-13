import {
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  BALANCE_LUCKY_RECORD_TABLE
} from "./common";
import { CONST, ERR_TYPE } from "../utils/constants";
/**
 * 增加抽奖权重
 * 1. 增加的权重要算出来
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

export default async function addWeight(event, callback) {
  const { lottery_id, weight, attend_id } = event.data;
  const user_id = event.request.user.id;

  try {
    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;
    console.log(`cost : ${weight}，user : ${JSON.stringify(user)}`);
    let reason = `增加权重减少${weight}运气值`;

    if (user.lucky_num < weight) {
      throw new Error(ERR_TYPE.OUT_OF_LUCKY_NUM);
    }

    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.incrementBy("lucky_num", -weight);
    let userUpdateRet = await userUpdate.update();
    console.log(`userUpdateRet : ${JSON.stringify(userUpdateRet)}`);

    const createBalanceRecord = BALANCE_LUCKY_RECORD_TABLE.create();
    let createBalanceRecordRet = await createBalanceRecord
      .set({
        reason,
        lucky_num: -weight,
        user_id: user_id,
        lottery_id: lottery_id
      })
      .save();
    console.log(
      `createBalanceRecordRet : ${JSON.stringify(createBalanceRecordRet)}`
    );

    const updateUserLotteryObject = USER_LOTTERY_RECORD_TABLE.getWithoutData(
      attend_id
    );
    updateUserLotteryObject.incrementBy("weight", weight);
    let updateUserLotteryRet = await updateUserLotteryObject.update();
    console.log(
      `updateUserLotteryRet : ${JSON.stringify(updateUserLotteryRet)}`
    );

    callback(null, true);
  } catch (e) {
    callback(e);
  }
}

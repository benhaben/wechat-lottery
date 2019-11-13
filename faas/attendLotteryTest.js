import {
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  BALANCE_LUCKY_RECORD_TABLE
} from "../miniprogram/utils/table";
import { CONST, ERR_TYPE } from "../miniprogram/utils/constants";
/**
 * 参加抽奖，需要在 user_lottery_record 增加一条记录，记录参与者，参与的抽奖，中奖的权重
 * @param event
 * @param callback
 * @returns {Promise<void>}
 *
 */
export default async function attendLottery(event, callback) {
  const { lottery_id, weight } = event.data;
  const user_id = event.request.user.id;

  // let testData = {
  //   lottery_id: "5d83933a866d04242107d925",
  //   weight: 0,
  //   request: { user: { id: "81550584324453" } }
  // };

  try {
    let cost = weight;
    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;

    //TODO: 没有事务，感觉不保险；参数配置在云端
    let reason;
    if (cost === 0) {
      reason = `参与抽奖，减少${CONST.ATTEND_LOTTERY_COST}运气值`;
      cost = CONST.ATTEND_LOTTERY_COST;
    } else {
      reason = `参与抽奖，减少${CONST.ATTEND_LOTTERY_COST}运气值，增加权重减少${cost}运气值`;
      cost = CONST.ATTEND_LOTTERY_COST + cost;
    }

    if (user.lucky_num < cost) {
      throw new Error(ERR_TYPE.OUT_OF_LUCKY_NUM);
    }

    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.incrementBy("lucky_num", -cost);
    await userUpdate.update();
    const createBalanceRecord = BALANCE_LUCKY_RECORD_TABLE.create();
    await createBalanceRecord
      .set({
        reason,
        lucky_num: -cost,
        user_id: user_id,
        lottery_id: lottery_id
      })
      .save();

    let lottery = LOTTERY_TABLE.getWithoutData(lottery_id);
    const createObject = USER_LOTTERY_RECORD_TABLE.create();
    let ret = await createObject
      .set({
        user_id,
        user: userUpdate,
        nickname: user.data.nickname,
        avatar_cache: user.data.avatar,
        lottery,
        weight
      })
      .save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
}

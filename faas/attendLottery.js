import { TABLE_ID } from "../utils/constants";

/**
 * 参加抽奖，需要在 user_lottery_record 增加一条记录，记录参与者，参与的抽奖，中奖的权重
 * @param event
 * @param callback
 * @returns {Promise<void>}
 */
exports.main = async function createLottery(event, callback) {
  const lottery = event.data;

  try {
    const tableObject = new BaaS.TableObject(TABLE_ID.LOTTERY);
    const createObject = tableObject.create();
    let ret = await createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

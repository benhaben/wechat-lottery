import { WITHDRAW_TABLE } from "./common";
import { CONST } from "../utils/constants";

/**
 * 提现
 * @param event
 * @param callback
 * @returns {Promise<void>}
 */
export default async function withdraw(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const user_id = event.request.user.id;
    const { money } = event.data;

    console.log(`user_id : ${user_id}，money：${money}`);

    let create = WITHDRAW_TABLE.create();
    let ret = await createObject
      .set({
        balance: money
      })
      .save();
    callback(null, ret);
    callback(null, false);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

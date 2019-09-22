import { LOTTERY_TABLE } from "./common";
import { CONST } from "../utils/constants";

/**
 * 判断是否是管理员
 * @param event
 * @param callback
 * @returns {Promise<void>}
 */
export default async function isAdmin(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const user_id = event.request.user.id;
    console.log(`user_id : ${user_id}`);
    if (user_id == 87829981979003 || user_id == 81550584324453) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

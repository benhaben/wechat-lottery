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
    // 人多了使用用户组管理
    // https://doc.minapp.com/cloud-function/node-sdk/user.html#%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E7%BB%84%E4%B8%8B%E7%9A%84%E7%94%A8%E6%88%B7
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

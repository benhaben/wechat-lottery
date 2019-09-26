import { LOTTERY_TABLE, USER_TABLE, ADMIN_GROUP_ID } from "./common";
import { CONST } from "../utils/constants";

/**
 * 判断是否是管理员
 * https://doc.minapp.com/cloud-function/node-sdk/user.html#%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E7%BB%84%E4%B8%8B%E7%9A%84%E7%94%A8%E6%88%B7
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

    let query = new BaaS.Query();

    // 查询用户组 [123, 456, 789] 下的用户
    query.in("_group", [ADMIN_GROUP_ID]);

    let adminRes = await USER_TABLE.setQuery(query).find();
    let isAdmin = false;
    for (let item of adminRes.data.objects) {
      if (item.id === user_id) {
        isAdmin = true;
        break;
      }
    }
    callback(null, isAdmin);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

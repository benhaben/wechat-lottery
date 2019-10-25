import { inAdminGroup } from "./common/index";

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
    console.log(`isAdmin user_id : ${user_id}`);
    // 人多了使用用户组管理
    let isAdmin = await inAdminGroup(user_id);
    console.log(`isAdmin  inAdminGroup result : ${isAdmin}`);
    callback(null, isAdmin);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

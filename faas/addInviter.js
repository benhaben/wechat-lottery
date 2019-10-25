import { CONFIG_KEY, ERR_TYPE } from "../miniprogram/utils/constants";
import {
  BALANCE_LUCKY_RECORD_TABLE,
  getConfigByKey,
  RECORD_CREATE_REASON,
  USER_TABLE
} from "./common/index";

/**
 * 增加100运气值给inviter_uid
 * @param inviter_uid
 * @param user_id
 * @returns {Promise<string|*>}
 */

export default async function addInviter(event, callback) {
  console.log(`addInviter event : ${JSON.stringify(event)}`);
  try {
    const inviter_uid = parseInt(event.data);
    const user_id = parseInt(event.request.user.id);
    console.log(
      `addInviter inviter_uid : ${inviter_uid} - user_id : ${user_id}`
    );
    if (user_id === inviter_uid) {
      throw new Error(ERR_TYPE.ADD_INVITER_ID_SAME);
    }

    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;

    if (!user) {
      throw new Error(ERR_TYPE.UID_NOT_EXIST);
    }

    if (user.inviter_uid) {
      throw new Error(ERR_TYPE.ADD_INVITER_UID_EXIST);
    }

    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.set("inviter_uid", inviter_uid);
    let ret = await userUpdate.update();
    console.log(`addInviter userUpdate.update() ret : ${JSON.stringify(ret)} `);

    let userInviterUpdate = USER_TABLE.getWithoutData(inviter_uid);
    let lucky_ratio_invitation = await getConfigByKey(
      CONFIG_KEY.LUCKY_RATIO_INVITATION
    );
    userInviterUpdate.incrementBy("lucky_num", lucky_ratio_invitation);
    let retInviterUpdateRet = await userInviterUpdate.update();
    console.log(
      `addInviter userInviterUpdate.incrementBy ret : ${JSON.stringify(
        retInviterUpdateRet
      )} - lucky_ratio_invitation : ${lucky_ratio_invitation}`
    );

    let record = {
      reason: RECORD_CREATE_REASON.ADD_INVITER,
      lucky_num: lucky_ratio_invitation,
      user_id: inviter_uid
    };
    console.log(
      `addInviter createBalanceRecord parameter : ${JSON.stringify(record)} `
    );
    const createBalanceRecord = BALANCE_LUCKY_RECORD_TABLE.create();
    let createBalanceRecordRet = await createBalanceRecord.set(record).save();
    console.log(
      `addInviter createBalanceRecord ret : ${JSON.stringify(
        createBalanceRecordRet
      )} `
    );

    callback(null, true);
  } catch (e) {
    console.log(e);
    callback(e, e.message);
  }
}

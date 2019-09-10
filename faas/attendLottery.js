import { TABLE_ID } from "../utils/constants";

/**
 * 参加抽奖，需要在 user_lottery_record 增加一条记录，记录参与者，参与的抽奖，中奖的权重
 * @param event
 * @param callback
 * @returns {Promise<void>}
 */
exports.main = async function attendLottery(event, callback) {
  const { lottery_id, weight } = event.data;
  const user_id = event.request.user.id;

  //TODO: 验证参数，有足够的运气值去增加权重

  try {
    let MyUser = new BaaS.User();
    let user = await MyUser.get(user_id);
    console.log(`user : ${user}`);
    const lotterytableObject = new BaaS.TableObject(TABLE_ID.LOTTERY);
    let lottery = lotterytableObject.getWithoutData(lottery_id);
    const recordtableObject = new BaaS.TableObject(
      TABLE_ID.USER_LOTTERY_RECORD
    );
    const createObject = recordtableObject.create();
    let ret = await createObject
      .set({
        user: MyUser.getWithoutData(user_id),
        avatar: user.data.avatar,
        nickname: user.data.nickname,
        lottery,
        weight
      })
      .save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

import { TABLE_ID } from "../miniprogram/utils/constants";

exports.main = async function initConfig(event, callback) {
  try {
    const tableObject = new BaaS.TableObject(TABLE_ID.CONFIG);
    const createObject = tableObject.create();
    let ret = await createObject
      .set({
        lucky_cost_per: 1,
        weight_per_lucky: 2,
        lucky_ratio_lucky_package: 10, // 每个福袋运气值 = 开奖金额 * 该值
        lucky_ratio_invitation: 100 // 邀请朋友增加此数值运气值
      })
      .save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

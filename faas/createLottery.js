import { TABLE_NAME } from "../utils/constants";

exports.main = async function createLottery(event, callback) {
  const lottery = event.data;

  //TODO : 验证参数
  try {
    const tableObject = new BaaS.TableObject(TABLE_NAME.LOTTERY);
    const createObject = tableObject.create();
    let ret = await createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

import { TABLE_ID } from "../utils/constants";

exports.main = async function createLottery(event, callback) {
  const lottery = event.data;

  //TODO : 验证参数
  try {
    const tableObject = new BaaS.TableObject(TABLE_ID.LOTTERY);
    const createObject = tableObject.create();
    let ret = createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

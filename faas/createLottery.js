import { TABLE_ID } from "../utils/constants";

/**
 * 创建抽奖和抽奖订单云函数
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 */

exports.main = async function createLottery(event, callback) {
  const lottery = event.data;

  //TODO : 验证参数
  // open_date 需要是明天，不接受客户端值，在服务端生成
  // total_prize 需要是规定数值
  // 开奖运气值需要是规定算法算出的值 total_prize * 100
  // 福袋运气值需要是规定算法算出的值 total_prize * 10
  // plan_index 在范围内
  // plan 和 plan_index对应
  // open_people_num 在规定返回内
  // status默认是0，不接受客户端值

  try {
    const tableObject = new BaaS.TableObject(TABLE_ID.LOTTERY);
    const createObject = tableObject.create();
    let ret = await createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

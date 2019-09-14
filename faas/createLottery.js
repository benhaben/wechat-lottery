import { CONST } from "../utils/constants";
import { LOTTERY_TABLE } from "./common";

/**
 * 创建抽奖和抽奖订单云函数
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值，
 */

export default async function createLottery(event, callback) {
  const lottery = event.data;
  const user_id = event.request.user.id;

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
    lottery.lucky_num_open =
      lottery.lucky_num * (CONST.LUCKY_RATIO_SUCCESS / CONST.LUCKY_RATIO_OPEN);
    lottery.created_by = user_id;
    const createObject = LOTTERY_TABLE.create();
    let ret = await createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
}

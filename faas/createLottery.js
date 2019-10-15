import { CONST, ERR_TYPE } from "../utils/constants";
import { LOTTERY_TABLE } from "./common";

/**
 * 创建抽奖和抽奖订单云函数
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值。
 * 0是调用createLottery产生的，
 * 1是支付回调verifyPayment改的，
 * 2是管理员修改的，为了保证status安全，虽然approveLottery比较简单，也在云函数实现，status设置为只读
 * 3是checkLotteryStatusOpen中，开奖的时候修改的
 */

export default async function createLottery(event, callback) {
  const lottery = event.data;
  const user_id = event.request.user.id;

  //TODO : 验证参数
  // open_date 需要是明天，不接受客户端值，在服务端生成
  // total_prize 需要是规定数值
  // open_people_num 在规定返回内
  // status默认是0，不接受客户端值

  try {
    lottery.created_by = user_id;
    if (lottery.open_people_num < 0 || lottery.total_prize < 0) {
      throw new Error(ERR_TYPE.INVALID_PARAM);
    }
    if (
      lottery.lottery_type === CONST.LOTTERY_TYPE_PRODUCT &&
      !lottery.show_in_main
    ) {
      console.log("！！实物抽奖不上首页，不需要支付！！");
      lottery.status = CONST.WAIT_APPROVE;
    } else {
      // 需要等待verifyPayment把状态改成WAIT_APPROVE
      lottery.status = CONST.WAIT_PAY;
    }

    // 改成免费版本
    lottery.status = CONST.WAIT_APPROVE;

    const createObject = LOTTERY_TABLE.create();
    let ret = await createObject.set(lottery).save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
}

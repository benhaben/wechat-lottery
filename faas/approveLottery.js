import { LOTTERY_TABLE } from "./common";

/**
 * 修改状态到2
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值。
 * 0是调用createLottery产生的，
 * 1是支付回调verifyPayment改的，
 * 2是管理员修改的，为了保证status安全，虽然approveLottery比较简单，也在云函数实现，status设置为只读
 * 3是checkLotteryStatusOpen中，开奖的时候修改的
 */

export default async function approveLottery(event, callback) {
  console.log(`event.data : ${event.data}`);
  const id = event.data;

  try {
    let lotteryRecord = LOTTERY_TABLE.getWithoutData(id);
    lotteryRecord.set({ status: 2 });
    return lotteryRecord.update();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
}

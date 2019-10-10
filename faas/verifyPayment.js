/** 校验并更新订单状态云函数 **/
import { LOTTERY_TABLE, ERROR_TABLE } from "./common";
import { CONST } from "../utils/constants";

/**
 * 支付成功之后，由触发器自动调用 verifyPayment 云函数，校验实付金额是否跟该商品的价格一致，若一致则更新该订单为已支付状态。
 *
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值。
 * 0是调用createLottery产生的，
 * 1是支付回调verifyPayment改的，
 * 2是管理员修改的，为了保证status安全，虽然approveLottery比较简单，也在云函数实现，status设置为只读
 * 3是checkLotteryStatusOpen中，开奖的时候修改的
 */

// {
//   "merchandise_record_id": "5d87a1a255c8572edfdfa860",
//   "merchandise_schema_id": 81873,
//   "merchandise_snapshot": "bcaaQCrHXF",
//   "paid_at": 5776413110,
//   "royalpay_order_no": "L58oTMw16A",
//   "total_cost": 0.1,
//   "trade_no": "Ze51AL8l2a",
//   "transaction_no": "OKTViaJ3Oq",
//   "updated_at": "2019-09-23T00:37:48.447258"
// }
export default async function verifyPayment(event, callback) {
  console.log(`verifyPayment event.data: ${JSON.stringify(event.data)}`);

  const data = event.data;
  const totalCost = data.total_cost;
  const lotteryId = data.merchandise_record_id;
  const transactionNo = data.transaction_no;
  // const merchandiseSnapshot = data.merchandise_snapshot;
  // const lotteryId = merchandiseSnapshot.id;

  try {
    const query = new BaaS.Query();
    let resLottery = await LOTTERY_TABLE.get(lotteryId);
    let lottery = resLottery.data;
    if (lottery && lottery.total_prize === totalCost * CONST.MONEY_UNIT) {
      let lotteryUpdate = LOTTERY_TABLE.getWithoutData(lotteryId);
      lotteryUpdate.set("status", CONST.WAIT_APPROVE);
      lotteryUpdate.set("transaction_no", transactionNo);
      let updateRes = await lotteryUpdate.update();
      callback(null, updateRes);
    } else {
      let want = lottery.total_prize / CONST.MONEY_UNIT;
      let err = {
        error: `支付金额和抽奖金额不一致：want - ${want} | actual - ${totalCost}`,
        action: "verifyPayment",
        created_by: lottery.created_by,
        lottery: LOTTERY_TABLE.getWithoutData(lotteryId)
      };
      const createObject = ERROR_TABLE.create();
      let ret = await createObject.set(err).save();
      callback(new Error(JSON.stringify(err)));
    }
  } catch (e) {
    callback(e);
  }
}

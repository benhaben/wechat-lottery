/** 校验并更新订单状态云函数 **/
import { LOTTERY_TABLE, ERROR_TABLE } from "./common";

/**
 * 1. 调用  createLottery 云函数创建订单
 * 2. 拿到创建订单成功的回调数据后，发起支付（客户端才能发起支付）
 * 3. 支付成功之后，由触发器自动调用 verifyPayment 云函数，校验实付金额是否跟该商品的价格一致，若一致则更新该订单为已支付状态。
 * @param event
 * @param callback
 */
export default async function verifyPayment(event, callback) {
  console.log(`verifyPayment event.data: ${JSON.stringify(event.data)}`);

  try {
    const data = event.data;
    const totalCost = data.total_cost;
    // const lotteryId = data.merchandise_record_id;
    const transactionNo = data.transaction_no;
    const merchandiseSnapshot = data.merchandise_snapshot;
    const lotteryId = merchandiseSnapshot.id;
    const query = new BaaS.Query();
    let resLottery = await LOTTERY_TABLE.get(lotteryId);
    let lottery = resLottery.data;
    if (lottery && lottery.total_prize === totalCost) {
      let lotteryUpdate = LOTTERY_TABLE.getWithoutData(lotteryId);
      lotteryUpdate.set("status", 1);
      lotteryUpdate.set("transaction_no", transactionNo);
      let updateRes = await lotteryUpdate.update();
      callback(null, updateRes);
    } else {
      let err = {
        error: "支付金额和抽奖金额不一致",
        action: "verifyPayment",
        created_by: lottery.created_by,
        lottery: tableObjectLottery.getWithoutData(lotteryId)
      };
      const createObject = ERROR_TABLE.create();
      let ret = await createObject.set(err).save();
      callback(new Error(JSON.stringify(err)));
    }
  } catch (e) {
    let err = {
      error: `verifyPayment event.data: ${JSON.stringify(
        event.data
      )} - Error: ${e.message}`,
      action: "verifyPayment"
    };
    const createObject = ERROR_TABLE.create();
    let ret = await createObject.set(err).save();
    callback(new Error(JSON.stringify(err)));
  }
}

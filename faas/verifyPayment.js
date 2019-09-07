/** 校验并更新订单状态云函数 **/
import { TABLE_NAME } from "../utils/constants";

const lotteryTableId = TABLE_NAME.LOTTERY;
const orderTableId = TABLE_NAME.ORDER;
const errorTableId = TABLE_NAME.ERROR;

/**
 * 1. 调用  createOrder 云函数创建订单
 * 2. 拿到创建订单成功的回调数据后，发起支付
 * 3. 支付成功之后，由触发器自动调用 verifyPayment 云函数，校验实付金额是否跟该商品的价格一致，若一致则更新该订单为已支付状态。
 * @param event
 * @param callback
 */
exports.main = async function verifyPayment(event, callback) {
  console.log(`verifyPayment event.data: ${JSON.stringify(event.data)}`);

  try {
    const data = event.data;
    const totalCost = data.total_cost;
    const orderId = data.merchandise_record_id;
    const transactionNo = data.transaction_no;
    const merchandiseSnapshot = data.merchandise_snapshot;
    const lotteryId = merchandiseSnapshot.id;
    const tableObjectLottery = new BaaS.TableObject(lotteryTableId);
    const query = new BaaS.Query();
    query.compare("id", "=", lotteryId);
    let resLottery = await tableObjectLottery.setQuery(query).find();

    let lottery = resLottery.data.objects[0];

    if (lottery && lottery.total_prize === totalCost) {
      const tableObject = new BaaS.TableObject(orderTableId);
      const record = tableObject.getWithoutData(orderId);
      record.set("status", "paid");
      record.set("transaction_no", transactionNo);
      let updateRes = await record.update();
      callback(null, updateRes);
    } else {
      let tableError = new BaaS.TableObject(errorTableId);
      let err = {
        error: "支付金额和抽奖金额不一致",
        action: "verifyPayment",
        created_by: lottery.created_by,
        lottery: tableObjectLottery.getWithoutData(lotteryId)
      };
      const createObject = tableError.create();
      let ret = await createObject.set(err).save();
      callback(new Error(JSON.stringify(err)));
    }
  } catch (e) {
    let tableError = new BaaS.TableObject(errorTableId);
    let err = {
      error: `verifyPayment event.data: ${JSON.stringify(
        event.data
      )} - Error: ${e.message}`,
      action: "verifyPayment"
    };
    const createObject = tableError.create();
    let ret = await createObject.set(err).save();
    callback(new Error(JSON.stringify(err)));
  }
};

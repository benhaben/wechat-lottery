import { LOTTERY_TABLE } from "./common";
import { CONST } from "../utils/constants";
/**
 * 修改抽奖，修改状态到 2
 * 1 -> 2 支付完成以后，还没有审批，可以修改
 * -1 -> 2 审批驳回以后，修改
 */

export default async function updateLottery(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const { id } = event.data;
    let lotteryUpdate = event.data;

    let resLottery = await LOTTERY_TABLE.get(id);
    let lottery = resLottery.data;
    if (
      !(
        lottery.status === CONST.REJECTED ||
        lottery.status === CONST.WAIT_APPROVE
      )
    ) {
      throw new Error("status状态错误，lottery.status - ${lottery.status}");
    }

    let lotteryRecord = LOTTERY_TABLE.getWithoutData(id);
    lotteryRecord.set({
      product_num: lotteryUpdate.product_num,
      product_name: lotteryUpdate.product_name,
      sponsor: lotteryUpdate.sponsor,
      pic_data: lotteryUpdate.pic_data,
      tag_items: lotteryUpdate.tag_items,
      desc_initiator: lotteryUpdate.desc_initiator,
      status: CONST.WAIT_APPROVE
    });
    let ret = await lotteryRecord.update();
    callback(null, ret);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

import { LOTTERY_TABLE } from "./common";
import { CONST } from "../utils/constants";
/**
 * 修改状态到2
 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中，审批不过状态为-1）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值。
 * 0是调用createLottery产生的，
 * 1是支付回调verifyPayment改的，
 * 2是管理员修改的，为了保证status安全，虽然approveLottery比较简单，也在云函数实现，status设置为只读
 * 3是checkLotteryStatusOpen中，开奖的时候修改的
 */

// {
//   "id":"5d83295f09e085798d1879ef",
//     "status":2,
//   "request":{"user":{"id":"81550584324453"}}
// }

export default async function approveLottery(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const { id, status } = event.data;
    const user_id = event.request.user.id;

    // 状态只能从1到2或者从1到-1
    if (!(status === CONST.REJECTED || status === CONST.APPROVED)) {
      throw new Error("status状态错误");
    }

    let resLottery = await LOTTERY_TABLE.get(id);
    let lottery = resLottery.data;
    if (lottery.status !== CONST.WAIT_APPROVE) {
      throw new Error("抽奖未支付");
    }

    let lotteryRecord = LOTTERY_TABLE.getWithoutData(id);
    lotteryRecord.set({ status: status });
    let ret = await lotteryRecord.update();

    // TODO：驳回通知用户，到修改界面；成功，到参加抽奖页面
    // let data = {
    //   recipient_type: "user_list",
    //   user_list: [id],
    //   template_id: "EESiZK3g7xV0xtTYQWaCBhl-s6ElflHpD1Gqsfn6-6E",
    //   submission_type: "form_id",
    //   page: `pages/win_lottery/win_lottery?id=${lottery.id}`,
    //   keywords: {
    //     keyword1: {
    //       value: `${lottery.nickname}发起的抽奖`
    //     },
    //     keyword2: {
    //       value: "恭喜你，已经抽中红包"
    //     },
    //     keyword3: {
    //       value: `${formatDate(Date.now())}`
    //     },
    //     keyword4: {
    //       value: `${lottery.id}`
    //     }
    //   }
    // };
    //
    //  BaaS.sendTemplateMessage(data);
    callback(null, ret);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

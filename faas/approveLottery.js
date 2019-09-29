import { APPROVE_TEMPLATE_ID, inAdminGroup, LOTTERY_TABLE } from "./common";
import { CONST, ERR_TYPE, ROUTE, WORD_LIST } from "../utils/constants";
import { formatDate } from "../utils/function";

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
//   "request":{"user":{"id":"94581109019031"}}
// }

export default async function approveLottery(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const { id, status } = event.data;
    const user_id = event.request.user.id;
    let isAdmin = await inAdminGroup(user_id);

    if (!isAdmin) {
      throw new Error(ERR_TYPE.INSUFFICIENT_AUTHORITY);
    }
    // 状态只能从1到2或者从1到-1
    if (!(status === CONST.REJECTED || status === CONST.APPROVED)) {
      throw new Error(ERR_TYPE.APPROVE_LOTTERY_STATUS_ERROR);
    }

    let resLottery = await LOTTERY_TABLE.get(id);
    let lottery = resLottery.data;

    if (lottery.status === CONST.APPROVED) {
      throw new Error(ERR_TYPE.APPROVED);
    } else if (lottery.status !== CONST.WAIT_APPROVE) {
      throw new Error(ERR_TYPE.NOT_PAID);
    }

    let lotteryRecord = LOTTERY_TABLE.getWithoutData(id);
    lotteryRecord.set({ status: status });
    let ret = await lotteryRecord.update();

    // 驳回通知用户，到修改界面；成功，到参加抽奖页面
    let data;
    const TEMPLATE_ID = APPROVE_TEMPLATE_ID;
    let content =
      lottery.lottery_type == CONST.LOTTERY_TYPE_MONEY
        ? WORD_LIST.LOTTERY_TYPE_MONEY
        : WORD_LIST.LOTTERY_TYPE_PRODUCT;

    if (status === CONST.REJECTED) {
      let route =
        lottery.lottery_type == CONST.LOTTERY_TYPE_MONEY
          ? ROUTE.ADD_LOTTERY
          : ROUTE.ADD_PRODUCT_LOTTERY;

      let result = WORD_LIST.REJECTED;
      let dateStr = `${formatDate(Date.now())}`;
      data = {
        recipient_type: "user_list",
        user_list: [user_id],
        template_id: TEMPLATE_ID,
        submission_type: "form_id",
        page: `${route}?id=${lottery.id}`,
        keywords: {
          keyword1: {
            value: `${lottery.id}`
          },
          keyword3: {
            value: result
          },
          keyword2: {
            value: content
          },
          keyword4: {
            value: dateStr
          }
        }
      };
    } else if (status === CONST.APPROVED) {
      let route = ROUTE.ATTEND_LOTTERY;
      let result = WORD_LIST.APPROVED;
      let dateStr = `${formatDate(Date.now())}`;
      data = {
        recipient_type: "user_list",
        user_list: [user_id],
        template_id: TEMPLATE_ID,
        submission_type: "form_id",
        page: `${route}?id=${lottery.id}`,
        keywords: {
          keyword1: {
            value: `${lottery.id}`
          },
          keyword3: {
            value: result
          },
          keyword2: {
            value: content
          },
          keyword4: {
            value: dateStr
          }
        }
      };
    }

    console.log(
      `approveLottery - sendTemplateMessage data : ${JSON.stringify(data)}`
    );
    BaaS.sendTemplateMessage(data);
    callback(null, ret);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

import {
  APPROVE_TEMPLATE_ID,
  inAdminGroup,
  LOTTERY_TABLE,
  WITHDRAW_TABLE
} from "./common/index";
import {
  CONST,
  ERR_TYPE,
  ROUTE,
  WORD_LIST
} from "../miniprogram/utils/constants";
import { formatDate } from "../miniprogram/utils/function";

/**
 * 修改状态到1
 * 状态变化是： status ： (0,提交提现审核，等待）->（1，审核通过）
 *                                          ->（-1，驳回)
 * 1是管理员修改的，为了保证status安全，在云函数实现，status设置为只读
 */

// {
//   "id":"5d83295f09e085798d1879ef",
//     "status":2,
//   "request":{"user":{"id":"94581109019031"}}
// }

export default async function approveWithdraw(event, callback) {
  console.log(`event : ${JSON.stringify(event)}`);

  try {
    const { id, status } = event.data;
    const user_id = event.request.user.id;
    let isAdmin = await inAdminGroup(user_id);

    if (!isAdmin) {
      throw new Error(ERR_TYPE.INSUFFICIENT_AUTHORITY);
    }
    // 状态只能从0开始，到1或者-1
    if (
      !(status === CONST.WITHDRAW_APPROVE || status === CONST.WITHDRAW_REJECT)
    ) {
      throw new Error(ERR_TYPE.WITHDRAW_STATUS_ERROR);
    }

    let resWithdraw = await WITHDRAW_TABLE.get(id);
    let withdraw = resWithdraw.data;

    if (withdraw.status === CONST.WITHDRAW_APPROVE) {
      throw new Error(ERR_TYPE.WITHDRAW_APPROVED);
    } else if (withdraw.status !== CONST.WITHDRAW_WAIT_APPROVE) {
      throw new Error(ERR_TYPE.WITHDRAW_STATUS_CURRENT_ERROR);
    }

    let withdrawRecord = WITHDRAW_TABLE.getWithoutData(id);
    withdrawRecord.set({ status: status });
    let ret = await withdrawRecord.update();
    console.log(
      `approveWithdraw - withdrawRecord.update - ret : ${JSON.stringify(ret)}`
    );

    // 驳回通知用户，到修改界面；成功，到参加抽奖页面
    const TEMPLATE_ID = APPROVE_TEMPLATE_ID;
    let content = WORD_LIST.WITHDRAW;
    let route = ROUTE.USER;
    let result;
    if (status === CONST.WITHDRAW_REJECT) {
      result = WORD_LIST.REJECTED;
    } else if (status === CONST.APPROVED) {
      result = WORD_LIST.APPROVED;
    }
    let dateStr = `${formatDate(Date.now())}`;
    let data = {
      recipient_type: "user_list",
      user_list: [user_id],
      template_id: TEMPLATE_ID,
      submission_type: "form_id",
      page: `${route}`,
      keywords: {
        keyword1: {
          value: `${id}`
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
    console.log(
      `approveWithdraw - sendTemplateMessage data : ${JSON.stringify(data)}`
    );
    BaaS.sendTemplateMessage(data);
    callback(null, ret);
  } catch (e) {
    console.log(e);
    callback(e);
  }
}

import { FUNCTION_NAME, PAGE_SIZE, CONST } from "./constants";

import {
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  DAILY_CHECKIN_TABLE,
  BALANCE_LUCKY_RECORD_TABLE
} from "./table";
import { formatDate } from "./function";
export default {
  /**
   * 为了安全在服务端创建抽奖
   * @param data
   * @returns {Promise<*>}
   */
  async createLottery(lottery) {
    let ret = await wx.BaaS.invokeFunction(
      FUNCTION_NAME.CREATE_LOTTERY,
      lottery
    );
    return ret.data.data;
  },

  /**
   * 为了安全在服务端参与抽奖，减少运气值
   * @param data
   * @returns {Promise<*>}
   */
  async attendLottery(data) {
    let ret = await wx.BaaS.invokeFunction(FUNCTION_NAME.ATTEND_LOTTERY, data);
    return ret.data.data;
  },

  async approveLottery(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let lotteryRecord = LOTTERY_TABLE.getWithoutData(id);
    lotteryRecord.set({ status: 2 });
    return lotteryRecord.update();
  },

  async getLottery(limit = PAGE_SIZE, offset = 0) {
    let query = new wx.BaaS.Query();
    query.compare("status", "=", 2);
    return LOTTERY_TABLE.setQuery(query)
      .limit(limit)
      .offset(offset)
      .find();
  },

  async getLotteryById(id = "") {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    return LOTTERY_TABLE.get(id);
  },

  /**
   * 从参加抽奖记录表拿抽奖记录，拿到说明参加过了，拿不到说明没参加过
   * @param id
   * @param user_id
   * @returns {Promise<*|NodePath<Node>|number|bigint|T|T>}
   */
  async getUserLotteryRecordByLotteryIdAndUserId(id = "", user_id = "") {
    if (!id || !user_id) {
      throw TypeError("id or user invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    query.compare("user", "=", USER_TABLE.getWithoutData(user_id));
    return USER_LOTTERY_RECORD_TABLE.setQuery(query)
      .expand(["user", "lottery"])
      .find();
  },

  async getLotteryAttendees(id = "", limit = PAGE_SIZE, offset = 0) {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    return USER_LOTTERY_RECORD_TABLE.setQuery(query)
      .select(["avatar_cache"])
      .expand(["user"])
      .limit(limit)
      .offset(offset)
      .find();
  },

  /**
   * 返回参与者的头像
   * @param id
   * @param reslut - CONST.GET_HONGBAO | CONST.GET_FUDAI
   * @param limit
   * @param offset
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async getAttendeesByResult(
    id = "",
    reslut = CONST.GET_HONGBAO,
    limit = 8,
    offset = 0
  ) {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    query.compare("lottery_result", "=", reslut);

    return USER_LOTTERY_RECORD_TABLE.setQuery(query)
      .select(["avatar_cache"])
      .expand(["user"])
      .limit(limit)
      .offset(offset)
      .find();
  },

  /**
   * 下拉减少运气值，需要在服务端做，感觉没必要，因为参与抽奖需要消耗运气值，尽量减少计算，减少复杂度
   * @param luckyNum
   * @param user_id
   * @returns {Promise<void>}
   */
  async reduceLuckyNum(luckyNum, user_id) {
    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.incrementBy("lucky_num", CONST.GET_MORE_REDUCE_LUCKY_NUM);
    return userUpdate.update();
  },

  async addInviter(inviter_uid, user_id) {
    let userRes = await USER_TABLE.get(user_id);
    let user = userRes.data;
    if (user && !user.inviter_uid) {
      let userUpdate = USER_TABLE.getWithoutData(user_id);
      userUpdate.set("inviter_uid", parseInt(inviter_uid));
      return userUpdate.update();
    } else {
      return "inviter_uid exist";
    }
  },

  async dailyCheckin(user_id) {
    let ret;
    try {
      let date = formatDate(Date.now());
      const createObject = DAILY_CHECKIN_TABLE.create();
      ret = await createObject
        .set({
          user_id,
          date
        })
        .save();
    } catch (e) {
      console.log(e);
    }
    return ret;
  },

  async getLuckyDetails(user_id, limit = PAGE_SIZE, offset = 0) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);
    query.exists("lucky_num");

    return BALANCE_LUCKY_RECORD_TABLE.setQuery(query)
      .select(["created_at", "reason", "lucky_num"])
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  async getBalanceDetails(user_id, limit = PAGE_SIZE, offset = 0) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);
    query.exists("balance");

    return BALANCE_LUCKY_RECORD_TABLE.setQuery(query)
      .select(["created_at", "reason", "balance"])
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  /**
   * 邀请的下线
   */
  async getFriends(user_id, limit = PAGE_SIZE, offset = 0) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("inviter_uid", "=", user_id);
    return USER_TABLE.setQuery(query)
      .select(["created_at", "avatar", "nickname"])
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  }
};

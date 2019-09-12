import {
  FUNCTION_NAME,
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  PAGE_SIZE
} from "./constants";

export default {
  /**
   * 为了安全在服务端创建抽奖
   * @param data
   * @returns {Promise<*>}
   */
  async createLottery(data) {
    let ret = await wx.BaaS.invokeFunction(FUNCTION_NAME.CREATE_LOTTERY, data);
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

  async getLottery(offset) {
    let query = new wx.BaaS.Query();
    query.compare("status", "=", 2);
    return LOTTERY_TABLE.setQuery(query)
      .limit(PAGE_SIZE)
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

  async getLotteryAttendees(id = "") {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    return USER_LOTTERY_RECORD_TABLE.setQuery(query)
      .select(["avatar"])
      .expand(["user"])
      .limit(8)
      .offset(0)
      .find();
  }
};

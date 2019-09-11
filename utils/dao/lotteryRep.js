import { TABLE_ID, FUNCTION_NAME } from "../constants";

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
    debugger;
    return ret.data.data;
  },

  async approveLottery(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let Lottery = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let lotteryRecord = Lottery.getWithoutData(id);
    lotteryRecord.set({ status: 2 });
    return lotteryRecord.update();
  },

  async getLottery(offset) {
    let Lottery = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let query = new wx.BaaS.Query();
    return Lottery.setQuery(query)
      .limit(8)
      .offset(offset)
      .find();
  },

  async getLotteryById(id = "") {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    let lotteryTable = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    return lotteryTable.get(id);
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
    let tableObject = new wx.BaaS.TableObject(TABLE_ID.USER_LOTTERY_RECORD);
    let lotteryTable = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", lotteryTable.getWithoutData(id));
    let uerTable = new wx.BaaS.User();
    query.compare("user", "=", uerTable.getWithoutData(user_id));
    return tableObject
      .setQuery(query)
      .expand(["user", "lottery"])
      .find();
  },

  async getLotteryAttendees(id = "") {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    let tableObject = new wx.BaaS.TableObject(TABLE_ID.USER_LOTTERY_RECORD);
    let lotteryTable = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", lotteryTable.getWithoutData(id));
    return tableObject
      .setQuery(query)
      .select(["avatar"])
      .expand(["user"])
      .limit(8)
      .offset(0)
      .find();
  }
};

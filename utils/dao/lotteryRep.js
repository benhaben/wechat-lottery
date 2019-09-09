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

  async getLottery() {
    let Lottery = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let query = new wx.BaaS.Query();
    return Lottery.setQuery(query)
      .limit(8)
      .find();
  },

  async getLotteryById(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let Lottery = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
    let query = new wx.BaaS.Query();
    query.compare("id", "=", id);
    return Lottery.setQuery(query).find();
  }
};

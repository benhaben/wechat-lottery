import { TABLE_NAME } from "../utils/constants";

export default {
  async createLottery(data) {
    // 通过 `tableName` 实例化一个 `TableObject` 对象，操作该对象即相当于操作对应的数据表
    let Lottery = new wx.BaaS.TableObject(TABLE_NAME.LOTTERY);

    // 本地创建一条空记录
    let lottery = Lottery.create(); // lottery 为 TableRecord 实例

    // 为上面创建的空记录赋值，并保存到服务器，save() 方法返回一个 Promise 对象
    return lottery.set(data).save();
  },

  async approveLottery(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let Lottery = new wx.BaaS.TableObject(TABLE_NAME.LOTTERY);
    let lotteryRecord = Lottery.getWithoutData(id);
    lotteryRecord.set({ status: 2 });
    return lotteryRecord.update();
  },

  async getLottery() {
    let Lottery = new wx.BaaS.TableObject(TABLE_NAME.LOTTERY);
    let query = new wx.BaaS.Query();
    return Lottery.setQuery(query)
      .limit(8)
      .find();
  },

  async getLotteryById(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let Lottery = new wx.BaaS.TableObject(TABLE_NAME.LOTTERY);
    let query = new wx.BaaS.Query();
    query.compare("id", "=", id);
    return Lottery.setQuery(query).find();
  }
};

import { FUNCTION_NAME, CONST } from "./constants";

import {
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  USER_TABLE,
  DAILY_CHECKIN_TABLE,
  BALANCE_LUCKY_RECORD_TABLE,
  QUESTIONS_TABLE,
  WITHDRAW_TABLE,
  ADDRESS_BOOK_TABLE
} from "./table";
import { formatDate } from "./function";
import { PAGE_SIZE } from "./uiConstants";
export default {
  /**
   * 增加100运气值给inviter_uid
   * @param inviter_uid
   * @param user_id
   * @returns {Promise<string|*>}
   */
  async addInviter(inviter_uid) {
    let ret = await wx.BaaS.invokeFunction(
      FUNCTION_NAME.ADD_INVITER,
      inviter_uid
    );
    console.log(ret);
    return ret.data;
  },

  async getAddressByUserId(user_id) {
    console.log(`createOrUpdateAddress - user_id : ${user_id}`);

    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);

    let addressRes = await ADDRESS_BOOK_TABLE.select([
      "user_id",
      "user_name",
      "postal_code",
      "province_name",
      "city_name",
      "county_name",
      "detail_info",
      "national_code",
      "national_code"
    ])
      .setQuery(query)
      .find();
    let address = addressRes.data.objects[0];
    return address;
  },

  async createOrUpdateAddress(data, user_id) {
    console.log(
      `createOrUpdateAddress - data : ${JSON.stringify(
        data
      )} - user_id : ${user_id}`
    );

    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);
    let addressRes = await ADDRESS_BOOK_TABLE.setQuery(query).find();
    let address = addressRes.data.objects[0];
    let ret;
    if (address) {
      let updateObject = ADDRESS_BOOK_TABLE.getWithoutData(address.id);

      updateObject.set({
        user_id,
        user_name: data.userName,
        postal_code: data.postalCode,
        province_name: data.provinceName,
        city_name: data.cityName,
        county_name: data.countyName,
        detail_info: data.detailInfo,
        national_code: data.nationalCode,
        tel_number: data.telNumber
      });

      ret = await updateObject.update();
    } else {
      let createObject = ADDRESS_BOOK_TABLE.create();
      createObject.set({
        user_id,
        user_name: data.userName,
        postal_code: data.postalCode,
        province_name: data.provinceName,
        city_name: data.cityName,
        county_name: data.countyName,
        detail_info: data.detailInfo,
        national_code: data.nationalCode,
        tel_number: data.telNumber
      });

      ret = await createObject.save();
    }
    console.log(`createOrUpdateAddress - ${JSON.stringify(ret)}`);
    return ret;
  },
  /**
   * 创建提现申请
   * @param money
   * @returns {Promise<*>}
   */
  async createWithdraw(money) {
    let ret = await wx.BaaS.invokeFunction(
      FUNCTION_NAME.CREATE_WITHDRAW,
      money
    );
    return ret.data;
  },

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
   * 是否是管理员，有审批权限
   * @param lottery
   * @returns {Promise<*>}
   */
  async isAdmin() {
    let ret = await wx.BaaS.invokeFunction(FUNCTION_NAME.IS_ADMIN);
    return ret.data;
  },

  /**
   * 更新抽奖的宣传信息，状态从-1改为2
   * @param lottery
   * @returns {Promise<*>}
   */
  async updateLottery(lottery) {
    let ret = await wx.BaaS.invokeFunction(
      FUNCTION_NAME.UPDATE_LOTTERY,
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

  // 客户端不能修改，移到服务端
  async approveLottery(id = "", status = 2) {
    if (!id && (status === CONST.REJECTED || status === CONST.APPROVED)) {
      //TODO: 使用const里面的errtype
      throw TypeError("id invalid or status");
    }
    let ret = await wx.BaaS.invokeFunction(FUNCTION_NAME.APPROVE_LOTTERY, {
      id,
      status
    });
    return ret.data.data;
  },

  async approveWithdraw(id = "", status = 1) {
    if (
      !id &&
      (status === CONST.WITHDRAW_REJECT || status === CONST.WITHDRAW_APPROVE)
    ) {
      throw TypeError("id invalid or status");
    }
    let ret = await wx.BaaS.invokeFunction(FUNCTION_NAME.APPROVE_WITHDRAW, {
      id,
      status
    });
    return ret.data.data;
  },

  /**
   * 获取抽奖列表
   * @param limit
   * @param offset
   * @param status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async getLottery(limit = PAGE_SIZE, offset = 0, status = 2) {
    let query = new wx.BaaS.Query();
    query.compare("status", "=", status);
    return LOTTERY_TABLE.setQuery(query)
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  async getWithdraw(limit = PAGE_SIZE, offset = 0, status = 0) {
    let query = new wx.BaaS.Query();
    query.compare("status", "=", status);
    return WITHDRAW_TABLE.setQuery(query)
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  /**
   * 自己发起的抽奖
   * @param limit
   * @param offset
   * @param status
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async getSendLotteries(limit = PAGE_SIZE, offset = 0, user_id) {
    let query = new wx.BaaS.Query();
    query.compare("created_by", "=", user_id);
    return LOTTERY_TABLE.setQuery(query)
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  /**
   * 参加的所有列表，USER_LOTTERY_RECORD_TABLE 中获取
   * @param limit
   * @param offset
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async getAllAttendLotteries(limit = PAGE_SIZE, offset = 0, user_id) {
    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);
    return USER_LOTTERY_RECORD_TABLE.select([
      "lottery_result",
      "weight",
      "lucky_num",
      "balance",
      "user_id",
      "lottery"
    ])
      .setQuery(query)
      .expand(["lottery"])
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  async getWinLotteries(limit = PAGE_SIZE, offset = 0, user_id) {
    let query = new wx.BaaS.Query();
    query.compare("user_id", "=", user_id);
    let queryFudai = new wx.BaaS.Query();
    queryFudai.compare("lottery_result", "=", CONST.GET_FUDAI);
    let queryHongbao = new wx.BaaS.Query();
    queryHongbao.compare("lottery_result", "=", CONST.GET_HONGBAO);

    let orQuery = wx.BaaS.Query.or(queryFudai, queryHongbao);
    let andQuery = wx.BaaS.Query.and(query, orQuery);

    return USER_LOTTERY_RECORD_TABLE.select([
      "lottery_result",
      "weight",
      "lucky_num",
      "balance",
      "user_id",
      "lottery"
    ])
      .setQuery(andQuery)
      .expand(["lottery"])
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },

  async queryLottery(limit = PAGE_SIZE, offset = 0, queryString) {
    let query = new wx.BaaS.Query();
    const regExp = new RegExp(`^${queryString}`, "i");
    query.matches("id_str", regExp);
    let query1 = new wx.BaaS.Query();
    const regExpNickname = new RegExp(`^${queryString}`, "i");
    query1.matches("nickname", regExpNickname);
    let orQuery = wx.BaaS.Query.or(query1, query);
    return LOTTERY_TABLE.setQuery(orQuery)
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },
  async queryWithdraw(limit = PAGE_SIZE, offset = 0, queryString) {
    let query = new wx.BaaS.Query();
    const regExpNickname = new RegExp(`^${queryString}`, "i");
    query.matches("nickname", regExpNickname);
    return WITHDRAW_TABLE.setQuery(query)
      .limit(limit)
      .offset(offset)
      .orderBy("-created_at")
      .find();
  },
  async getLotteryById(id = "") {
    if (!id) {
      throw TypeError("id or user invalid");
    }
    return LOTTERY_TABLE.get(id);
  },

  /**
   * 查询自己是否中奖，从参加抽奖记录表拿抽奖记录，拿到说明参加过了，拿不到说明没参加过
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

  async getWeightRate(id = "", weight = 0) {
    if (!id) {
      throw TypeError("id invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    query.compare("weight", ">=", weight);

    let count = await USER_LOTTERY_RECORD_TABLE.setQuery(query).count();

    if (count <= 50) {
      return "50名内";
    } else if (count <= 100) {
      return "100名内";
    } else if (count <= 200) {
      return "200名内";
    } else if (count <= 500) {
      return "500名内";
    } else {
      return "大于500名";
    }
  },

  /**
   * 用户是否参加了改抽奖
   * @param id
   * @param user_id
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async hasAttended(id = "", user_id = "") {
    if (!id || !user_id) {
      throw TypeError("id or user invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    query.compare("user", "=", USER_TABLE.getWithoutData(user_id));
    let retRes = await USER_LOTTERY_RECORD_TABLE.setQuery(query)
      .select(["id"])
      .limit(1)
      .find();
    let ret = false;
    if (retRes.data.objects.length === 1) {
      ret = true;
    }
    return ret;
  },

  /**
   * 查询实物中奖者
   * @param id
   * @returns {Promise<*|NodePath<Node>|number|bigint>}
   */
  async getProductWinnerByLotteryId(id = "") {
    if (!id) {
      throw TypeError("id invalid");
    }
    let query = new wx.BaaS.Query();
    query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
    query.compare("lottery_result", "=", CONST.GET_PRODUCT);
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
  async hasTodayCheckin(user_id) {
    let ret = false;
    try {
      let date = formatDate(Date.now());
      let query = new wx.BaaS.Query();
      query.compare("user_id", "=", user_id);
      query.compare("date", "=", date);
      let count = await DAILY_CHECKIN_TABLE.setQuery(query).count();
      if (count > 0) {
        ret = true;
      }
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
  },

  async saveTagItems(user_id, tag_items) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.set({ tag_items });
    return userUpdate.update();
  },

  async saveDesc(user_id, desc) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.set({ desc });
    return userUpdate.update();
  },

  async saveAdsData(user_id, pic_data) {
    if (!user_id) {
      throw TypeError("user_id invalid");
    }
    let userUpdate = USER_TABLE.getWithoutData(user_id);
    userUpdate.set({ pic_data });
    return userUpdate.update();
  },

  async getQuestions() {
    let query = new wx.BaaS.Query();
    return QUESTIONS_TABLE.select(["title", "content"])
      .setQuery(query)
      .orderBy("index")
      .find();
  }
};

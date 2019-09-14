/**
 * 服务端转用，BaaS不需要加wx.前缀
 */

import { TABLE_ID } from "../../utils/constants";

export const USER_LOTTERY_RECORD_TABLE = new BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new BaaS.TableObject(TABLE_ID.LOTTERY);
export const CONFIG_TABLE = new BaaS.TableObject(TABLE_ID.CONFIG);
export const ERROR_TABLE = new BaaS.TableObject(TABLE_ID.ERROR);
export const USER_TABLE = new BaaS.User();
export const BALANCE_LUCKY_RECORD_TABLE = new BaaS.TableObject(
  TABLE_ID.BALANCE_LUCKY_RECORD
);

export async function getAttendeesCount(id) {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
  return USER_LOTTERY_RECORD_TABLE.setQuery(query).count();
}

export async function getOpenedLottery() {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("status", "=", 2);
  return LOTTERY_TABLE.setQuery(query)
    .limit(10)
    .find();
}

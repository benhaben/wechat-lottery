import { TABLE_ID } from "../../utils/constants";

export const CONFIG_ID = "5d7917899d8da5229c037105";
export const USER_LOTTERY_RECORD_TABLE = new BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new BaaS.TableObject(TABLE_ID.LOTTERY);
export const CONFIG_TABLE = new BaaS.TableObject(TABLE_ID.CONFIG);
export const ERROR_TABLE = new BaaS.TableObject(TABLE_ID.ERROR);

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

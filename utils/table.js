import { TABLE_ID } from "./constants";

export const USER_LOTTERY_RECORD_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
export const CONFIG_TABLE = new wx.BaaS.TableObject(TABLE_ID.CONFIG);
export const ERROR_TABLE = new wx.BaaS.TableObject(TABLE_ID.ERROR);
export const USER_TABLE = new wx.BaaS.User();
export const BALANCE_LUCKY_RECORD_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.BALANCE_LUCKY_RECORD
);

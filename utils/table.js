import { TABLE_ID } from "./constants";

export const USER_LOTTERY_RECORD_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
export const CONFIG_TABLE = new wx.BaaS.TableObject(TABLE_ID.CONFIG);
export const USER_TABLE = new wx.BaaS.User();
export const DAILY_CHECKIN_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.DAILY_CHECKIN
);

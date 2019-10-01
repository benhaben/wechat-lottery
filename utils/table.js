import { TABLE_ID } from "./constants";

export const USER_LOTTERY_RECORD_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new wx.BaaS.TableObject(TABLE_ID.LOTTERY);
export const BALANCE_LUCKY_RECORD_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.BALANCE_LUCKY_RECORD
);
export const CONFIG_TABLE = new wx.BaaS.TableObject(TABLE_ID.CONFIG);
export const USER_TABLE = new wx.BaaS.User();
export const DAILY_CHECKIN_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.DAILY_CHECKIN
);
export const QUESTIONS_TABLE = new wx.BaaS.TableObject(TABLE_ID.QUESTIONS);
export const WITHDRAW_TABLE = new wx.BaaS.TableObject(TABLE_ID.WITHDRAW);
export const ADDRESS_BOOK_TABLE = new wx.BaaS.TableObject(
  TABLE_ID.ADDRESS_BOOK
);

import { TABLE_ID } from "./constants";
import func from "./function";

// let TABLE_ID = require("./constants").TABLE_ID;
// let openDateTimeStamp = require("./function").openDateTimeStamp;

export default async function checkLotteryStatus(event, callback) {
  // module.exports = async function checkLotteryStatus(event, callback) {
  console.log(`checkLotteryStatus - event: ${event}`);
  console.log(func.openDateTimeStamp());
  try {
    // 获取
    console.log(`openedLotteries: ${JSON.stringify(TABLE_ID)}`);
    callback(null, "success");
  } catch (e) {
    callback(e);
  }
}

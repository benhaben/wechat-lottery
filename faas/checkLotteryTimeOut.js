import { ERR_TYPE, TABLE_ID } from "../utils/constants";
import { openDateTimeStamp } from "../utils/function";
import {
  getAttendeesCount,
  getOpenedLottery,
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE
} from "./common";

export default async function checkLotteryStatus(event, callback) {
  console.log(`checkLotteryStatus - event: ${event}`);

  try {
    // 获取
    let ret = await getOpenedLottery();
    let openedLotteries = ret.data.objects;
    console.log(`openedLotteries: ${JSON.stringify(openedLotteries)}`);
    if (openedLotteries) {
      for (let lotteryIndex in openedLotteries) {
        console.log(
          `openedLotteries[lotteryIndex] - ${JSON.stringify(
            openedLotteries[lotteryIndex]
          )}`
        );
        let lottery = openedLotteries[lotteryIndex];
        let count = await getAttendeesCount(lottery.id);
        console.log(`getAttendeesCount: ${count}`);
        let time_end = Math.round(Date.parse(lottery.open_date) / 1000);
        let time_now = Math.round(new Date() / 1000);
        let time_distance = time_end - time_now;

        if (count < lottery.open_people_num && time_distance <= 0) {
          let time = openDateTimeStamp();
          console.log(
            `人数不够，时间已经到了，顺延24小时 - lottery.id: ${lottery.id}, time: ${time}`
          );

          // 人数不够，时间已经到了，顺延24小时。
          let lotteryUpdate = LOTTERY_TABLE.getWithoutData(lottery.id);
          lotteryUpdate.set("open_date", time);
          let updateRes = await lotteryUpdate.update();
          console.log(
            `openedLotteries[updateRes] - ${JSON.stringify(updateRes)}`
          );
        }
      }
      callback(null, "success");
    } else {
      callback(ERR_TYPE.GET_LOTTERY_FAILED);
    }
  } catch (e) {
    callback(e);
  }
}

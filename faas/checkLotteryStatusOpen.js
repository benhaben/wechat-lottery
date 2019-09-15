import { ERR_TYPE, CONFIG_ID, CONST } from "../utils/constants";
import { toFixed3 } from "../utils/function";
import {
  getOpenedLottery,
  getAttendeesCount,
  CONFIG_TABLE,
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  LUCKY_SEED_HONGBAO,
  LUCKY_SEED_FUDAI
} from "./common";

export default async function checkLotteryStatus(event, callback) {
  console.log(`checkLotteryStatus - event: ${event}`);

  try {
    // 获取
    let ret = await getOpenedLottery();
    let openedLotteries = ret.data.objects;
    console.log(
      `openedLotteries: ${JSON.stringify(openedLotteries.map(item => item.id))}`
    );
    if (openedLotteries) {
      let configRes = await CONFIG_TABLE.get(CONFIG_ID);
      let config = configRes.data;

      for (let lotteryIndex in openedLotteries) {
        let lottery = openedLotteries[lotteryIndex];
        let count = await getAttendeesCount(lottery.id);
        console.log(`getAttendeesCount: ${count}`);
        let time_end = Math.round(Date.parse(lottery.open_date) / 1000);
        let time_now = Math.round(new Date() / 1000);
        let time_distance = time_end - time_now;

        if (count >= lottery.open_people_num) {
          console.log(`开奖 - lottery.id: ${lottery.id}`);
          let lotteryUpdate = LOTTERY_TABLE.getWithoutData(lottery.id);

          // 更新 lottery status 为 3
          // 更新发起抽奖者的 user 表的 lucky_num，在触发器里面更新
          lotteryUpdate.set("status", 3);
          lotteryUpdate.update();

          // 随机抽出幸运儿，更新到 userLotteryTable lottery_result，更新幸运儿的 balance 或者运气值

          let index_hongbao = config.plans_lottery_package[lottery.plan_index];
          let seed_hongbao = LUCKY_SEED_HONGBAO.slice(0, index_hongbao);
          let price_per = Number(
            toFixed3(lottery.total_prize / CONST.HONHBAO_RATIO)
          );
          // 发起通知通知所有参与抽奖的用户已经开奖
          await updateUserLotteryRecords(
            seed_hongbao,
            lottery.id,
            1,
            price_per
          );

          let index_fudai = config.plans_lucky_package[lottery.plan_index];
          let seed_fudai = LUCKY_SEED_FUDAI.slice(0, index_fudai);

          await updateUserLotteryRecords(
            seed_fudai,
            lottery.id,
            2,
            lottery.lucky_num_per
          );
        } else if (count < lottery.open_people_num && time_distance <= 0) {
          // 已经有另一个触发器处理
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

/**
 * // 在某次特定抽奖活动中未中奖的参与人里，找到中奖 offset 的参与人记录，并更新其为中奖状态
 * @param offsets offset 数组
 * @param lotteryID
 * @return {Promise<*>}
 */
const updateUserLotteryRecords = async (offsets, lotteryID, status, value) => {
  let results = await Promise.all(
    offsets.map(offset => {
      let luckyQuery = new BaaS.Query();

      luckyQuery.compare(
        "lottery",
        "=",
        LOTTERY_TABLE.getWithoutData(lotteryID)
      );

      return USER_LOTTERY_RECORD_TABLE.setQuery(luckyQuery)
        .offset(offset)
        .limit(1)
        .orderBy("-weight")
        .find();
    })
  );
  // 取出 id
  let ids = results
    .map(ret => {
      return ret.data.objects.length ? ret.data.objects[0].id : null;
    })
    .filter(v => v);

  // 先根据 offsets 查出数据行 id，在通过数据行 id 更新数据行的 is_lucky & lottery_id 字段
  let luckyQuery = new BaaS.Query();
  // 通过 id in 查询来更新
  luckyQuery.in("id", ids);
  luckyQuery.compare("lottery_result", "=", 0);
  luckyQuery.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(lotteryID));
  let luckyRecord = USER_LOTTERY_RECORD_TABLE.getWithoutData(luckyQuery);
  if (status === 1) {
    luckyRecord.set("balance", value);
  } else {
    luckyRecord.set("lucky_num", value);
  }
  luckyRecord.set("lottery_result", status);
  return luckyRecord.update();
};

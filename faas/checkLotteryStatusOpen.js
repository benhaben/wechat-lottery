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
          await lotteryUpdate.update();

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
          debugger;
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

const updateUserLotteryRecords = async (offsets, lotteryID, status, value) => {
  let results = [];

  let luckyQuery = new BaaS.Query();
  luckyQuery.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(lotteryID));

  let rawResult = await USER_LOTTERY_RECORD_TABLE.setQuery(luckyQuery)
    .offset(0)
    .limit(1000)
    .orderBy("-weight")
    .find();
  let rawResultData = rawResult.data.objects;

  for (let i = 0; i < offsets.length; i++) {
    if (offsets[i] < rawResultData.length) {
      results.push(rawResultData[offsets[i]]);
    }
  }

  debugger;
  // 取出 id
  let ids = results.map(ret => {
    return ret.id;
  });

  if (ids.length <= 0) {
    return;
  }
  // 先根据 offsets 查出数据行 id，在通过数据行 id 更新数据行的 is_lucky & lottery_id 字段
  let luckyQueryUpdate = new BaaS.Query();
  // 通过 id in 查询来更新
  luckyQueryUpdate.in("id", ids);
  luckyQueryUpdate.compare("lottery_result", "=", 0);
  luckyQueryUpdate.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lotteryID)
  );
  let luckyRecord = USER_LOTTERY_RECORD_TABLE.getWithoutData(luckyQuery);
  if (status === 1) {
    console.log(`开奖 - 更新余额为${value} - 涉及以下 ids ：${ids}`);
    luckyRecord.set("balance", value);
  } else {
    console.log(`开奖 - 更新运气值为${value} - 涉及以下 ids ：${ids}`);
    luckyRecord.set("lucky_num", value);
  }
  luckyRecord.set("lottery_result", status);
  return luckyRecord.update();
};

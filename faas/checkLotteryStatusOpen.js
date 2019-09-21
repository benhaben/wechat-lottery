import { ERR_TYPE, CONFIG_ID, CONST } from "../utils/constants";
import { formatDate, toFixed3 } from "../utils/function";
import {
  getOpenedLottery,
  getAttendeesCount,
  CONFIG_TABLE,
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  LUCKY_SEED_HONGBAO,
  LUCKY_SEED_FUDAI
} from "./common";

export default async function checkLotteryStatusOpen(event, callback) {
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
          await updateUserLotteryRecords(seed_hongbao, lottery, 1, price_per);

          let index_fudai = config.plans_lucky_package[lottery.plan_index];
          let seed_fudai = LUCKY_SEED_FUDAI.slice(0, index_fudai);
          await updateUserLotteryRecords(
            seed_fudai,
            lottery,
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

const updateUserLotteryRecords = async (offsets, lottery, status, value) => {
  let results = [];

  let luckyQuery = new BaaS.Query();
  luckyQuery.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(lottery.id));

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
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );
  let luckyRecord = USER_LOTTERY_RECORD_TABLE.getWithoutData(luckyQuery);
  if (status === CONST.GET_HONGBAO) {
    luckyRecord.set("balance", value);
  } else {
    luckyRecord.set("lucky_num", value);
  }
  luckyRecord.set("lottery_result", status);
  let resUpdate = await luckyRecord.update();

  let updateIds = resUpdate.data.operation_result.map(item => item.success.id);
  let queryUserIds = new BaaS.Query();
  queryUserIds.in("id", updateIds);
  let userIdsRes = await USER_LOTTERY_RECORD_TABLE.setQuery(queryUserIds)
    .select("user_id")
    .find();
  let userIds = userIdsRes.data.objects.map(item => item.user_id);

  let data = {
    recipient_type: "user_list",
    user_list: userIds,
    template_id: "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
    submission_type: "form_id",
    page: `pages/win_lottery/win_lottery?id=${lottery.id}`,
    keywords: {
      keyword1: {
        value: `${lottery.nickname}发起的抽奖`
      },
      keyword2: {
        value: "恭喜你，已经抽中红包"
      },
      keyword3: {
        value: `${formatDate(Date.now())}`
      },
      keyword4: {
        value: `${lottery.id}`
      }
    }
  };

  return BaaS.sendTemplateMessage(data);
};

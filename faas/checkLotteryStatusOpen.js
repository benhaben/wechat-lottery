import { ERR_TYPE, CONFIG_ID, CONST } from "../utils/constants";
import { formatDate } from "../utils/function";
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
    console.log(`checkLotteryStatus - 1`);

    let openedLotteries = ret.data.objects;
    console.log(
      `checkLotteryStatus openedLotteries: ${JSON.stringify(
        openedLotteries.map(item => item.id)
      )}`
    );
    if (openedLotteries) {
      console.log(`checkLotteryStatus - 2`);

      let configRes = await CONFIG_TABLE.get(CONFIG_ID);
      let config = configRes.data;

      for (let lotteryIndex in openedLotteries) {
        console.log(`checkLotteryStatus - 3 for`);

        let lottery = openedLotteries[lotteryIndex];
        let count = await getAttendeesCount(lottery.id);
        console.log(`checkLotteryStatus - 3 getAttendeesCount: ${count}`);
        let time_end = Math.round(Date.parse(lottery.open_date) / 1000);
        let time_now = Math.round(new Date() / 1000);
        let time_distance = time_end - time_now;

        if (count >= lottery.open_people_num) {
          console.log(`checkLotteryStatus 4 -开奖 - lottery.id: ${lottery.id}`);

          let lotteryUpdate = LOTTERY_TABLE.getWithoutData(lottery.id);

          // 更新 lottery status 为 3
          // 更新发起抽奖者的 user 表的 lucky_num，在触发器里面更新
          lotteryUpdate.set("status", CONST.OPENED);
          await lotteryUpdate.update();

          if (lottery.lottery_type === CONST.LOTTERY_TYPE_PRODUCT) {
            // 实物抽奖
            console.log(
              `checkLotteryStatus 4 - 开奖实物抽奖 - lottery.product_name: ${lottery.product_name} - lottery.product_num: ${lottery.product_num}`
            );

            // 查看有几个奖品，生成offset
            let offsets = [];
            for (let i = 0; i < lottery.product_num; i++) {
              offsets.push(i);
            }

            // 发起通知通知所有参与抽奖的用户已经开奖
            await updateUserLotteryRecords(offsets, lottery, CONST.GET_PRODUCT);
          } else {
            // 红包抽奖

            // 随机抽出幸运儿，更新到 userLotteryTable lottery_result，更新幸运儿的 balance 或者运气值

            let index_hongbao =
              config.plans_lottery_package[lottery.plan_index];
            let seed_hongbao = LUCKY_SEED_HONGBAO.slice(0, index_hongbao);

            // 每个人中奖的金额，是总奖金额除以 HONHBAO_RATIO，使用 MONEY_UNIT 是因为乘以 MONEY_UNIT 保存为integer
            let price_per =
              (lottery.total_prize / CONST.MONEY_UNIT / CONST.HONHBAO_RATIO) *
              CONST.MONEY_UNIT;

            console.log(
              `checkLotteryStatus 4 - 开奖红包 - index_hongbao: ${index_hongbao} - price_per: ${price_per} - seed_hongbao: ${seed_hongbao} `
            );

            // 发起通知通知所有参与抽奖的用户已经开奖
            await updateUserLotteryRecords(
              seed_hongbao,
              lottery,
              CONST.GET_HONGBAO,
              price_per
            );

            let index_fudai = config.plans_lucky_package[lottery.plan_index];
            let seed_fudai = LUCKY_SEED_FUDAI.slice(0, index_fudai);

            console.log(
              `checkLotteryStatus 4 - 开奖福袋 - index_fudai: ${index_fudai} - lucky_num_per: ${lottery.lucky_num_per} - seed_fudai: ${seed_fudai}`
            );

            await updateUserLotteryRecords(
              seed_fudai,
              lottery,
              CONST.GET_FUDAI,
              lottery.lucky_num_per
            );
          }
        } else if (count < lottery.open_people_num && time_distance <= 0) {
          // 已经有另一个触发器处理，频率比这个触发器高，这个触发器只能在吉时触发
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

  let congratulations = "";
  if (status === CONST.GET_HONGBAO) {
    luckyRecord.set("balance", value);
    congratulations = `恭喜您！已经抽中红包${value}元！`;
  } else if (status === CONST.GET_FUDAI) {
    luckyRecord.set("lucky_num", value);
    congratulations = `恭喜您！已经抽中福袋，运气值${value}个！`;
  } else {
    congratulations = `恭喜您！已经抽中${lottery.product_name}`;
  }

  luckyRecord.set("lottery_result", status);
  let resUpdate = await luckyRecord.update();

  await sendMessage(resUpdate, lottery, congratulations);
  await sendNotGetMessage(resUpdate, lottery);
  return;
};

async function sendNotGetMessage(resUpdate, lottery) {
  console.log("sendNotGetMessage");

  let updateIds = resUpdate.data.operation_result.map(item => item.success.id);
  let queryUserIdsNotIn = new BaaS.Query();
  queryUserIdsNotIn.notIn("id", updateIds);
  queryUserIdsNotIn.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );
  let userIdsResNotIn = await USER_LOTTERY_RECORD_TABLE.setQuery(
    queryUserIdsNotIn
  )
    .select("user_id")
    .find();
  let userIdsNotIn = userIdsResNotIn.data.objects.map(item => item.user_id);

  console.log(
    `sendNotGetMessage userIdsNotIn : ${JSON.stringify(userIdsNotIn)}`
  );
  let sponsor = lottery.sponsor || lottery.nickname;

  let dataNotIn = {
    recipient_type: "user_list",
    user_list: userIdsNotIn,
    template_id: "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
    submission_type: "form_id",
    page: `pages/win_lottery/win_lottery?id=${lottery.id}`,
    keywords: {
      keyword1: {
        value: `${sponsor}发起的抽奖`
      },
      keyword2: {
        value: "很遗憾，您没有中奖..."
      },
      keyword3: {
        value: `${formatDate(Date.now())}`
      },
      keyword4: {
        value: `${lottery.id}`
      }
    }
  };
  let sendNotIn = await BaaS.sendTemplateMessage(dataNotIn);

  console.log(
    `sendMessage sendTemplateMessage [sendNotIn] res : ${JSON.stringify(
      sendNotIn
    )}`
  );
  return sendNotIn;
}

async function sendMessage(resUpdate, lottery, congratulations) {
  console.log("sendMessage");
  let updateIds = resUpdate.data.operation_result.map(item => item.success.id);
  let queryUserIds = new BaaS.Query();
  queryUserIds.in("id", updateIds);
  queryUserIds.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );
  let userIdsRes = await USER_LOTTERY_RECORD_TABLE.setQuery(queryUserIds)
    .select("user_id")
    .find();
  let userIds = userIdsRes.data.objects.map(item => item.user_id);
  console.log(`sendMessage userIds : ${JSON.stringify(userIds)}`);

  let sponsor = lottery.sponsor || lottery.nickname;
  let data = {
    recipient_type: "user_list",
    user_list: userIds,
    template_id: "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0",
    submission_type: "form_id",
    page: `pages/win_lottery/win_lottery?id=${lottery.id}`,
    keywords: {
      keyword1: {
        value: `${sponsor}发起的抽奖`
      },
      keyword2: {
        value: congratulations
      },
      keyword3: {
        value: `${formatDate(Date.now())}`
      },
      keyword4: {
        value: `${lottery.id}`
      }
    }
  };

  let sendGet = await BaaS.sendTemplateMessage(data);
  console.log(
    `sendMessage sendTemplateMessage [sendGet] res : ${JSON.stringify(sendGet)}`
  );
  return sendGet;
}

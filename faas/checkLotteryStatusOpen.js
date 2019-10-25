import { ERR_TYPE, CONFIG_ID, CONST } from "../miniprogram/utils/constants";
import { formatDate, openDateISOString } from "../miniprogram/utils/function";
import {
  getOpenedLottery,
  getAttendeesCount,
  CONFIG_TABLE,
  LOTTERY_TABLE,
  USER_LOTTERY_RECORD_TABLE,
  SEED,
  OPEN_LOTTERY_TEMPLATE_ID
} from "./common/index";

export default async function checkLotteryStatusOpen(event, callback) {
  console.log(`event: ${JSON.stringify(event)}`);

  try {
    // 获取最多100个待开奖抽奖
    let opened_lotteries_res = await getOpenedLottery();
    let opened_lotteries = opened_lotteries_res.data.objects;
    console.log(
      `获取待开奖抽奖成功，openedLotteries: ${JSON.stringify(
        opened_lotteries.map(item => item.id)
      )}`
    );
    if (opened_lotteries) {
      let config_res = await CONFIG_TABLE.get(CONFIG_ID);
      let config = config_res.data;

      for (let lottery_index in opened_lotteries) {
        let lottery = opened_lotteries[lottery_index];
        console.log(`遍历待开奖抽奖 lottery.id - ${lottery.id}`);

        let time_end = Math.round(Date.parse(lottery.open_date) / 1000);
        let time_now = Math.round(new Date() / 1000);
        let time_distance = time_end - time_now;

        // 开奖人数为0表示定时开奖
        if (lottery.open_people_num === 0) {
          // 定时开奖
          // 1. 时间到达了就开奖，不管人数。
          // 2. 但是时间并不能精确的触发，所以只能看是否等待超过24小时了，大于24小时就开奖
          if (time_distance <= 0) {
            console.log(`定时开奖`);

            await openLottery(lottery, config);
          } else {
            // 继续等待下一波定时器
            console.log(
              `定时开奖，时间不到24小时，继续等待下一波定时器 - lottery.id: ${lottery.id}`
            );
          }
        } else {
          // 按人数开奖
          // 1. 人数首先要达标，达标就开奖，时间没到也没关系
          // 2. 人数没到，定时器触发，如果过期了，就会延期（另一个云函数）
          // 3. 人数没到，定时器触发，没有过期，继续等待

          let count = await getAttendeesCount(lottery.id);
          console.log(`按人数开奖 getAttendeesCount: ${count}`);

          if (count >= lottery.open_people_num) {
            console.log(`按人数开奖 - lottery.id: ${lottery.id}`);

            await openLottery(lottery, config);
          } else if (count < lottery.open_people_num && time_distance <= 0) {
            console.log(`按人数开奖 - 需要延期`);
            let time = openDateISOString();
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
          } else {
            // count < lottery.open_people_num && time_distance > 0
            // 继续等待
            console.log(
              `按人数开奖 - 继续等待 - count < lottery.open_people_num && time_distance > 0`
            );
          }
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

async function openLottery(lottery, config) {
  let lottery_update = LOTTERY_TABLE.getWithoutData(lottery.id);

  // 更新 lottery status 为 3
  // 更新发起抽奖者的 user 表的 lucky_num，在触发器里面更新
  lottery_update.set("status", CONST.OPENED);
  await lottery_update.update();

  // 通知的标语
  let congratulations = "";

  if (lottery.lottery_type === CONST.LOTTERY_TYPE_PRODUCT) {
    // 实物抽奖
    console.log(
      `openLottery - 开奖实物抽奖 - lottery.product_name: ${lottery.product_name} - lottery.product_num: ${lottery.product_num}`
    );

    // 查看有几个奖品，生成offset，因为算法是根据权重倒序排列，只要生产 0,1,2... 等整数即可
    let offsets = [];
    for (let i = 0; i < lottery.product_num; i++) {
      offsets.push(i);
    }

    // 抽取幸运儿并发起通知通知所有参与抽奖的用户已经开奖
    let user_ids_products = await updateUserLotteryRecords(
      offsets,
      lottery,
      CONST.GET_PRODUCT
    );
    congratulations = `恭喜您！已经抽中${lottery.product_name}`;

    if (user_ids_products && user_ids_products.length > 0) {
      await sendMessage(user_ids_products, lottery, congratulations);
      // 没有中奖的也发出通知
      await sendNotGetMessage(user_ids_products, lottery);
    } else {
      console.log("------实物开奖没有找到中奖者，异常情况log记录------");
    }
  } else {
    // 红包抽奖，随机抽出幸运儿，更新到 userLotteryTable lottery_result，更新幸运儿的 balance 或者运气值

    let index_hongbao = CONST.HONGBAO_NUM;
    let seed_hongbao = SEED.LUCKY_SEED_HONGBAO.slice(0, index_hongbao);

    // 每个人中奖的金额，是总奖金额除以 HONHBAO_RATIO，使用 MONEY_UNIT 是因为乘以 MONEY_UNIT 保存为integer
    let price_per = Math.floor(
      (lottery.total_prize / CONST.MONEY_UNIT / CONST.HONGBAO_NUM) *
        CONST.MONEY_UNIT
    );

    console.log(
      `开奖红包 - price_per: ${price_per} - seed_hongbao: ${seed_hongbao} `
    );

    // 更新所有中红包的群体，返回中奖者
    let user_ids_hongbao = await updateUserLotteryRecords(
      seed_hongbao,
      lottery,
      CONST.GET_HONGBAO,
      price_per
    );

    if (user_ids_hongbao && user_ids_hongbao.length > 0) {
      congratulations = `恭喜您！已经抽中红包${price_per /
        CONST.MONEY_UNIT}元！`;
      await sendMessage(user_ids_hongbao, lottery, congratulations);
    } else {
      console.log("----------红包开奖没有找到中奖者，异常情况记录------");
    }

    let seed_fudai = SEED.LUCKY_SEED_FUDAI.slice(0, CONST.FUDAI_NUM);

    console.log(
      `开奖福袋 - lucky_num_per: ${lottery.lucky_num_per} - seed_fudai: ${seed_fudai}`
    );

    // 更新所有中福袋的群体，返回中奖者
    let user_ids_fudai = await updateUserLotteryRecords(
      seed_fudai,
      lottery,
      CONST.GET_FUDAI,
      lottery.lucky_num_per
    );
    if (user_ids_fudai && user_ids_fudai.length > 0) {
      congratulations = `恭喜您！已经抽中福袋，运气值${lottery.lucky_num_per}个！`;
      if (user_ids_fudai && user_ids_fudai.length)
        await sendMessage(user_ids_fudai, lottery, congratulations);
    } else {
      console.log("----------福袋开奖没有找到中奖者，异常情况记录------");
    }

    if (
      user_ids_fudai &&
      user_ids_fudai.length > 0 &&
      user_ids_hongbao &&
      user_ids_hongbao.length > 0
    ) {
      // 没有中奖的也发出通知
      let wins = [...user_ids_hongbao, ...user_ids_fudai];
      await sendNotGetMessage(wins, lottery);
    }
  }
}

async function genWinners(lottery, offsets) {
  let results = [];

  let attendees_query = new BaaS.Query();
  attendees_query.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );

  let attendees_res = await USER_LOTTERY_RECORD_TABLE.setQuery(attendees_query)
    .offset(0)
    .limit(1000)
    .orderBy("-weight")
    .find();
  let attendees = attendees_res.data.objects;

  for (let i = 0; i < offsets.length; i++) {
    // 检查 offsets 里面的偏移是否超过了参加抽奖的人数，是的画就不算数
    if (offsets[i] < attendees.length) {
      // 偏移量合法就算中奖了
      results.push(attendees[offsets[i]]);
    }
  }

  // 取出 id
  let ids_record = results.map(ret => {
    return ret.id;
  });
  return ids_record;
}

const updateUserLotteryRecords = async (offsets, lottery, status, value) => {
  let ids_record_table = await genWinners(lottery, offsets);

  console.log(
    `updateUserLotteryRecords - ids : ${JSON.stringify(ids_record_table)}`
  );

  if (ids_record_table.length <= 0) {
    return;
  }

  // 先根据 offsets 查出数据行 id，在通过数据行 id 更新数据行的 is_lucky & lottery_id 字段
  let record_update_query = new BaaS.Query();
  // 通过 id in 查询来更新
  record_update_query.in("id", ids_record_table);
  record_update_query.compare("lottery_result", "=", 0);

  let record_update = USER_LOTTERY_RECORD_TABLE.getWithoutData(
    record_update_query
  );

  if (status === CONST.GET_HONGBAO) {
    record_update.set("balance", value);
  } else if (status === CONST.GET_FUDAI) {
    record_update.set("lucky_num", value);
  } else {
    // 奖品就一件，改变状态即可
  }

  record_update.set("lottery_result", status);
  let update_res = await record_update.update();
  console.log(
    `updateUserLotteryRecords resUpdate : ${JSON.stringify(update_res)}`
  );

  let update_ids = update_res.data.operation_result.map(
    item => item.success.id
  );
  let user_ids_query = new BaaS.Query();
  user_ids_query.in("id", update_ids);
  user_ids_query.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );
  let user_ids_res = await USER_LOTTERY_RECORD_TABLE.setQuery(user_ids_query)
    .select("user_id")
    .find();
  let user_ids = user_ids_res.data.objects.map(item => item.user_id);
  console.log(`updateUserLotteryRecords userIds : ${JSON.stringify(user_ids)}`);
  return user_ids;
};

async function sendNotGetMessage(user_ids_win, lottery) {
  console.log(
    `sendNotGetMessage user_ids_win : ${JSON.stringify(user_ids_win)}`
  );

  let query_user_ids_not_in = new BaaS.Query();
  if (user_ids_win && user_ids_win.length > 0) {
    query_user_ids_not_in.notIn("user_id", user_ids_win);
  }
  query_user_ids_not_in.compare(
    "lottery",
    "=",
    LOTTERY_TABLE.getWithoutData(lottery.id)
  );

  let user_ids_not_in_res = await USER_LOTTERY_RECORD_TABLE.setQuery(
    query_user_ids_not_in
  )
    .select("user_id")
    .find();
  let user_ids_not_in = user_ids_not_in_res.data.objects.map(
    item => item.user_id
  );

  console.log(
    `sendNotGetMessage user_ids_not_in : ${JSON.stringify(user_ids_not_in)}`
  );

  if (user_ids_not_in && user_ids_not_in.length <= 0) {
    return;
  }
  let sponsor = lottery.sponsor || lottery.nickname;

  let data_not_win = {
    recipient_type: "user_list",
    user_list: user_ids_not_in,
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
  let send_not_win = await BaaS.sendTemplateMessage(data_not_win);

  console.log(
    `sendNotGetMessage [send_not_win] res : ${JSON.stringify(send_not_win)}`
  );
  return send_not_win;
}

async function sendMessage(user_ids_win, lottery, congratulations) {
  console.log(`sendMessage user_ids_win : ${JSON.stringify(user_ids_win)}`);

  if (user_ids_win && user_ids_win.length <= 0) {
    return;
  }
  let sponsor = lottery.sponsor || lottery.nickname;
  let data = {
    recipient_type: "user_list",
    user_list: user_ids_win,
    template_id: OPEN_LOTTERY_TEMPLATE_ID,
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

  let send_winners = await BaaS.sendTemplateMessage(data);
  console.log(
    `sendMessage sendTemplateMessage [send_winners] res : ${JSON.stringify(
      send_winners
    )}`
  );
  return send_winners;
}

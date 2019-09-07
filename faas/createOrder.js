import { CONST, TABLE_NAME } from "../utils/constants";

/** 创建订单云函数 **/
const lotteryTableId = TABLE_NAME.LOTTERY;
const orderTableId = TABLE_NAME.ORDER;

exports.main = async function createOrder(event, callback) {
  try {
    const { lottery_id } = event.data;
    const user_id = event.request.user.id;

    const lotteryTable = new BaaS.TableObject(lotteryTableId);

    const query = new BaaS.Query();
    query.compare("id", "=", lottery_id);
    let res = await lotteryTable.setQuery(query).find();
    const lottery = res.data.objects[0];

    console.log(`JSON.stringify ：${JSON.stringify(lottery)}`);

    const orderTable = new BaaS.TableObject(orderTableId);
    const createObject = orderTable.create();

    // TODO: 不知道为什么lottery_snapshot直接放lottery数据库存不进去
    const data = {
      lottery_id: lotteryTable.getWithoutData(lottery.id),
      lottery_snapshot: {
        url: lottery.url,
        file: lottery.file,
        open_date: lottery.open_date,
        pic_data: lottery.pic_data,
        total_prize: lottery.total_prize,
        lucky_num: lottery.lucky_num,
        lucky_num_per: lottery.lucky_num_per,
        plan_index: lottery.plan_index,
        plan: CONST.PLANS[lottery.plan_index],
        open_people_num: lottery.open_people_num,
        tag_items: lottery.tag_items,
        desc_initiator: lottery.desc_initiator,
        avatar: lottery.avatar,
        nickname: lottery.nickname
      },
      total_cost: lottery.total_prize,
      status: "no_paid",
      created_by: user_id
    };

    let orderRes = await createObject.set(data).save();
    const order = orderRes.data || {};

    callback(null, order);
  } catch (e) {
    callback(e);
  }
};

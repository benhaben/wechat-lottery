import { TABLE_ID } from "../utils/constants";

exports.main = async function initConfig(event, callback) {
  try {
    const tableObject = new BaaS.TableObject(TABLE_ID.CONFIG);
    const createObject = tableObject.create();
    let ret = await createObject
      .set({
        lucky_cost_per: 1,
        weight_per_lucky: 2,
        lottery_prize_list: [9.9, 16.8, 33.3, 51.8, 66.6, 86.8, 88.8, 99.9], // 红包金额
        lottery_num_people: [1000, 1500, 3500, 5000, 6000, 8000, 8000, 9000], // 开奖人数
        prize_colors: [1, 0, 0, 0, 0, 0, 0, 0], // 选择价格界面颜色相关
        plans: ["红包95个/福袋100个", "红包97个/福袋50个", "红包98个/福袋25个"], // 福袋比例
        plans_lucky_package: [100, 50, 25], // 不同方案福袋个数，和每个福袋运气值计算相关
        plans_lottery_package: [95, 97, 98], // 不同方案红包个数
        lucky_ratio_open: 100, // 发起抽奖运气值奖励，金额乘以该值
        lucky_ratio_success: 1000, // 开奖运气值增加=金额*该值
        lucky_ratio_lucky_package: 10, // 每个福袋运气值 = 开奖金额 * 该值
        lucky_ratio_invitation: 100, // 邀请朋友增加此数值运气值
        lucky_ratio_invitation_open: 10 // 线人发起抽奖，你获得运气值 = 抽奖金额 * 该值
      })
      .save();
    callback(null, ret);
  } catch (e) {
    callback(e);
  }
};

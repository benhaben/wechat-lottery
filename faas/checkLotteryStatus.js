import { ERR_TYPE, TABLE_NAME } from "../utils/constants";

let lotteryTable = new BaaS.TableObject(TABLE_NAME.LOTTERY);
let userLotteryTable = new BaaS.TableObject(TABLE_NAME.USER_LOTTERY_RECORD);

const getAttendeesCount = id => {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("lottery", "=", lotteryTable.getWithoutData(id));
  return userLotteryTable.setQuery(query).count();
};

const getOpenedLottery = () => {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("status", "=", 2);
  return lotteryTable.setQuery(query).find();
};

const pushMsg = async function(lottery, eventData) {
  const fn = n => (n > 9 ? `${n}` : `0${n}`);
  let activityName = `${lottery.prize_name} 抽奖活动`;
  let nickname = `${eventData.nickname}`;
  let inviteDate = new Date(eventData.created_at * 1e3);
  let inviteDateStr = `${inviteDate.getFullYear()}年${fn(
    inviteDate.getMonth() + 1
  )}月${fn(inviteDate.getDate())}日 ${fn(inviteDate.getHours())}:${fn(
    inviteDate.getMinutes()
  )}`;
  let invitationTips = `${nickname} 成为了你邀请的第一个好友！`;
  let note = `每个好友中奖, 你都可以获得 ¥90 优惠券`;

  let tplData = {
    user_id: eventData.inviter_uid,
    template_id: "qBDWeKf2lNJD8xaFjmx9mD7ihJEIv__ZRetV-kAlZSU",
    submission_type: "form_id",
    keywords: {
      keyword1: {
        value: activityName
      },
      keyword2: {
        value: nickname
      },
      keyword3: {
        value: inviteDateStr
      },
      keyword4: {
        value: invitationTips
      },
      keyword5: {
        value: note
      }
    },
    page: `pages/index/index`
  };

  return BaaS.sendTemplateMessage(tplData);
};

const sendTplMsg = async function(eventData, callback) {
  let lottery = await getLottery(eventData);
  let record = lottery.data.objects[0] || {};
  if (record.active) {
    let pushMsgRes = await pushMsg(record, eventData);
    if (pushMsgRes.data.status === "ok") {
      callback(null, "success");
    } else {
      callback(pushMsgRes.data);
    }
  } else {
    callback(null);
  }
};

exports.main = async function checkLotteryStatus(event, callback) {
  try {
    // 获取
    let ret = await getOpenedLottery();
    let openedLotteries = ret.data.objects;
    if (openedLotteries) {
      for (let lotteryIndex in openedLotteries) {
        let lottery = openedLotteries[lotteryIndex];
        let count = getAttendeesCount(lottery.id);
        let time_end = Math.round(Date.parse(lottery.open_date) / 1000);
        let time_now = Math.round(new Date() / 1000);
        let time_distance = time_end - time_now;
        if (count >= lottery.open_people_num && time_distance <= 0) {
          // TODO：开奖
          // 更新 lottery status 为 1
          // 更新 user_balance 表的 luck_num
          // 随机抽出幸运儿，更新到 userLotteryTable lottery_result，更新 user_balance 的 balance
          // 发起通知通知所有参与抽奖的用户已经开奖
        }
      }
    } else {
      callback(ERR_TYPE.GET_LOTTERY_FAILED);
    }
  } catch (e) {
    callback(e);
  }
};

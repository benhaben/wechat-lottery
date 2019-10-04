/**
 * 服务端转用,BaaS不需要加wx.前缀
 */

import { CONFIG_ID, CONST, TABLE_ID } from "../../utils/constants";

// 本来红包和福袋根据发起人的不同，会有不同的比例（plans_lottery_package），现在统一改成 100
// 1. 因为ugc红包被去掉了，没有发起人奖励了，现在福袋的作用就是让参加抽奖的人中奖率提高，中了福袋可以增加权重
// 2. 复杂的套餐配置在产品上就是浪费时间，只要有这个东西就可以了，没有必要设计细微的差别，不是打游戏
export const HONGBAO_NUM = 100;
export const FUDAI_NUM = 100;
const MAX_GET_OPENED_LOTTERIES = 100;
export const ADMIN_GROUP_ID = 5074;
export const APPROVE_TEMPLATE_ID =
  "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA";

export const OPEN_LOTTERY_TEMPLATE_ID =
  "PGXKodkuaE7k1bmXsQ9c-gPEcmnPY0am97nd9cOuI_0";

export const RECORD_CREATE_REASON = {
  ADD_INVITER: "邀请好友，增加运气值"
};
const LOOP_NUM = 1000;
const seed = () => {
  let hongbaos = [];
  let fudais = [];

  for (let i = 0; i < LOOP_NUM; i++) {
    if (i % 2 == 0) {
      //奇数行代码
      hongbaos.push(i);
    } else {
      //偶数行代码
      fudais.push(i);
    }
  }

  return {
    LUCKY_SEED_HONGBAO: hongbaos,
    LUCKY_SEED_FUDAI: fudais
  };
};

export const SEED = {
  ...seed()
};

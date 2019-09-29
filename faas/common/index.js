/**
 * 服务端转用,BaaS不需要加wx.前缀
 */

import { CONST, TABLE_ID } from "../../utils/constants";

const MAX_GET_OPENED_LOTTERIES = 100;
export const ADMIN_GROUP_ID = 5074;
export const APPROVE_TEMPLATE_ID =
  "EESiZK3g7xV0xtTYQWaCBr-beZ8R6GxDaqIFpeShOLA";
export const USER_LOTTERY_RECORD_TABLE = new BaaS.TableObject(
  TABLE_ID.USER_LOTTERY_RECORD
);
export const LOTTERY_TABLE = new BaaS.TableObject(TABLE_ID.LOTTERY);
export const CONFIG_TABLE = new BaaS.TableObject(TABLE_ID.CONFIG);
export const ERROR_TABLE = new BaaS.TableObject(TABLE_ID.ERROR);
export const USER_TABLE = new BaaS.User();
export const BALANCE_LUCKY_RECORD_TABLE = new BaaS.TableObject(
  TABLE_ID.BALANCE_LUCKY_RECORD
);
export const WITHDRAW_TABLE = new BaaS.TableObject(TABLE_ID.WITHDRAW);

export async function getAttendeesCount(id) {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("lottery", "=", LOTTERY_TABLE.getWithoutData(id));
  return USER_LOTTERY_RECORD_TABLE.setQuery(query).count();
}

export async function getOpenedLottery() {
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("status", "=", CONST.APPROVED);
  return LOTTERY_TABLE.setQuery(query)
    .limit(MAX_GET_OPENED_LOTTERIES)
    .find();
}
export async function inAdminGroup(user_id) {
  let query = new BaaS.Query();
  const cloudAdmin = "78355122";
  if (user_id == cloudAdmin) {
    console.log("inAdminGroup : cloudAdmin call...");
    return true;
  }
  // 查询用户组 [ADMIN_GROUP_ID] 下的用户
  query.in("_group", [ADMIN_GROUP_ID]);

  let adminRes = await USER_TABLE.setQuery(query).find();
  let isAdmin = false;
  for (let item of adminRes.data.objects) {
    if (item.id === user_id) {
      isAdmin = true;
      break;
    }
  }
  return isAdmin;
}

export const LUCKY_SEED_HONGBAO = [
  0,
  1,
  2,
  3,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  16,
  18,
  20,
  22,
  26,
  28,
  30,
  32,
  36,
  38,
  40,
  42,
  46,
  48,
  50,
  52,
  56,
  58,
  60,
  62,
  66,
  68,
  70,
  72,
  78,
  80,
  81,
  82,
  83,
  85,
  86,
  87,
  88,
  89,
  90,
  92,
  96,
  99,
  100,
  102,
  106,
  108,
  110,
  112,
  116,
  118,
  120,
  122,
  126,
  128,
  150,
  152,
  156,
  158,
  160,
  162,
  166,
  168,
  170,
  172,
  176,
  178,
  180,
  182,
  186,
  188,
  200,
  202,
  206,
  208,
  510,
  512,
  516,
  518,
  555,
  666,
  777,
  888,
  610,
  612,
  616,
  618,
  190,
  192,
  196,
  199,
  130,
  132,
  136,
  138 //没有倒数第二排的吉利，所以放在后面
];

export const LUCKY_SEED_FUDAI = [
  4,
  11,
  13,
  14,
  15,
  17,
  19,
  21,
  23,
  24,
  25,
  27,
  29,
  31,
  33,
  34,
  35,
  37,
  39,
  41,
  43,
  44,
  45,
  47,
  49,
  51,
  53,
  54,
  55,
  57,
  59,
  61,
  63,
  64,
  65,
  67,
  69,
  71,
  73,
  74,
  76,
  79,
  84,
  91,
  93,
  94,
  95,
  97,
  98,
  101,
  103,
  104,
  105,
  107,
  109,
  111,
  113,
  114,
  115,
  117,
  119,
  121,
  123,
  124,
  125,
  127,
  129,
  131,
  133,
  134,
  135,
  137,
  139,
  140,
  141,
  142,
  143,
  144,
  145,
  146,
  147,
  148,
  149,
  151,
  153,
  154,
  155,
  157,
  159,
  161,
  163,
  164,
  165,
  167,
  169,
  171,
  173,
  174,
  177,
  179,
  181,
  183,
  184,
  185,
  187,
  189,
  191,
  193,
  194,
  195,
  197,
  201,
  203,
  205,
  207,
  209,
  211,
  212,
  213,
  214,
  215,
  216,
  217,
  218,
  219,
  220,
  221,
  222,
  223,
  224,
  225,
  226,
  227,
  228
];

// 不能重复
// LUCKY_SEED_HONGBAO.filter(function (n) {
//   return LUCKY_SEED_FUDAI.indexOf(n) != -1
// });

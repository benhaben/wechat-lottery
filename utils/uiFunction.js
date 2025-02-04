import wxPromise from "./wxPromise.js";
import dao from "./dao";
import { CONST } from "./constants";

const { regeneratorRuntime } = global;
/**
 * `that` is page
 * @param that
 */
export async function saveToAlbum(url) {
  let res = await wxPromise.getSetting();
  if (!res.authSetting["scope.writePhotosAlbum"]) {
    await wx.authorize({ scope: "scope.writePhotosAlbum" });
    let saveRes = await save(url);
    console.log(saveRes);
  } else {
    let saveRes = await save(url);
    console.log(saveRes);
  }

  async function save(url) {
    if (url.indexOf("http") !== -1) {
      let file = await wxPromise.downloadFile({ url });
      return wxPromise.saveImageToPhotosAlbum({
        filePath: file.tempFilePath
      });
    } else {
      return wxPromise.saveImageToPhotosAlbum({
        filePath: url
      });
    }
  }
}

const MobileAdpater = () => {
  const systemInfo = wx.getSystemInfoSync();
  const deviceModel = systemInfo.model;
  const MOBILE_REG = {
    "iPhone X": /iPhone X/
  };

  return {
    isIPhoneX: () => {
      return MOBILE_REG["iPhone X"].test(deviceModel);
    }
  };
};

export const mobileAdapter = {
  ...MobileAdpater()
};

export const getStatusBarHeight = () => {
  const systemInfo = wx.getSystemInfoSync();
  try {
    return systemInfo.statusbarHeight || systemInfo.statusBarHeight;
  } catch (e) {
    return 20;
  }
};

/**
 *  scene总共就32个字符，user_id 14个，lottery_id 只能用剩下的18个
 * @param user_id
 * @param lottery_id
 * @returns {string}
 */
export function genSceneOfAttendPage(user_id, lottery_id) {
  let _lottery_id = lottery_id.substr(0, 18);
  let scene = `${user_id}${_lottery_id}`;
  return scene;
}

export function deSceneOfAttendPage(scene) {
  let sceneStr = decodeURIComponent(scene);
  let inviter_uid = sceneStr.substring(0, 14);
  let prefix_lottery_id = sceneStr.substring(14, 32);
  return {
    inviter_uid,
    prefix_lottery_id
  };
}

export async function getAddress(user_id) {
  try {
    let address;
    let res = await wxPromise.getSetting();
    if (!res.authSetting["scope.address"]) {
      await wx.authorize({ scope: "scope.address" });
      address = await wxPromise.chooseAddress();
    } else {
      address = await wxPromise.chooseAddress();
    }

    if (address) {
      await dao.createOrUpdateAddress(address, user_id);
    }
  } catch (e) {
    console.log(e);
  }
}

/**
 * 根据奖品类型和奖品状态反应不同的值
 * TODO: big_list_item 中界面的判断用此段代码代替，在界面中判断很麻烦
 * @param lottery
 * @returns {{txt2: *, txt1: *}}
 */
export function getTitleAndRule(lottery) {
  let title, rule;
  if (lottery.lottery_type == CONST.LOTTERY_TYPE_PRODUCT) {
    title = `奖品： ${lottery.product_name} X ${lottery.product_num} 个`;
  } else {
    title = `小红包 X ${lottery.hongbao_num}，小福袋 X ${lottery.fudai_num}`;
  }

  if (lottery.status == CONST.APPROVED && lottery.open_people_num == 0) {
    rule = `预计${lottery.countdownStr}后自动开奖`;
  } else if (
    lottery.status == CONST.APPROVED &&
    lottery.lottery_type == CONST.LOTTERY_TYPE_MONEY &&
    lottery.open_people_num == 0
  ) {
    rule = ` 预计${lottery.countdownStr}后，满${lottery.open_people_num}人自动开奖`;
  } else if (
    lottery.status == CONST.APPROVED &&
    lottery.lottery_type == CONST.LOTTERY_TYPE_PRODUCT
  ) {
    rule = `满${lottery.open_people_num}人，择吉时开奖`;
  } else {
    rule = "已经开奖";
  }
  return { title, rule };
}

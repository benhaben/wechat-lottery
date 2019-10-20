import wxPromise from "./wxPromise.js";
import dao from "./dao";
import { CONST, TABLE_ID } from "./constants";

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
      let isIPhoneX = MOBILE_REG["iPhone X"].test(deviceModel);
      console.log(`isIPhoneX: ${isIPhoneX}`);
      return isIPhoneX;
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
 *  scene总共就32个字符，user_id 14个，lottery_id 用剩下的15个，加一个&
 * @param user_id
 * @param lottery_id
 * @returns {string}
 * 878299819790035 daaec523163b356e
 */
export function genSceneOfAttendPage(user_id, lottery_id) {
  let _lottery_id = lottery_id.substring(0, 15);
  let scene = `${user_id}&${_lottery_id}`;
  return scene;
}

export function deSceneOfAttendPage(scene) {
  let sceneStr = decodeURIComponent(scene);
  let arr = sceneStr.split("&");
  let inviter_uid = arr[0];
  let prefix_lottery_id = arr[1];
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

/**
 * 支付抽奖
 */
export async function payLottery(lottery, cost, sponsor) {
  const params = {
    totalCost: cost,
    merchandiseDescription: `${sponsor}发起的抽奖：${lottery.id}`,
    merchandiseSchemaID: TABLE_ID.LOTTERY,
    merchandiseRecordID: lottery.id,
    merchandiseSnapshot: lottery
  };

  return wx.BaaS.pay(params);
}

export function base64ToFile(base64data, cb) {
  return new Promise((resolve, reject) => {
    const fsm = wx.getFileSystemManager();
    const FILE_BASE_NAME = "tmp_base64src"; //自定义文件名
    const [, format, bodyData] =
      /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
    if (!format) {
      return new Error("ERROR_BASE64SRC_PARSE");
    }
    const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
    const buffer = wx.base64ToArrayBuffer(bodyData);
    fsm.writeFile({
      filePath,
      data: buffer,
      encoding: "binary",
      success() {
        resolve(filePath);
      },
      fail() {
        reject(new Error("ERROR_BASE64SRC_WRITE"));
      }
    });
  });
}

export async function getRemoteUrlLocalPath(url) {
  try {
    let image_info = await wxPromise.getImageInfo({ src: url });
    return image_info.path;
  } catch (e) {
    console.log(e);
  }
  return null;
}

import wxPromise from "./wxPromise.js";

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
      debugger;

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

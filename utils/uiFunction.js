import Toast from "../lib/van/toast/toast";
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
      debugger;

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

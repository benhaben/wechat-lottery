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
    let file = await wxPromise.downloadFile({ url });
    return wxPromise.saveImageToPhotosAlbum({
      filePath: file.tempFilePath
    });
  }
}

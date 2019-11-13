var app = getApp();

export default class SystemInfoUtil {
  static PC = "pc";
  static IOS = "ios";
  static ANDROID = "android";
  static width;
  static model;
  /**
   * 平台 ios,andorid,pc
   */
  static platform;
  /**
   * 基础库版本 已处理成数值7.0.0->700 容易比较 可以查map到微信什么版本
   */
  static wxSDKVersion;

  static init() {
    try {
      let res = wx.getSystemInfoSync();
      SystemInfoUtil.width = res.windowWidth;
      SystemInfoUtil.model = res.model;
      console.log(`res.platform: ${res.platform}`);
      if (res.platform == "devtools") {
        SystemInfoUtil.platform = SystemInfoUtil.PC;
      } else if (res.platform == "ios") {
        SystemInfoUtil.platform = SystemInfoUtil.IOS;
      } else if (res.platform == "android") {
        SystemInfoUtil.platform = SystemInfoUtil.ANDROID;
      }

      let version = res.SDKVersion;
      version = version.replace(/\./g, "");
      SystemInfoUtil.wxSDKVersion = version;
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
  }
}
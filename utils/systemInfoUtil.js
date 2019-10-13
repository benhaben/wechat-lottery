export default class SystemInfoUtil {
  static PC = "pc";
  static IOS = "ios";
  static ANDROID = "android";

  /**
   * 平台 ios,andorid,pc
   */
  static platform;
  /**
   * 基础库版本 已处理成数值7.0.0->700 容易比较 可以查map到微信什么版本
   */
  static wxSDKVersion;

  static init() {
    let res = wx.getSystemInfoSync();
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
  }
}

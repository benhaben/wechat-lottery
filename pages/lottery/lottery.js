import wxPromise from "../../utils/wxPromise.js";
import Dialog from "../../lib/van/dialog/dialog";

const { regeneratorRuntime } = global;

//获取应用实例
const app = getApp();

Page({
  data: {
    url:
      "https://pub-musics.oss-cn-shanghai.aliyuncs.com/vinyl-pvc-banners-1.jpg",
    name: "",
    num: ""
  },
  onLoad: function() {
    var self = this;
    wx.BaaS.auth
      .getCurrentUser()
      .then(user => {
        self.getUserInfo(user.get("id"));
      })
      .catch(err => {
        wx.BaaS.auth.loginWithWechat().then(user => {
          self.getUserInfo(user.get("id"));
        });
      });
  },
  getUserInfo: function(uid) {
    let MyUser = new wx.BaaS.User();
    MyUser.get(uid).then(res => {
      var userInfo = res.data;
      if (userInfo.name && userInfo.phone && userInfo.company) {
        this.setData({
          userInfo: userInfo,
          isProfileComplete: true
        });
      } else {
        this.setData({
          userInfo: userInfo
        });
      }
      wx.setStorageSync("userInfo", userInfo);
    });
  },
  onUnload: function() {},
  onReady: function() {},
  selectImage: async function(event) {
    try {
      let res = await wxPromise.chooseImage({
        count: 1
      });

      // wxCensorImage 需要开启权限
      let risky = await wx.BaaS.wxCensorImage(res.tempFilePaths[0]);

      if (risky) {
        Dialog.alert({
          title: "图片检查失败",
          message: "您的图片不符合微信标准"
        });
        return;
      }

      let MyFile = new wx.BaaS.File();
      let fileParams = {
        filePath: res.tempFilePaths[0]
      };
      let metaData = {
        categoryName: "lottery_images"
      };

      debugger;
      let uploadTask = MyFile.upload(fileParams, metaData);

      uploadTask.onProgressUpdate(e => {
        // 监听上传进度
        console.log(e);
      });
    } catch (err) {
      console.debug(err);
    }
  }
});

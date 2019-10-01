// pages/share_pic/share_pic.js
import Poster from "../../components/poster-gen-canvas/poster/poster";
import { ROUTE } from "../../utils/constants";
import Toast from "../../lib/van/toast/toast";
import { saveToAlbum } from "../../utils/uiFunction";

const app = getApp();
let posterConfig = {
  width: 600,
  height: 700,
  backgroundColor: "#fff",
  debug: false,
  pixelRatio: 3,
  blocks: [
    {
      width: 580,
      height: 680,
      x: 10,
      y: 10,
      borderWidth: 1,
      borderColor: "#FC4F89",
      borderRadius: 0
    }
  ],
  texts: [
    {
      x: 224,
      y: 75,
      baseLine: "middle",
      text: "好运码头",
      fontSize: 38,
      color: "#EB132D"
    },
    {
      x: 88,
      y: 177,
      baseLine: "middle",
      text: "一个免费抽奖，带来好运的工具",
      fontSize: 30,
      color: "#323233"
    },
    {
      x: 160,
      y: 600,
      fontSize: 28,
      baseLine: "middle",
      text: "长按识别小程序，参与抽奖",
      color: "#8d8d8d",
      zIndex: 200
    }
  ],
  images: [
    {
      width: 220,
      height: 220,
      x: 200,
      y: 305,
      url: ""
    }
  ]
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let res = await wx.BaaS.getWXACode(
        "wxacodeunlimit",
        {
          scene: `${app.getUserId()}`,
          page: `${ROUTE.HOME.substring(1)}`,
          width: 250
        },
        true
      );
      posterConfig.images[0].url = res.download_url;
      this.onCreatePoster();
    } catch (e) {
      console.log(e);
    }
  },

  onPosterSuccess(e) {
    const { detail } = e;
    this.setData({
      url: detail
    });
  },

  async onSaveToAlbum(e) {
    try {
      await saveToAlbum(this.data.url);
      Toast.success("保存成功");
    } catch (e) {
      console.log(e);
    }
  },
  onPosterFail(err) {
    console.error(err);
  },

  /**
   * 异步生成海报
   */
  onCreatePoster() {
    this.setData(
      {
        posterConfig: posterConfig
      },
      () => {
        Poster.create(true); // 入参：true为抹掉重新生成
      }
    );
  }
});

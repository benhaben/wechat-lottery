// pages/share_pic/share_pic.js
import Poster from "../../components/poster-gen-canvas/poster/poster";
import { CONST, ROUTE } from "../../utils/constants";
import { formatTime } from "../../utils/function";
import Toast from "../../lib/van/toast/toast";
import { saveToAlbum } from "../../utils/uiFunction";
import { ROUTE_DATA } from "../../utils/uiConstants";
import { genSceneOfAttendPage } from "../../utils/validateFn";

const red = "#C42731";
const white = "#fff";
const black = "#323233";
const gray = "#8a8a8a";

const app = getApp();

let posterConfig = {
  width: 660,
  height: 1150,
  backgroundColor: "#C42731",
  debug: false,
  pixelRatio: 3,
  blocks: [
    {
      width: 610,
      height: 785,
      x: 25,
      y: 290,
      backgroundColor: "#fff"
    }
  ],
  texts: [
    {
      x: 330,
      y: 180,
      textAlign: "center",
      baseLine: "middle",
      text: app.getNickname(),
      fontSize: 32,
      color: white
    },
    {
      x: 330,
      y: 240,
      textAlign: "center",
      baseLine: "middle",
      text: "邀请你来参加免费抽奖",
      fontSize: 30,
      color: white
    },
    {
      x: 70,
      y: 665,
      baseLine: "middle",
      text: "奖金金额：9.9元/100",
      fontSize: 28,
      color: red,
      zIndex: 200
    },
    {
      x: 70,
      y: 700,
      fontSize: 25,
      baseLine: "middle",
      text: "麦辣鸡腿堡发起",
      color: gray,
      zIndex: 200
    },

    {
      x: 70,
      y: 735,
      baseLine: "middle",
      text: "参加者达到1000人，按时开奖",
      fontSize: 25,
      color: gray,
      zIndex: 200
    },
    {
      x: 330,
      y: 1020,
      textAlign: "center",
      baseLine: "middle",
      text: "长按识别小程序码",
      fontSize: 25,
      color: gray,
      zIndex: 200
    }
  ],
  images: [
    {
      width: 110,
      height: 110,
      x: 270,
      y: 40,
      borderRadius: 110,
      url: app.getAvatar()
    },
    {
      width: 520,
      height: 312,
      x: 70,
      y: 330,
      url:
        "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iCf5g4bPTIvXW66.png"
    },
    {
      width: 200,
      height: 200,
      x: 230,
      y: 780,
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
  onLoad: function(options) {
    let that = this;
    const eventChannel = that.getOpenerEventChannel();
    eventChannel.on(ROUTE_DATA.FROM_ATTEND_LOTTERY_TO_SHARE_PIC, async function(
      data
    ) {
      try {
        let user_id = app.getUserId(); //14
        let scene = genSceneOfAttendPage(user_id, data.lottery_id);
        let res = await wx.BaaS.getWXACode(
          "wxacodeunlimit",
          {
            scene,
            page: `${ROUTE.ATTEND_LOTTERY.substring(1)}`
          },
          true
        );
        posterConfig.images[2].url = res.download_url;
        that.onCreatePoster();
      } catch (e) {
        console.log(e);
      }
    });
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

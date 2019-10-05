// pages/share_pic/share_pic.js
import Poster from "../../components/poster-gen-canvas/poster/poster";
import { CONST, ROUTE } from "../../utils/constants";
import { formatTime } from "../../utils/function";
import Toast from "../../lib/van/toast/toast";
import { genSceneOfAttendPage, saveToAlbum } from "../../utils/uiFunction";
import { DEFAULT_SPONSOR, ROUTE_DATA } from "../../utils/uiConstants";

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
      y: 705,
      fontSize: 22,
      baseLine: "middle",
      text: "麦辣鸡腿堡发起",
      color: gray,
      zIndex: 200
    },

    {
      x: 70,
      y: 740,
      baseLine: "middle",
      text: "参加者达到1000人，按时开奖",
      fontSize: 22,
      color: gray,
      zIndex: 200
    },
    {
      x: 330,
      y: 1040,
      textAlign: "center",
      baseLine: "middle",
      text: "长按识别小程序码",
      fontSize: 18,
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
      width: 240,
      height: 240,
      x: 210,
      y: 770,
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
        let scene = genSceneOfAttendPage(user_id, data.lottery.id);
        let res = await wx.BaaS.getWXACode(
          "wxacodeunlimit",
          {
            scene,
            page: `${ROUTE.ATTEND_LOTTERY.substring(1)}`
          },
          true
        );
        posterConfig.images[1].url = data.lottery.url;
        posterConfig.images[2].url = res.download_url;
        if (data.lottery.lottery_type === CONST.LOTTERY_TYPE_MONEY) {
          posterConfig.texts[2].text = `红包方案：${data.lottery.total}`;
        } else {
          posterConfig.texts[2].text = `奖品：${data.lottery.product_name}`;
        }
        posterConfig.texts[3].text = `赞助商：${data.lottery.sponsor ||
          DEFAULT_SPONSOR}`;
        if (data.lottery.open_people_num === 0) {
          posterConfig.texts[4].text = `不限人数，择吉时开奖`;
        } else {
          posterConfig.texts[4].text = `参加者达到${data.lottery.open_people_num}人，择吉时开奖`;
        }
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

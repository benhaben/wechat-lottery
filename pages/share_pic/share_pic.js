// pages/share_pic/share_pic.js
import Poster from "../../components/poster-gen-canvas/poster/poster";
import { CONST, ROUTE } from "../../utils/constants";
import { formatTime } from "../../utils/function";
import Toast from "../../lib/van/toast/toast";
import { saveToAlbum } from "../../utils/uiFunction";
import { ROUTE_DATA } from "../../utils/uiConstants";

const red = "rgb(222,26,24)";
const app = getApp();
let posterConfig = {
  width: 750,
  height: 1334,
  backgroundColor: "#fff",
  debug: false,
  pixelRatio: 3,
  blocks: [
    {
      width: 690,
      height: 808,
      x: 30,
      y: 183,
      borderWidth: 2,
      borderColor: "#f0c2a0",
      borderRadius: 20
    },
    {
      width: 634,
      height: 74,
      x: 59,
      y: 770,
      backgroundColor: "#fff",
      opacity: 0.5,
      zIndex: 100
    }
  ],
  texts: [
    {
      x: 113,
      y: 61,
      baseLine: "middle",
      text: app.getNickname(),
      fontSize: 32,
      color: "#8d8d8d"
    },
    {
      x: 30,
      y: 113,
      baseLine: "top",
      text: "发现一个免费红包，快来抢啊",
      fontSize: 38,
      color: red
    },
    {
      x: 60,
      y: 810,
      fontSize: 28,
      baseLine: "middle",
      text: "参加抽奖人数",
      color: "#8d8d8d",
      zIndex: 200
    },
    {
      x: 59,
      y: 895,
      baseLine: "middle",
      text: "奖金金额：",
      fontSize: 28,
      color: red
    },
    {
      x: 522,
      y: 895,
      baseLine: "middle",
      text: "9.9元/100",
      fontSize: 28,
      color: red
    },
    {
      x: 59,
      y: 945,
      baseLine: "middle",
      text: "开奖时间：",
      fontSize: 28,
      color: "#929292"
    },
    {
      x: 440,
      y: 945,
      baseLine: "middle",
      text: "2019-09-10",
      fontSize: 28,
      color: "#929292"
    },
    {
      x: 360,
      y: 1065,
      baseLine: "top",
      text: "长按识别小程序码",
      fontSize: 38,
      color: "#080808"
    },
    {
      x: 360,
      y: 1123,
      baseLine: "top",
      text: "天天免费抽奖",
      fontSize: 28,
      color: "#929292"
    }
  ],
  images: [
    {
      width: 62,
      height: 62,
      x: 30,
      y: 30,
      borderRadius: 62,
      url: app.getAvatar()
    },
    {
      width: 634,
      height: 634,
      x: 59,
      y: 210,
      url:
        "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1iCzPPGDITeALdRc.png"
    },
    {
      width: 220,
      height: 220,
      x: 92,
      y: 1020,
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

    // wx.BaaS.getWXACode("wxacodeunlimit", {
    //   scene: "A",
    //   page: "pages/attend_lottery/attend_lottery",
    //   width: 250
    // })
    //   .then(res => {
    //     console.log("wxacodeunlimit" + res);
    //   })
    //   .catch(err => {
    //     console.log("wxacodeunlimit" + err);
    //   });

    const eventChannel = that.getOpenerEventChannel();
    eventChannel.on(ROUTE_DATA.FROM_ATTEND_LOTTERY_TO_SHARE_PIC, function(
      data
    ) {
      // posterConfig.texts[2].text = ` 参加抽奖人数：${data.attend_num}人`;
      // posterConfig.texts[6].text = `${formatTime(Date.parse(data.open_date))}`;
      //
      // posterConfig.texts[4].text = `${data.total}`;
      // posterConfig.images[2].url = posterConfig.images[1].url;
      // that.onCreatePoster();

      wx.BaaS.getWXACode(
        "wxacode",
        {
          path: `${ROUTE.ATTEND_LOTTERY}?id=${data.lottery_id}`
        },
        true,
        "wxacode"
      )
        .then(res => {
          posterConfig.texts[2].text = ` 参加抽奖人数：${data.attend_num}人`;
          posterConfig.texts[6].text = `${formatTime(
            Date.parse(data.open_date)
          )}`;

          posterConfig.texts[4].text = `${data.total}`;
          posterConfig.images[2].url = res.download_url;
          that.onCreatePoster();
        })
        .catch(err => {
          console.log("wxacode" + err);
        });
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

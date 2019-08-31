Component({
  data: {
    lotteries: []
  },

  ready: function() {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push({
        title: "DC 潮牌便利店 赞助",
        rewards: [
          {
            level: "一等奖",
            pdName: "DC大力水手联名款印花T恤",
            count: `X${3}`
          },
          {
            _unique: `unique_${i}_1`,
            level: "二等奖",
            pdName: "DC大力水手体验券",
            count: `X${1}`
          }
        ],
        count: `X${1000}`,
        openLetteryTime: "08月15 10:00 自动开奖",
        bannerUrl:
          "https://pub-musics.oss-cn-shanghai.aliyuncs.com/vinyl-pvc-banners-1.jpg"
      });
    }

    this.setData({ lotteries: list });
  }
});

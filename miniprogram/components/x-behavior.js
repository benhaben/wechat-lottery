// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {},
  data: {
    tempArr: [],
    value: "",
    page: {}
  },
  attached() {
    let that = this;
    if (that.data.modal) {
      let pages = getCurrentPages();
      that.data.page = pages[pages.length - 1];
      that.data.tempArr = that.data.modal.split(".");
      let tempData = "";
      that.data.tempArr.forEach((item, index) => {
        if (index == 0) {
          console.log(that.data.page.data[item]);
          tempData = that.data.page.data[item];
        } else {
          console.log(item, index);
          tempData = tempData[item];
        }
      });
      that.setData({
        value: tempData
      });
    }
  },
  methods: {
    adjectiveBindData(data) {
      let that = this;
      that.data.page.setData({
        [that.data.modal]: data
      });
    },
    /**
     * 获取颜色
     */
    _getColor() {
      let that = this;
      switch (that.data.color) {
        case "dange":
          return "#F56C6C";
          break;
        case "warning":
          return "#E6A23C";
          break;
        case "primary":
          return "#409EFF";
          break;
        case "success":
          return "#67C23A";
          break;
        case "white":
          return "#ffffff";
          break;
        case "black":
          return "#000000";
          break;
        case "info":
          return "#8a8a8a";
          break;
        default:
          return that.data.color;
          break;
      }
    }
  }
});

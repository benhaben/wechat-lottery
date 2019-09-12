Component({
  properties: {
    lottery: {
      type: Object,
      value: {}
    }
  },
  options: {
    // 允许接受外部样式，根据个人喜好来处理
    addGlobalClass: true
  },
  data: {},
  attached() {
    // 当组件挂载到页面时，才会执行初始化
    let that = this;
    that._init();
  },
  methods: {
    /**
     * 内部方法
     * 初始化富文本方法
     */
    _init() {},
    _onTap() {
      console.log("lottery-item.js _onTap");
      this.triggerEvent("tap", this.data.lottery.id);
    }
  }
});

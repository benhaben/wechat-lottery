Component({
  properties: {
    lottery: {
      type: Object,
      value: {}
    }
  },
  data: {},
  attached() {
    // 当组件挂载到页面时，才会执行初始化
    let that = this;
    debugger;
    that._init();
  },
  methods: {
    /**
     * 内部方法
     * 初始化富文本方法
     */
    _init() {},
    _onTap() {
      this.triggerEvent("tap", this.lottery.id);
    }
  }
});

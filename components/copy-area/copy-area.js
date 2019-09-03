// components/copy-area/copy-area.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isReadOnly: {
      type: Boolean,
      value: false
    },
    title_placeholder: {
      type: String,
      value: "我的微信号"
    },
    content_placeholder: {
      type: String,
      value: "请输入微信号"
    },
    title: {
      type: String,
      value: undefined
    },
    content: {
      type: String,
      value: undefined
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isEdit: false,
    focusList: [
      {
        focus: true
      },
      {
        focus: false
      }
    ]
  },
  options: {
    // 允许接受外部样式，根据个人喜好来处理
    addGlobalClass: true
  },
  attached() {
    // 当组件挂载到页面时，才会执行初始化
    let that = this;
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 文本框获取焦点监听
     */
    _focusView(e) {
      let that = this;

      // 只读获取不了焦点，切换不到textarea，TODO：在首页测试
      if (that.data.isReadOnly) {
        return;
      }

      let index = +e.currentTarget.dataset.index;
      that.data.focusList = that.data.focusList.map(item => {
        item.focus = false;
        return item;
      });
      that.data.focusList[index].focus = true;
      that.setData({
        focusList: that.data.focusList,
        isEdit: true
      });
    },
    /**
     * 文字输入监听，注意并不会绑定到model，需要自己设置
     */
    _inputCon(e) {
      let that = this;
      let index = +e.currentTarget.dataset.index;
      if (index === 0) {
        that.data.title = e.detail.value;
      } else {
        that.data.content = e.detail.value;
      }
      that.triggerEvent("input", {
        title: that.data.title,
        content: that.data.content
      });
    },
    /**
     * 文本框失去焦点的监听事件
     */
    _outBlur(e) {
      let that = this;
      that.setData({
        title: that.data.title,
        content: that.data.content,
        isEdit: false
      });
      that.triggerEvent("blur", {
        title: that.data.title,
        content: that.data.content
      });
    },
    _onCopy(e) {
      let that = this;
      wx.setClipboardData({
        data: that.data.content
      });
    }
  }
});

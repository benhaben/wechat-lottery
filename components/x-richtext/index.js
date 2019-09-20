// components/rich_text/rich_text.js
import wxPromise from "../../utils/wxPromise.js";
import Toast from "../../lib/van/toast/toast";
const { regeneratorRuntime } = global;

/**
 * 主要的设计思想是：
 * 1、第一行文字，存贮在 firstCon
 * 2、后面是列表，每一个item可能是如下组合【img，text】，【cpy，text】
 * 3、保存出来的时候，内部的数据格式则会去掉，变成[{info,type}]数组输出
 * 4、isReadOnly熟悉为true的时候，则不能编辑，会转用view显示
 * TODO：命名方式不好，isReadOnly -> readOnly, 缩写改全称
 */

var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isReadOnly: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: "请输入图文信息"
    },
    initList: {
      // 用于初始化数据，例如，编辑富文本
      // image type = 1；
      // text type = 0;
      // copy wechatarea type = 2
      type: Array,
      value: []
    },
    max_length: {
      // 传入图片上限，默认为4
      type: Number,
      value: 4
    }
  },
  options: {
    // 允许接受外部样式，根据个人喜好来处理
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    firstCon: "",
    dataList: [],
    focusList: [
      {
        focus: false
      }
    ],
    progressList: [],
    isEdit: true,
    addImgView: {},
    insertIndex: 0,
    width: 375
  },
  observers: {
    initList: function() {
      this.data.dataList = [];
      this._initRichText();
    }
  },

  created() {
    let that = this;
    that.data.addImgView = that.selectComponent("#addimg");
  },
  attached() {
    // 当组件挂载到页面时，才会执行初始化
    let that = this;
    that.setData({
      width: app.globalData.systemInfo.windowWidth
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 内部方法
     * 初始化富文本方法
     */
    _initRichText() {
      let that = this;
      if (that.data.initList && that.data.initList.length > 0) {
        // 初始化数据不为空
        for (let i = 0; i < that.data.initList.length; i++) {
          if (i === 0) {
            if (that.data.initList[i].type === 0) {
              that.data.firstCon = that.data.initList[0].info;
            } else {
              if (that.data.initList[i].type === 1) {
                that.data.dataList.push({
                  img: that.data.initList[i].info,
                  type: 1
                });
              } else {
                //type = 2 copy
                that.data.dataList.push({
                  cpy: that.data.initList[i].info,
                  type: 2
                });
              }
              that.data.focusList.push({
                focus: false
              });
            }
          } else {
            if (that.data.initList[i].type === 0) {
              // 文字，文字并不会单独占据一个item，而是和cpy，img在一起
              that.data.dataList[that.data.dataList.length - 1].info =
                that.data.initList[i].info;
            } else {
              if (that.data.initList[i].type === 1) {
                that.data.dataList.push({
                  img: that.data.initList[i].info,
                  type: 1
                });
              } else {
                //type = 2 copy
                that.data.dataList.push({
                  cpy: that.data.initList[i].info,
                  type: 2
                });
              }
              that.data.focusList.push({
                focus: false
              });
            }
          }
        }
        that.setData({
          firstCon: that.data.firstCon,
          focusList: that.data.focusList,
          dataList: that.data.dataList,
          insertIndex: that.data.dataList.length
        });
      }
    },
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
     * 富文本文字输入监听
     */
    _inputCon(e) {
      let that = this;
      let index = +e.currentTarget.dataset.index;
      // 因为要区分firstCon和列表的输入框，所以dataList里面文字从1开始，在wxml里面设置的
      if (index === 0) {
        that.data.firstCon = e.detail.value;
      } else {
        that.data.dataList[index - 1].info = e.detail.value;
      }
    },
    /**
     * 内部方法
     * 文本框失去焦点的监听事件
     * 存储失去焦点的文本框位置，为插入图片作准备
     */
    _outBlur(e) {
      let that = this;
      that.data.insertIndex = +e.currentTarget.dataset.index;
      that.setData({
        firstCon: that.data.firstCon,
        dataList: that.data.dataList,
        isEdit: false
      });
    },
    /**
     * 输入微信号的时候监听数据
     */
    _onCopyInput(e) {
      let that = this;
      let index = +e.currentTarget.dataset.index;
      that.data.dataList[index].cpy = e.detail;
    },
    /**
     * 输入微信号的时候监听数据
     */
    _onCopyBlur(e) {
      let that = this;
      that.setData({
        dataList: that.data.dataList
      });
    },
    /**
     * 内部方法
     * 调用添加图片事件监听
     */
    async _addImg() {
      let that = this;
      if (that.data.dataList.length < that.data.max_length) {
        try {
          let res = await wxPromise.chooseImage({
            count: 1,
            sourceType: ["album", "camera"]
          });
          // wxCensorImage 需要开启权限
          let risky = await wx.BaaS.wxCensorImage(res.tempFilePaths[0]);

          if (!risky) {
            Toast.fail("您的图片不符合微信标准");
            return;
          }

          let MyFile = new wx.BaaS.File();
          let fileParams = {
            filePath: res.tempFilePaths[0]
          };
          let metaData = {
            categoryName: "lottery_images"
          };

          that.data.progressList.splice(that.data.insertIndex + 1, 0, 0);
          let uploadTask = await MyFile.upload(
            fileParams,
            metaData
          ).onProgressUpdate(e => {
            // 监听上传进度
            console.log(e);
            that.data.progressList[that.data.insertIndex] = e.progress;
            that.setData({
              progressList: that.data.progressList
            });
          });
          that.data.dataList.splice(that.data.insertIndex, 0, {
            img: res.tempFilePaths[0],
            file: uploadTask.data.file,
            info: "",
            type: 1
          });
          that.data.focusList = that.data.focusList.map(item => {
            item.focus = false;
            return item;
          });
          that.data.focusList.splice(that.data.insertIndex + 1, 0, {
            focus: true
          });
          that.setData({
            dataList: that.data.dataList,
            focusList: that.data.focusList,
            insertIndex: that.data.insertIndex + 1,
            isEdit: true
          });
        } catch (err) {
          console.error("选择图片失败");
        }
      } else {
        Toast.fail("最多只能添加" + that.data.max_length + "张图片哦");
      }
    },
    /**
     * 增加复制区域
     */
    _addCopy() {
      let that = this;
      that.data.dataList.splice(that.data.insertIndex, 0, {
        info: "",
        type: 2
      });
      that.data.focusList = that.data.focusList.map(item => {
        item.focus = false;
        return item;
      });
      that.data.focusList.splice(that.data.insertIndex + 1, 0, {
        focus: true
      });
      that.setData({
        dataList: that.data.dataList,
        focusList: that.data.focusList,
        insertIndex: that.data.insertIndex + 1,
        isEdit: true
      });
    },
    /**
     * 内部方法
     * 删除图片
     */
    _deletedImg(e) {
      let that = this;
      let index = +e.detail;
      if (that.data.dataList[index].info) {
        if (index === 0) {
          // 最后一个
          that.data.firstCon =
            that.data.firstCon + that.data.dataList[index].info;
        } else {
          that.data.dataList[index - 1].info =
            that.data.dataList[index - 1].info + that.data.dataList[index].info;
        }
      }
      that.data.dataList.splice(index, 1);
      that.setData({
        firstCon: that.data.firstCon,
        dataList: that.data.dataList
      });
    },
    /**
     * 暴露出来的方法
     * 返回 富文本数据list
     */
    _saveRichText() {
      let that = this;
      let list = [];
      if (that.data.firstCon) {
        list.push({
          info: that.data.firstCon,
          type: 0
        });
      }

      for (let item of that.data.dataList) {
        if (item.img) {
          list.push({
            type: 1,
            info: item.file.path
          });
        } else {
          if (item && item.cpy && item.cpy.content) {
            list.push({
              info: item.cpy,
              type: 2
            });
          } else {
            Toast.fail("请输入微信号");
            return;
          }
        }
        if (item.info) {
          list.push({
            info: item.info,
            type: 0
          });
        }
      }

      if (list && list.length > 0) {
        that.triggerEvent("getDataList", list);
      } else {
        Toast.fail("请输入图文信息");
      }
    }
  }
});

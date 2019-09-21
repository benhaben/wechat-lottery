// pages/user_question/user_question.js
import Toast from "../../lib/van/toast/toast";
import dao from "../../utils/dao";
import { ROUTE } from "../../utils/constants";

const { regeneratorRuntime } = global;
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    questions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let questionsRes = await dao.getQuestions();
    this.setData({
      questions: questionsRes.data.objects
    });
  }
});

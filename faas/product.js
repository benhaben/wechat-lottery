/** 商品详情页 js 代码 **/
const productTableId = 12345678;
const orderTableId = 123456789;

Page({
  data: {
    product: {}
  },

  onLoad(options) {
    // 设置默认的商品 id，方便调试
    const productId = options.id || "5ade97135acfb521865bf766";
    this.getProductDetail(productId);
  },
  /**
   * 获取商品详情信息
   * @param {String} id
   */
  getProductDetail(id) {
    const tableObject = new wx.BaaS.TableObject(productTableId);
    const query = new wx.BaaS.Query();

    query.compare("id", "=", id);
    tableObject
      .setQuery(query)
      .find()
      .then(res => {
        const objects = res.data.objects || [];
        const product = objects[0] || {};
        this.setData({ product });
      });
  },
  /**
   * 点击立即购买按钮事件
   */
  createOrder(e) {
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          this.createOrderHandle();
        } else {
          wx.BaaS.login();
        }
      }
    });
  },
  /**
   * 创建订单处理函数
   */
  createOrderHandle() {
    // 使用云函数创建订单，触发器或云函数更新订单状态
    wx.BaaS.invokeFunction("createOrder", {
      product_id: this.data.product.id
    })
      .then(res => {
        this.order = res.data || {};
        return this.pay(this.order);
      })
      .then(res => {
        wx.navigateTo({ url: "../order/order" });
      });
  },
  /**
   * 发起微信支付
   * @param {Object} order
   */
  pay(order) {
    const product = this.data.product;
    const params = {
      totalCost: order.total_cost,
      merchandiseDescription: product.title,
      merchandiseSchemaID: orderTableId,
      merchandiseRecordID: order.id,
      merchandiseSnapshot: product
    };
    return wx.BaaS.pay(params).then(res => {
      return res.transaction_no;
    });
  }
});

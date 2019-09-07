/** 创建订单云函数 **/
const productTableId = 12345678;
const orderTableId = 123456789;

exports.main = function createOrder(event, callback) {
  const { product_id } = event.data;
  const user_id = event.request.user.id;

  getProductDetail(product_id)
    .then(product => {
      return createOrderHandel(product, user_id);
    })
    .then(res => {
      const order = res.data || {};
      callback(null, order);
    })
    .catch(err => {
      callback(err);
    });
};

function getProductDetail(id) {
  const tableObject = new BaaS.TableObject(productTableId);

  const query = new BaaS.Query();
  query.compare("id", "=", id);
  return tableObject
    .setQuery(query)
    .find()
    .then(res => {
      const objects = res.data.objects || [];
      const product = objects[0] || {};
      return product;
    });
}

function createOrderHandel(product, user_id) {
  const tableObject = new BaaS.TableObject(orderTableId);
  const createObject = tableObject.create();

  const data = {
    product_id: product.id,
    product_snapshot: product,
    total_cost: product.price,
    status: "no_paid",
    created_by: user_id
  };
  return createObject.set(data).save();
}

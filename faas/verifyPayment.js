/** 校验并更新订单状态云函数 **/
const productTableId = 12345678;
const orderTableId = 123456789;

exports.main = function verifyPayment(event, callback) {
  const data = event.data;
  const totalCost = data.total_cost;
  const orderId = data.merchandise_record_id;
  const transactionNo = data.transaction_no;
  const merchandiseSnapshot = data.merchandise_snapshot;
  const productId = merchandiseSnapshot.id;

  getProductDetail(productId).then(product => {
    if (product.price === totalCost) {
      updateOrder(orderId, transactionNo);
    }
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

function updateOrder(orderId, transaction_no) {
  const tableObject = new BaaS.TableObject(orderTableId);
  const recordId = orderId;
  const record = tableObject.getWithoutData(recordId);

  record.set("status", "paid");
  record.set("transaction_no", transaction_no);
  return record.update();
}

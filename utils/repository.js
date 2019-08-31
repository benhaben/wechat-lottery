const pageLimit = 15;

let getLotteries = cb => {
  let tableName = getApp().globalData.tb_lottery,
    Books = new wx.BaaS.TableObject(tableName),
    query = new wx.BaaS.Query();
  // query.compare('amount', '>', 0)
  Books.setQuery(query)
    .offset(0)
    .limit(pageLimit)
    .orderBy("created_at")
    .find()
    .then(res => cb(res))
    .catch(err => console.dir(err));
};

let addBook = (ctx, cb) => {
  let tableName = getApp().globalData.tableName,
    Books = new wx.BaaS.TableObject(tableName),
    Book = Books.create(),
    bookName = ctx.data.creatingBookName;

  let data = {
    bookName
  };

  Book.set(data)
    .save()
    .then(res => cb(res))
    .catch(err => console.dir(err));
};

let updateBook = (ctx, cb) => {
  let tableName = getApp().globalData.tableName,
    recordId = ctx.data.curRecordId,
    bookName = ctx.data.editingBookName;

  let Books = new wx.BaaS.TableObject(tableName),
    Book = Books.getWithoutData(recordId);

  let data = {
    bookName
  };

  Book.set(data)
    .update()
    .then(res => cb(res))
    .catch(err => console.dir(err));
};

let deleteBook = (ctx, cb) => {
  let tableName = getApp().globalData.tableName,
    recordId = ctx.data.curRecordId;

  let Books = new wx.BaaS.TableObject(tableName);

  Books.delete(recordId)
    .then(res => cb(res))
    .catch(err => console.dir(err));
};

module.exports = {
  getLotteries,
  addBook,
  updateBook,
  deleteBook
};

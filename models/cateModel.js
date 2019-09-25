const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu'
})
module.exports = {
  getCateList(callBack) {
    let sql = `select * from categories`;
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err)
      } else {
        callBack(null, result);
      }
    })
  },
  editCate(obj, callBack) {
    let sql = 'update categories set ? where id=?';
    connection.query(sql, [obj, obj.id], (err) => {
      if (err) {
        console.log(err);
        callBack(err);
      } else {
        callBack(null);
      }
    })
  },
  addCate(obj, callBack) {
    let sql = 'insert into categories set?';
    connection.query(sql, obj, (err) => {
      if (err) {
        console.log(err);
        callBack(err);
      } else {
        callBack(null);
      }
    })
  },
  delCateById(id, callBack) {
    let sql = `delete from categories where id in (${id})`;
    connection.query(sql, (err) => {
      if (err) {
        callBack(err);
        console.log(err);
      } else {
        callBack(null);
      }
    })
  }


}
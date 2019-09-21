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
  }
}
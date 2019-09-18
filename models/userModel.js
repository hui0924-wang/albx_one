// 引入mysql模块
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu'
});
module.exports = {
  login(email, callBack) {
    let sql = `SELECT * FROM users WHERE email='${email}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err);
      } else {
        callBack(null, result[0]);
      }
    })
  }

}
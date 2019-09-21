// 这个文件用于处理所有与posts相关的数据操作
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  // dateStrings: true
});
module.exports = {
  getAllPostsList(callBack) {
    // let sql = `SELECT posts.*,users.nickname,categories.\`name\` 
    //          FROM posts,users,categories 
    //          WHERE posts.user_id =users.id AND posts.category_id=categories.id`;
    let sql = `select posts.*,users.nickname,categories.\`name\` from posts
               join users on posts.user_id=users.id
               join categories on posts.category_id=categories.id`
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err);
      } else {
        callBack(null, result)
      }
    })
  }
}
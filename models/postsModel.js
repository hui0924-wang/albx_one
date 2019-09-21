// 这个文件用于处理所有与posts相关的数据操作
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  dateStrings: true
});
module.exports = {
  getAllPostsList(query, callBack) {

    // let sql = `SELECT posts.*,users.nickname,categories.\`name\` 
    //          FROM posts,users,categories 
    //          WHERE posts.user_id =users.id AND posts.category_id=categories.id`;
    let sql = `select posts.*,users.nickname,categories.\`name\` from posts
               join users on posts.user_id=users.id
               join categories on posts.category_id=categories.id
               limit ${(query.pageNum - 1) * query.pageSize},${query.pageSize}`;
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err);
      } else {
        sql = `select count(*) as cnt from posts`;
        connection.query(sql, (err2, result2) => {
          if (err2) {
            callBack(err2)
          } else {
            // console.log(result);
            callBack(null, { data: result, cnt: result2[0].cnt })
          }
        })
        // callBack(null, result)
      }
    })
  }
}
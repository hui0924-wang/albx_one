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
    console.log(query);

    // let sql = `SELECT posts.*,users.nickname,categories.\`name\` 
    //          FROM posts,users,categories 
    //          WHERE posts.user_id =users.id AND posts.category_id=categories.id`;
    let sql = `select posts.*,users.nickname,categories.\`name\` from posts
               join users on posts.user_id=users.id
               join categories on posts.category_id=categories.id
               where 1=1 `//恒成立;
    if (query.cate && query.cate != 'all') {
      sql += ` and posts.category_id=${query.cate} `
    }
    if (query.statu && query.statu != 'all') {
      sql += ` and posts.status='${query.statu}' `
    }
    sql += `order by posts.id DESC
          limit ${(query.pageNum - 1) * query.pageSize},${query.pageSize}`;

    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err);
      } else {
        sql = `select count(*) as cnt from posts where 1=1`;
        if (query.cate && query.cate != 'all') {
          sql += ` and posts.category_id=${query.cate} `
        }
        if (query.statu && query.statu != 'all') {
          sql += ` and posts.status='${query.statu}' `
        }
        connection.query(sql, (err2, result2) => {
          if (err2) {
            callBack(err2)
          } else {
            // console.log(result2[0].cnt);
            callBack(null, { data: result, cnt: result2[0].cnt })
          }
        })
        // callBack(null, result)
      }
    })
  },
  addpost(obj, callBack) {
    // let sql = `insert into posts values (null,'${obj.slug}','${obj.title}','${obj.feature}','${obj.created}',
    // '${obj.content}','${obj.views}','${obj.likes}','${obj.status}','${obj.user_id}','${obj.category}')`;
    // 在mysql第三方模块中，提供了参数化查询的方式，就是使用?做为参数占位符以些来简化sql语句
    // 它可以自动的生成sql语句
    let sql = 'insert into posts set ?'
    connection.query(sql, obj, (err, result) => {
      if (err) {
        callBack(err);
      } else {
        callBack(null, result);
        // console.log(result);
      }
    })
  },
  getPostById(id, callback) {
    var sql = 'select * from posts where id = ' + id;
    connection.query(sql, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results[0])
      }
    })
  },
  editPost(obj, callback) {
    var sql = 'update posts set ? where id = ?'
    connection.query(sql, [obj, obj.id], (err) => {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
  }
}
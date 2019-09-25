const connection = require('./conn');
module.exports = {
  getMenuList(callBack) {
    let sql = 'select \`value\` from \`options\` where id=9';
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err)
      } else {
        // console.log(result[0].value);
        callBack(null, result[0].value);
      }
    })
  },
  addMenu(obj, callBack) {
    let sql = 'select \`value\` from \`options\` where id=9';
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err)
      } else {
        let arr = JSON.parse(result[0].value);
        arr.push(obj);
        let jsonStr = JSON.stringify(arr);
        sql = 'update \`options\` set value=? where id=9 ';
        connection.query(sql, [jsonStr], (err2) => {
          if (err2) {
            callBack(err2);
          } else {
            callBack(null);
          }
        })
      }
    })
  },
  delMenu(title, callBack) {
    let sql = 'select \`value\` from \`options\` where id=9';
    connection.query(sql, (err, result) => {
      if (err) {
        callBack(err)
      } else {
        let arr = JSON.parse(result[0].value);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].title == title) {
            arr.splice(i, 1);
          }
        }
        let jsonStr = JSON.stringify(arr);
        // console.log(jsonStr);
        sql = 'update options set value=? where id=9';
        connection.query(sql, [jsonStr], (err2) => {
          if (err2) {
            callBack(err2);
          } else {
            callBack(null);
          }
        })
      }

    })
  }
}
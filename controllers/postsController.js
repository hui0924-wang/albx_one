// 所有与posts表相关的业务处理都在这个文件中实现

const postsModel = require('../models/postsModel')
const moment = require('moment');
module.exports = {
  getAllPostsList(req, res) {
    let query = req.query;
    postsModel.getAllPostsList(query,(err, data) => {
      if (err) {
        res.json({
          code: 500,
          msg: 'err'
        })
      } else {
        // 遍历data，将其中的每一个元素对象的created进行合理的日期格式转换
        // moment().format('日期格式') // 将当前日期进行转换
        // moment(你想转换的源格式).format('目标格式')
        // data.forEach((value) => {
        //   value.created = moment(value.created).format('YYYY-MM-DD HH:mm:ss');
        // })
        res.json({
          code: 200,
          msg:'获取数据成功',
          data
        })
      }
    })
  }
}
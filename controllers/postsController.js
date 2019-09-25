// 所有与posts表相关的业务处理都在这个文件中实现

const postsModel = require('../models/postsModel')
const moment = require('moment');
module.exports = {
  getAllPostsList(req, res) {
    let query = req.query;
    postsModel.getAllPostsList(query, (err, data) => {
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
          msg: '获取数据成功',
          data
        })
      }
    })
  },
  addpost(req, res) {
    // console.log(req.body);
    var obj = req.body;
    obj.id = null;
    obj.user_id = req.session.currentUser.id;
    obj.views = 0;
    obj.likes = 0;
    postsModel.addpost(obj, (err, result) => {
      console.log(err);
      if (err) {
        res.json({
          code: 500,
          msg: '服务器异常'
        })
      } else {
        if (result.affectedRows == 1) {
          res.json({
            code: 200,
            msg: '新增成功',
          })
        } else {
          res.json({
            code: 400,
            msg: '新增失败',
          })
        }

      }
    })
  },
  getPostById(req, res) {
    // 获取参数
    let id = req.query.id;
    console.log(id);
    // 调用数据模块进行文章数据的获取
    postsModel.getPostById(id, (err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '获取数据失败'
        })
      } else {
        data.created = moment(data.created).format('YYYY-MM-DDTHH:mm:ss')
        res.json({
          code: 200,
          msg: '获取数据成功',
          data
        })
      }
    })
  },
  // 实现文章的编辑
  editPost(req, res) {
    // 接收参数
    var obj = req.body
    // 调用数据模块
    postsModel.editPost(obj, (err) => {
      // 返回操作结果
      if (err) {
        res.json({
          code: 400,
          msg: '编辑文章失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '编辑文章成功'
        })
      }
    })
  }
}
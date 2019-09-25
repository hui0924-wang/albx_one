const cateModel = require('../models/cateModel');
module.exports = {
  getCateList(req, res) {
    cateModel.getCateList((err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '获取数据失败'
        })
      } else {
        if (data) {
          res.json({
            code: 200,
            msg: '获取数据成功',
            data
          })
        }
      }
    })
  },
  editCate(req, res) {
    let obj = req.body;
    // console.log(obj);
    cateModel.editCate(obj, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: "编辑失败"
        })
      } else {
        res.json({
          code: 200,
          msg: "编辑成功"
        })
      }
    })
  },
  addCate(req, res) {
    let obj = req.body;
    obj.id = null;
    cateModel.addCate(obj, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: "添加失败"
        })
      } else {
        res.json({
          code: 200,
          msg: "添加成功"
        })
      }
    })
  },
  delCateById(req, res) {
    let id = req.query.id;
    console.log(id);
    cateModel.delCateById(id, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: "删除失败"
        })
      } else {
        res.json({
          code: 200,
          msg: "删除成功"
        })
      }
    })
  }
}
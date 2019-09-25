const optionsModel = require('../models/optionsModel');
module.exports = {
  getMenuList(req, res) {
    optionsModel.getMenuList((err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '获取数据失败'
        })
      } else {
        res.json({
          code: 200,
          msg: "获取数据成功",
          data: JSON.parse(data)
        })
      }
    })
  },
  addMenu(req, res) {
    let obj = req.body;
    obj.icon = 'fa fa-gift';
    // console.log( typeof  JSON.stringify(obj));
    optionsModel.addMenu(obj, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: '添加失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '添加成功'
        })
      }
    })
  },
  delMenu(req, res) {
    let title = req.query.title;
    // console.log(title);
    optionsModel.delMenu(title, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: '删除失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '删除成功'
        })
      }
    })
  },
  getSiteOptions(req, res) {
    optionsModel.getSiteOptions((err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '获取数据失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '获取数据成功',
          data
        })
      }
    })
  },
  updateSiteOptions(req, res) {
    let obj = req.body;
    obj.comment_status = obj.comment_status == 'on' ? '1' : '0';
    obj.comment_reviewed =obj.comment_reviewed == 'on' ? '1' : '0';
    console.log(obj);
    optionsModel.updateSiteOptions(obj, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: '保存数据失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '保存数据成功',
        })
      }
    })
  }
}
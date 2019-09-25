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
  }
}
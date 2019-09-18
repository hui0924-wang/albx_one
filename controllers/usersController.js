const userModel=require('../models/userModel');
module.exports = {
  login(req, res) {
    let { password, email } = req.body
    userModel.login(email, (err, data) => {
      if (err) {
        res.json({
          code: 500,
          msg: '服务器异常，请稍后再试'
        })
      } else {
        if (data) {
          if (data.password == password) {
            res.json({
              code: 200,
              msg: '登陆成功'
            })
          } else {
            res.json({
              code: 400,
              msg: '密码输入错误'
            })
          }
        } else {
          res.json({
            code: 400,
            msg: '邮箱输入错误'
          })
        }
      }
    })
  }
}
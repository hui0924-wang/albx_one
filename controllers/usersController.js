const userModel = require('../models/userModel');

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
            // session方式
            req.session.isLogin = 'true';
            req.session.currentUser = data;
            res.json({
              code: 200,
              msg: '登录成功'
            })
            // cookie方式：
            // //将登陆成功的状态以Set-Cookie的方式写入响应头，返回
            // res.writeHead(200,{'Set-Cookie':'isLogin=true'});
            // res.end(JSON.stringify({
            //   code:200,
            //   msg:'登录成功'
            // }))

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
  },
  loginOut(req, res) {
    // res.redirect('/login');
    req.session.isLogin = '';
    res.json({
      code: 200,
      msg: '退出成功'
    })
  }
}
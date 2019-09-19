// 引入模块
const express = require('express');
const router = require('./02-router.js');
const bodyParser = require('body-parser');
const session = require('express-session');

// 创建服务器对象
const app = express();
// 开启服务器
app.listen(5555, () => {
  console.log('http://127.0.0.1:5555')
});
// 处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// 设置模板引擎
app.set('view engine', 'ejs');
// 配置ejs资源的默认目录,后期在渲染的时候可以只需要指定相对路径就可以了
app.set('views', 'views');

// 注册中间件
// urlencoded解析器
app.use(bodyParser.urlencoded({ extended: false }));
// json解析器
app.use(bodyParser.json());

// express-session中间件
app.use(session({
  secret: 'keyboard cat',
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: true,
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: true,
}));

// 注册路由中间件，当app每次接受请求时，都会触发这个中间件
app.use(function (req, res, next) {
  console.log(req.url);
  if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/login' || req.url.indexOf('/admin') == -1) {
    next();
  } else {
    res.redirect('/login');
  }
})

// 注册路由
app.use(router);


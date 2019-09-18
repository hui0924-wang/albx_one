// 引入模块
const express = require('express');
const router = require('./02-router.js');

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

// 注册路由
app.use(router);

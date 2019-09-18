// 引入模块
const express = require('express');
// const router = require('./02-router.js');
const fs = require('fs');
// 创建服务器对象
const app = express();
// 开启服务器
app.listen(5555, () => {
  console.log('http://127.0.0.1:5555')
});
// 处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// 添加一个路由配置
// 读取前台首页
app.get('/', (req, res) => {
  fs.readFile(__dirname + '/views/index.html', (err, data) => {
    if (err) {
      res.end('err');
    } else {
      res.end(data);
    }
  })
});
// 读取后台首页，约定后台页面都都以/admin 开头
app.get('/admin', (req, res) => {
  fs.readFile(__dirname + '/views/admin/index.html', (err, data) => {
    if (err) {
      res.end('err');
    } else {
      res.end(data);
    }
  })
})

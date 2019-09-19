// const querystring = require('querystring');

module.exports = {
  //  1.获取前台页面
  // 1.1获取前台首页
  getIndexPage(req, res) {
    res.render('index.ejs');
  },
  // 1.2获取前台详情页
  getDetailPage(req, res) {
    res.render('detail.ejs');
  },
  // 1.3获取前台列表页
  getlistPage(req, res) {
    res.render('list.ejs');
  },
  // 2.获取后台页面
  // 2.1后台主页
  getAdminIndexPage(req, res) {

    // if (req.session.isLogin && req.session.isLogin == 'true') {
      res.render('admin/index.ejs');
    // } else {
    //  res.redirect('/login');
    // }

    // cookie方式
    // let obj = querystring.parse(req.headers.cookie);
    // console.log(req);
    // if (obj.isLogin && obj.isLogin == 'true') {
    //   res.render('admin/index.ejs');
    // } else {
    //   res.redirect('/login');
    // }

  },
  // 2.2分类目录页面
  getAdminCategoriesPage(req, res) {
    res.render('admin/categories.ejs');
  },
  //2.3 评论页面
  getAdminCommentsPage(req, res) {
    res.render('admin/comments.ejs');
  },
  // 2.4导航菜单页面
  getAdminNavMenusPage(req, res) {
    res.render('admin/nav-menus.ejs');
  },
  //2.5 
  getAdminPWDResetPage(req, res) {
    res.render('admin/password-reset.ejs');
  },
  // 2.6 写文章页面
  getAdminPostAddPage(req, res) {
    res.render('admin/post-add.ejs');
  },
  // 2.7 所有文章页面
  getAdminPostsPage(req, res) {
    res.render('admin/posts.ejs');
  },
  // 2.8 个人资料页面
  getAdminProfilePage(req, res) {
    res.render('admin/profile.ejs');
  },
  // 2.9 网站设置页面
  getAdminSettingsPage(req, res) {
    res.render('admin/settings.ejs');
  },
  // 2.10图片轮播
  getAdminSlidesPage(req, res) {
    res.render('admin/slides.ejs');
  },
  // 2.11用户页面
  getAdminUsersPage(req, res) {
    res.render('admin/users.ejs');
  },

  // 3.登录页面
  getLoginPage(rea, res) {
    res.render('admin/login.ejs');
  }


}

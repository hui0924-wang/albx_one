module.exports = {
  //  1.获取前台页面
  // 1.1获取前台首页
  getIndexPage(req, res) {
    res.render('index.ejs');
  },
  getDetailPage(req, res) {
    res.render('detail.ejs');
  },
  getlistPage(req, res) {
    res.render('list.ejs');
  },
  // 2.获取后台页面
  // 2.1后台主页
  getAdminIndexPage(req, res) {
    res.render('admin/index.ejs');
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
  getAdminPostAddPage(req, res) {
    res.render('admin/post-add.ejs');
  },
  getAdminPostsPage(req, res) {
    res.render('admin/posts.ejs');
  },
  getAdminProfilePage(req, res) {
    res.render('admin/profile.ejs');
  },
  getAdminSettingsPage(req, res) {
    res.render('admin/settings.ejs');
  },
  getAdminSlidesPage(req, res) {
    res.render('admin/slides.ejs');
  },
  getAdminUsersPage(req, res) {
    res.render('admin/users.ejs');
  },


}

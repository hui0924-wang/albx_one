const express = require('express');
const pageController = require('./controllers/pageController');
const usersController = require('./controllers/usersController');
const postsController=require('./controllers/postsController')
const cateController=require('./controllers/cateController')
const router = express.Router();

// 读取前台页面
router.get('/', pageController.getIndexPage)
      .get('/detail', pageController.getDetailPage)
      .get('/list', pageController.getlistPage)
      // 读取后台首页，约定后台页面都都以/admin 开头
      .get('/admin',pageController.getAdminIndexPage)
      .get('/admin/categories',pageController.getAdminCategoriesPage)
      .get('/admin/comments',pageController.getAdminCommentsPage)
      .get('/admin/nav-menus',pageController.getAdminNavMenusPage)
      .get('/admin/password-reset',pageController.getAdminPWDResetPage)
      .get('/admin/post-add',pageController.getAdminPostAddPage)
      .get('/admin/posts',pageController.getAdminPostsPage)
      .get('/admin/profile',pageController.getAdminProfilePage)
      .get('/admin/settings',pageController.getAdminSettingsPage)
      .get('/admin/slides',pageController.getAdminSlidesPage)
      .get('/admin/users',pageController.getAdminUsersPage)
      // 读取登录页面
      .get('/login',pageController.getLoginPage)
      .post('/login',usersController.login)
      // 退出 返回登录页面
      .get('/loginOut',usersController.loginOut)
      // 获取所有文章数据请求
      .get('/getAllPostsList',postsController.getAllPostsList)
      // 获取分类数据的请求
      .get('/getCateList',cateController.getCateList)

      




module.exports = router;
const express = require('express');
const pageController = require('./controllers/pageController');
const usersController = require('./controllers/usersController');
const postsController=require('./controllers/postsController')
const cateController=require('./controllers/cateController');
const uploadController = require('./controllers/uploadController');
const optionsController=require('./controllers/optionsController')
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
      // 编辑文章 静态页面请求
      .get('/getPostById',postsController.getPostById)

      // 文件上传请求
      .post('/uploadFile',uploadController.uploadFile)

      // 新增  文章请求
      .post('/addpost',postsController.addpost)
      // 编辑  文章请求
      .post('/editPost',postsController.editPost)
      // 发送分类数据 编辑请求
      .post('/editCate',cateController.editCate)
      // 发送添加分类数据请求
      .post('/addCate',cateController.addCate)
      .get('/delCateById',cateController.delCateById)
      // 获取导航菜单数据请求
      .get('/getMenuList',optionsController.getMenuList)
      // 发送导航菜单数据 添加请求
      .post('/addMenu',optionsController.addMenu)
      // 发送删除导航菜单数据 请求
      .get('/delMenu',optionsController.delMenu)
      // 网络设置  动态显示请求
      .get('/getSiteOptions',optionsController.getSiteOptions)
      // 网络设置 编辑请求
      .post('/updateSiteOptions',optionsController.updateSiteOptions)
      

module.exports = router;
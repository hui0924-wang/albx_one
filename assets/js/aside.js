$(function () {
  // 1.获取当前的路由名称
  let str = location.href;
  // console.log(location.href);
  let routerName = '';
  let index = str.indexOf('?');
  if (!index == -1) {
    // 有参数
    routerName = str.substring(str.lastIndexOf('/') + 1, index);

  } else {
    // 没有参数
    routerName = str.substring(str.lastIndexOf('/') + 1);
  };
  // 2.实现菜单项的展开功能
  let menuPosts = $('#menu-posts');
  let menuSettings = $('#menu-settings');
  if (routerName == 'posts' || routerName == 'categories' || routerName == 'post-add') {
    menuPosts.addClass('in').attr('aria-expanded', true);
    menuPosts.siblings('a').removeClass('collapsed').attr('aria-expanded', true);
  }
  if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings') {
    menuSettings.addClass('in').attr('aria-expanded', true);
    menuSettings.siblings('a').removeClass('collapsed').attr('aria-expanded', true);
  }

  $("#"+ routerName).addClass('active');
})
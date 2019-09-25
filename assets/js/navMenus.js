$(function () {
  // 1.导航菜单的动态显示
  function init() {
    $.ajax({
      type: 'get',
      url: '/getMenuList',
      dataType: 'json',
      success: function (res) {
        console.log(res);
        if (res.code == 200) {
          $('tbody').html(template('menuListTemp', res));
        }
      }
    })
  };
  init();

  // 2.导航菜单的添加
  $('.btnAdd').on('click', function () {
    $.ajax({
      type: 'post',
      url: '/addMenu',
      data: $('form').serialize(),
      dataType: 'json',
      success: function (res) {
        console.log(res);
        if (res.code == 200) {
          init();
        }
      }
    })
  })



})
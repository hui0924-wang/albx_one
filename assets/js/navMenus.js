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


  // 单条导航数据的删除
  $('tbody').on('click', '.btnDel', function () {
    if (!confirm('确定要删除吗？')) {
      return;
    }
    // console.log($('.btnDel').data('title'));
    $.ajax({
      type: 'get',
      url: '/delMenu',
      data: { title: $(this).data('title') },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        init();
      }
    })
  })
})
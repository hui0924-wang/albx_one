$(function () {
  $.ajax({
    type: 'get',
    url: '/getMenuList',
    dataType: 'json',
    success: function (res) {
      console.log(res);
      $('.header .nav').html(template('menuListTemp', res));
    }
  })
})
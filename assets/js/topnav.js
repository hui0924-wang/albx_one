$(function () {
  $.ajax({
    type: 'get',
    url: '/getMenuList',
    dataType: 'json',
    success: function (res) {
      console.log(res);
      $('.topnav').html(template('menuListTemp', res));
    }
  })
})
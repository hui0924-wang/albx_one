$(function () {
  $.ajax({
    type: 'get',
    url: '/getAllPostsList',
    dataType: 'json',
    success: function (res) {
      var html = template('postListTemp', res);
      console.log(html);
      console.log(res);
      $('tbody').html(html);
    }
  })
})
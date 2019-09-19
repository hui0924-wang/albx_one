$(function () {
  $('.appExit').on('click', () => {
    $.ajax({
      type: 'get',
      url: '/loginOut',
      success: function (res) {
        if (res.code == 200) {
          location.href = '/login';
        }

      }
    })
  })
})
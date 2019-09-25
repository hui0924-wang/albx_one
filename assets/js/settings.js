$(function () {
  function init() {
    $.ajax({
      type: 'get',
      url: '/getSiteOptions',
      dataType: 'json',
      success: function (res) {
        // console.log(res);
        $('form').html(template('siteListTemp', res));
      }
    })
  };

  init();

  $('form').on('click', '.btnSave', function () {
    console.log($('form').serialize());
    $.ajax({
      type: 'post',
      url: '/updateSiteOptions',
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
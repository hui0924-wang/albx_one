$(function () {
  $('.btn-login').on('click', () => {

    $.ajax({
      type: 'post',
      url: '/login',
      dataType: 'json',
      //  serialize:可以收集当前指定的表单中所有拥有name属性的表单元素的value值
      data: $('form').serialize(),
      success: function (res) {
        console.log(res);
        if(res.code==200){
          location.href='/admin';
        }
        
      }
    })
  })
})
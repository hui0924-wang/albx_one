
$(function () {
  $('#feature').on('change', function () {
    // files:用户所选择文件列表 伪数组
    // 获取选择文件对象
    let myfile = this.files[0];
    // console.log(this.files);
    // console.log(myfile);

    // 使用formdata收集数据
    var formdata = new FormData();
    formdata.append('img', myfile);
    formdata.append('username', 'jack_28');
    // 发起ajax请求
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data:formdata,
      dataType:'json',
      processData: false,
      contentType: false,
      success:function(res){
        console.log(res);
        // 预览
        $('.thumbnail').attr('src',"/"+res.img).show();
        // 将当前图片路径存储到隐藏域中
        $('[name="feature"]').val(res.img);

      }
    })

  })
})
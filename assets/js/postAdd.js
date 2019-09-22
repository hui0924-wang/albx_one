
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
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false,
      success: function (res) {
        console.log(res);
        // 预览
        $('.thumbnail').attr('src', "/" + res.img).show();
        // 将当前图片路径存储到隐藏域中
        $('[name="feature"]').val(res.img);

      }
    })

  });


  // 富文本框的添加和使用
  // 1.创建一个富文本框控件(实例对象)来覆盖你所指定的id号为content的文本域
  CKEDITOR.replace('content');

  // 实现文件新增
  $('.btn-add').on('click', function () {
    // CKEDITOR.instances:可以获取当前页面中所有的富文本框对象集合
    // console.log(CKEDITOR.instances);
    // 获取id号为content的富文本框对象
    // console.log(CKEDITOR.instances.content);
    // 富文本框数据的获取  ：这种方式后期需手动拼接参数
    // console.log(CKEDITOR.instances.content.getData());
    // console.log($('form').serialize());
    // 实现富文本框与文本域的同步
    CKEDITOR.instances.content.updateElement();
   console.log($('form').serialize());
  })

})
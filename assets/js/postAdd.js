
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
        if (res.code == 200) {
          // 预览
          $('.thumbnail').attr('src', "/" + res.img).show();
          // 将当前图片路径存储到隐藏域中
          $('[name="feature"]').val(res.img.substring(res.img.lastIndexOf('\\') + 1));
        }
      }
    })

  });

  // 分类
  $.ajax({
    type: 'get',
    url: '/getCateList',
    dataType: 'json',
    success: function (res) {
      let html = "";
      res.data.forEach(value => {
        html += `<option value="${value.id}">${value.name}</option>`
      });
      $('#category_id').html(html);
    }
  });

  // 富文本框的添加和使用
  // 1.创建一个富文本框控件(实例对象)来覆盖你所指定的id号为content的文本域
  CKEDITOR.replace('content');
 let params = itcast.getParams(location.search);
  console.log(params);

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
    if (params.id) {
      opt('/editPost')
    } else {
      opt('/addpost');
    }
    //  console.log($('form').serialize());

  });
  // 发起ajax请求
  function opt(url) {
    $.ajax({
      type: 'post',
      url,
      data: $('form').serialize(),
      dataType: 'json',
      success: function (res) {

        $('.alert-danger>span').text(res.msg);
        $('.alert-danger').show();
        if (res.code == 200) {
          setTimeout(() => {
            location.href = '/admin/posts';
          }, 1000)
        }

      }
    })
  }




  if (params.id) {
    $.ajax({
      type: 'get',
      url: '/getPostById',
      data: { id: params.id },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        $('#title').val(res.data.title)
        $('#content').val(res.data.content)
        $('#slug').val(res.data.slug)
        // 图片：如果用户没有修改图片，就应该保留原始的图片数据
        // 所以：我们应该实现图片的预览的时候，还要将图片数据存储到隐藏域中
        $('.thumbnail').attr('src', '/uploads/' + res.data.feature).show()
        $("[name='feature']").val(res.data.feature)
        $('#category_id').val(res.data.category_id)
        $('#status').val(res.data.status)
        // datetime-local需要的日期格式为YYYY-MM-DDTHH:mm:ss
        $('#created').val(res.data.created)
        // 将id号也存储到隐藏域
        $('[name="id"]').val(res.data.id)
      }
    })
  }


})
$(function () {
  //1. 展示分类数据
  function init() {
    $.ajax({
      type: 'get',
      url: '/getCateList',
      dataType: 'json',
      success: function (res) {
        if (res.code == 200) {
          $('tbody').html(template('cateListTemp', res));
        }
      }
    })
  };
  init();

  // 2.分类数据的 默认展示
  $('tbody').on('click', '.btnEdit', function () {
    // console.log($(this).data('id'));
    // 2.1获取自定义属性的数据
    let data = $(this).data();
    $('#name').val(data.name);
    $('#slug').val(data.slug);
    $('[name="id"]').val(data.id);
    // 2.1 提示信息的设置 和 按钮的显示与隐藏
    $('.info').text('编辑分类数据');
    $('.btnEditById').show();
    $('.btnAdd').hide();
  });

  // 3.实现分类数据的编辑提交
  $('.btnEditById').on('click', function () {
    // console.log($('form').serialize()),
    $.ajax({
      type: 'post',
      url: '/editCate',
      data: $('form').serialize(),
      dataType: 'json',
      success: function (res) {
        // console.log(res);
        // 信息提示
        $('.alert-danger > span').text(res.msg);
        $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);
        if (res.code == 200) {
          $('#name').val('');
          $('#slug').val('');
          $('[name="id"]').val('');
          $('.info').text('添加新分类目录');
          $('.btnEditById').hide();
          $('.btnAdd').show();
          init();
        }


      }
    })
  });

  // 4.实现分类数据的添加
  $('.btnAdd').on('click', function () {
    $.ajax({
      type: 'post',
      url: '/addCate',
      data: $('form').serialize(),
      dataType: 'json',
      success: function (res) {
        // console.log(res);
        // 信息提示
        $('.alert-danger > span').text(res.msg);
        $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);
        if (res.code == 200) {
          $('#name').val('');
          $('#slug').val('');
          init();
        }

      }
    })
  });

  // 5.删除单条分类数据
  $('tbody').on('click', '.btnDel', function () {
    // console.log($(this).data('id'));
    let id = $(this).data('id');
    $.ajax({
      type: 'get',
      url: '/delCateById',
      data: { id },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        $('.alert-danger > span').text(res.msg);
        $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);

      }

    })
  });

  // 6.批量删除数据
  // 6.1 实现全选和全不选 及批量删除的显示和隐藏
  $('.ckAll').on('click', function () {
    // console.log($(this).prop("checked"));
    let statu = $(this).prop("checked");
    // 根据status 判断 下面选框是否全选
    $('tbody .ckSingle').prop("checked", statu);
    if ($('tbody .ckSingle:checked').length > 1) {
      $('.btnDels').fadeIn(500);
    } else {
      $('.btnDels').fadeOut(500);
    }
  })

  // 6.2 进行数据行复选框操作的时候，要让全选状态切换
  $('tbody').on('click', '.ckSingle', function () {
    if ($('tbody .ckSingle:checked').length > 1) {
      $('.btnDels').fadeIn(500);
    } else {
      $('.btnDels').fadeOut(500);
    };
    // 如果当前tbody中被选择复选框的数量和tbody中所有复选框的数量一致  则让全选复选框也被选中
    if ($('tbody .ckSingle').length == $('tbody .ckSingle:checked').length) {
      $('.ckAll').prop("checked", true);
    } else {
      $('.ckAll').prop("checked", false);
    }
  });

  // 6.3 为批量删除按钮绑定事件，实现批量删除
  $('.btnDels').on('click', function () {
    let all = $('.ckSingle:checked');
    let arr = [];
    all.each((i, e) => {
      arr.push(e.dataset.id);
    })
    console.log(arr.join(','));
    if (!confirm('确定要删除吗？')) {
      return;
    };
    // 发起删除请求
    $.ajax({
      type: 'get',
      url: '/delCateById',
      data: { id: arr.join(',') },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        $('.alert-danger > span').text(res.msg);
        $('.alert-danger').fadeIn(500).delay(1500).fadeOut(500);
        if(res.code==200){
          init();
        }
      }
    })

  })









})
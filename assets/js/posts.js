
$(function () {
  let pageSize = 2;
  let pageNum = 1
  function init(obj) {
    console.log(obj);
    $.ajax({
      type: 'get',
      url: '/getAllPostsList',
      dataType: 'json',
      data: {
        pageNum,
        pageSize,
        // // 展开运算符：它可以将对象的成员一个一个展开
        ...obj
      },
      success: function (res) {
        var html = template('postListTemp', res.data);
        // console.log(html);
        console.log(res);
        if (res.code == 200) {
          // 生成文章数据列表结构
          $('tbody').html(html);
          // 生成分页结构
          setPage(Math.ceil(res.data.cnt / pageSize));
        }
      }
    });
  };
  init();
  function setPage(total) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pageNum,
      // 总页数
      totalPages: total,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function (event, originalEvent, type, page) {
        // 把当前点击的页码赋值给pageNum, 调用ajax,渲染页面
        // 修改全局页码
        pageNum = page;
        // 重新获取数据生成动态结构
        var obj = {
          cate: $('.cateSelector').val(),
          statu: $('.statuSelector').val()
        };
        init(obj);
      }
    })
  };


  // 实现分类数据的动态加载--下拉列表
  $.ajax({
    type: 'get',
    url: '/getCateList',
    dataType: 'json',
    success: function (res) {
      let html = `<option value="all">所有分类</option>`
      res.data.forEach(value => {
        html += `<option value="${value.id}">${value.name}</option>`
      });
      $('.cateSelector').html(html);
    }
  });

  // 实现筛选
  $('.btn-search').on('click', function () {
    //  获取筛选条件
    var obj = {
      cate: $('.cateSelector').val(),
      statu: $('.statuSelector').val()
    };
    // 重置当前页码
    pageNum = 1;
    // 发起ajax请求
    init(obj);
  })
})

$(function () {
  let pageSize = 2;
  let pageNum = 1
  function init() {
    $.ajax({
      type: 'get',
      url: '/getAllPostsList',
      dataType: 'json',
      data: {
        pageNum,
        pageSize
      },
      success: function (res) {
        var html = template('postListTemp', res.data);
        // console.log(html);
        console.log(res);
        $('tbody').html(html);
        setPage(Math.ceil(res.data.cnt / pageSize));
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
        pageNum = page;
        init();
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
  })
})
const formidable = require('formidable');
module.exports = {
  uploadFile(req, res) {
    // 创建文件上传对象
    let form = new formidable.IncomingForm();
    // 配置
    // 编码
    form.encoding = 'utf-8';
    // 是否保留文件扩展名
    form.keepExtensions = true;
    // 上传文件的存储目录
    form.uploadDir = "./uploads";

    // 实现上传操作
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 400,
          msg: '文件上传失败'
        })
      } else {
        console.log(fields);
        console.log(files.img.path);
        res.json({
          code: 200,
          msg: '文件上传成功',
          img: files.img.path
        })

      }
    })
  },
  
}


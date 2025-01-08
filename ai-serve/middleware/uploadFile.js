import multer from "@koa/multer"


// 处理form-data文件的中间件
const storage = multer.diskStorage({
    // 控制文件的存储位置
    destination: (_req, file, cb) => {
      // 校验文件类型
      const fileType = ["image/png", "image/jpeg", "image/webp"];
      if (!fileType.includes(file.mimetype)) {
        return cb({ msg: "请上传正确的图片", code: 422, validate: null });
      }
      cb(null, "files/");
    },
    // 更改文件的名称
    filename: (_req, file, cb) => {
      const fileName = file.originalname.split(".");
      const newFile = `${new Date().getTime()}.${fileName[fileName.length - 1]}`;
      cb(null, newFile);
    },
  });
  
  const uploadFile = multer({ storage });


  export default uploadFile
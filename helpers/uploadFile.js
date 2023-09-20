const multer = require("multer");

const storage = multer.diskStorage({
  //definir onde os arquivos vao ser guardados
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const time = Date.now();
    cb(null, `${time} - ${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;

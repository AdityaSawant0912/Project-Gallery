const router = (module.exports = require("express").Router());

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploadImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req, res) => {
  console.log("Retriving data");
  // console.log(req.file);
  let images = req.file;
  
  console.log("done");
});


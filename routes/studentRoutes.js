const express = require('express');
const path = require('path');
const studentController = require('../controllers/studentController');
const { route } = require('./projectRouts');

const fs = require("fs");


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


const router = express.Router();
router.use(express.static('public'))
router.use(express.static(path.join(__dirname, 'public')))
router.use('/dashboard/:regNo', express.static('public'))
router
    .route("/dashboard/:regNo")
    .get(studentController.getStudentDashboard);
    
router
    .route("/upload")
    .get(studentController.getUpload)
    .post(upload.single("image"), studentController.postUpload);

// router 
//     .route("/edit/:regNo/:id")
//     .get(studentController.getEdit)
//     .post(studentController.postEdit)
    
module.exports = router;
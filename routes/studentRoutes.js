const express = require('express');
const path = require('path');
const studentController = require('../controllers/studentController');

const router = express.Router();
router.use(express.static('public'))
router.use(express.static(path.join(__dirname, 'public')))
router
    .route("/dashboard/:regNo")
    .get(studentController.getStudentDashboard);
    
router
    .route("/upload")
    .get(studentController.getUpload)
    // .post(studentController.postUpload);

// router 
//     .route("/edit/:regNo/:id")
//     .get(studentController.getEdit)
//     .post(studentController.postEdit)
    
module.exports = router;
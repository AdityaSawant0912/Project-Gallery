const express = require('express');
const path = require('path');
const studentController = require('../controllers/studentController');


const router = express.Router();
router
    .route("/dashboard/:regNo")
    .get(studentController.getStudentDashboard);
    
module.exports = router;
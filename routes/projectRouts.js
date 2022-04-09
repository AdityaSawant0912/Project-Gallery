const express = require('express')
const path = require('path')
const projectController = require('../controllers/projectController');

const router = express.Router();
router
    .route("/all")
    .get(projectController.getAllProject)

    
router.use(express.static('public'))
router
    .route("/:category")
    .get(projectController.getProjectByCategory)
router.use("/:category/:id",express.static('public'))

router
    .route("/:category/:id")
    .get(projectController.getProjectById);

module.exports = router;
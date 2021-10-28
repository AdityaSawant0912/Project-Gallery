const express = require('express')
const projectController = require('../controllers/projectController');

const router = express.Router();

router
    .route("")
    .get(projectController.getAllProject)
    .post(projectController.createNewProject)
    .put(projectController.updateProject);

router
    .route("/:id")
    .get(projectController.getProjectById)
    .delete(projectController.deleteProjectById);


module.exports = router;
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
    .delete(projectController.deleteProjectById)
    .get(projectController.getProjectById);

router.use(express.static('public'))
module.exports = router;
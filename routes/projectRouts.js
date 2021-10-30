const express = require('express')
const projectController = require('../controllers/projectController');

const router = express.Router();
router.use(express.static('public'))
router
    .route("/")
    .get(projectController.getAllProject)
    .post(projectController.createNewProject)
    .put(projectController.updateProject);

router
    .route("/id/:id")
    .get(projectController.getProjectById)
    .delete(projectController.deleteProjectById);


module.exports = router;
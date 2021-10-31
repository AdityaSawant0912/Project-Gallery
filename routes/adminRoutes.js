const express = require('express'); 
const path = require('path')
const adminController = require('../controllers/adminController');

const router = express.Router();
router
    .route("")
    .get(adminController.getAdminHome)
    .post(adminController.createNewProject)
    .put(adminController.updateProject);

router.use(express.static(path.join(__dirname, 'public')))

router
    .route("/:id")
    .get(adminController.getProjectById)
    .delete(adminController.deleteProjectById)
    
    


module.exports = router;
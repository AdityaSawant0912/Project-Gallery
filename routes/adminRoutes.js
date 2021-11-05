const express = require('express'); 
const path = require('path')
const adminController = require('../controllers/adminController');

const router = express.Router();
router.use(express.static('public'))
router
    .route("")
    .get(adminController.getAdminHome)
    .post(adminController.createNewProject);
    

router
    .route("/put")
    .post(adminController.updateProject); 

router
    .route("/create")
    .get(adminController.getProjectCreate);

router
    .route("/edit/:id")
    .get(adminController.getProjectEdit)
    
router.use('/edit', express.static('public'))
router.use(express.static(path.join(__dirname, 'public')))

router
    .route("/:id")
    .get(adminController.getProjectById)
    .delete(adminController.deleteProjectById)
    
    


module.exports = router;
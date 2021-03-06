const express = require('express'); 
const path = require('path')
const adminController = require('../controllers/adminController');
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
router
    .route("")
    .get(adminController.getAdminHome)
    .post(upload.single("image"), adminController.createNewProject)

    

router
    .route("/put/:id")
    .post(adminController.updateProject); 

router
    .route("/create")
    .get(adminController.getProjectCreate);
router
    .route("/register")
    .get(adminController.getRegister);
router
    .route("/pending")
    .get(adminController.getAllPendingProject)
    
router.use("/pending/:id",express.static('public'))

router
    .route("/pending/:id")
    .get(adminController.getPendingProjectById)
router
    .route("/remark/:id")
    .post(adminController.remarkProjectById)
router
    .route("/approve/:id")
    .get(adminController.approveProjectById)

router
    .route("/edit/:id")
    .get(adminController.getProjectEdit)

router
    .route("/delete/:id")
    .get(adminController.deleteProjectById)
    
router.use('/edit', express.static('public'))
router.use(express.static(path.join(__dirname, 'public')))

router
    .route("/:id")
    .get(adminController.getProjectById)
    .delete(adminController.deleteProjectById)
    
    


module.exports = router;
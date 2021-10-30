const express = require('express'); 
const adminController = require('../controllers/adminController');

const router = express.Router();
router
    .route("")
    .get(adminController.getAdminHome)

router.use(express.static('public'))

module.exports = router;
const express = require('express');
const path = require('path')
const homeController = require('../controllers/homeCrontroller');

const router = express.Router();
router
    .route("")
    .get(homeController.getHome);

router.use(express.static(path.join(__dirname, 'public')))

module.exports = router;


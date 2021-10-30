const express = require('express');
const homeController = require('../controllers/homeCrontroller');

const router = express.Router();
router
    .route("")
    .get(homeController.getHome);

router.use(express.static('public'))

module.exports = router;


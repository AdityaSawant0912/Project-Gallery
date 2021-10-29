const express = require('express');
const homeController = require('../controllers/homeCrontroller');

const router = express.Router();

router
    .route("")
    .get(homeController.getHome);

module.exports = router;


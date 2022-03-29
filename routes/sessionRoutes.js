const express = require('express');
const path = require('path');
const sessionController = require('../controllers/sessionController');
const misc = require('../misc');


const router = express.Router();
router
    .route("/register")
    .get(misc.sessionAuthorized, sessionController.getRegister)
    .post(misc.sessionAuthorized, sessionController.doRegister);

router
    .route("/login")
    .get(misc.sessionAuthorized, sessionController.getLogin)
    .post(misc.sessionAuthorized, sessionController.doLogin);
    
router
    .route("/logout")
    .get(misc.loginChecker, sessionController.doLoggout);
    
router.use(express.static(path.join(__dirname, 'public')))

module.exports = router;


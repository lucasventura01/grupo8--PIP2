const express = require('express');
const router = express.Router();
const loginController = require('../controllers/log_regController.js');

router.get("/", loginController.login);


module.exports = router;
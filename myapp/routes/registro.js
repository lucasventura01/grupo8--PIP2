const express = require('express');
const router = express.Router();
const registerController = require('../controllers/log_regController.js');

router.get("/", registerController.register);

module.exports = router;
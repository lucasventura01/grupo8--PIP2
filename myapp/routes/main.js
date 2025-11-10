const express = require("express");
const router = express.Router();
const main = require("../controllers/mainController");

router.get("/", main.index);
router.get("/search", main.search);

module.exports = router;

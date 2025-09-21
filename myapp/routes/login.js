const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
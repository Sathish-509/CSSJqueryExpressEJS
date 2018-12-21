var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Advanced', menuId:'advanced'});
});

module.exports = router;

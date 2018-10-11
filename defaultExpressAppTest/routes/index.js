var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Madeleine!' });
});

router.post('/contact', function(req, res, next) {
  res.redirect('/thank_you');
});

module.exports = router;

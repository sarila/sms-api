var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Congratualations on setting up your first api');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var index = require('../model/index')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(index)
});

module.exports = router;
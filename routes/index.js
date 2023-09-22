var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(
    {
      "title": "Welcome",
      "description":"Who can use this textbook ?"
    }
  )
});

module.exports = router;

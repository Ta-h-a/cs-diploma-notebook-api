var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(
    {
      "title": "Welcome",
      "description":[
        "This textbook is your new best friend for learning about experiments. Whether you're a current student or a graduate, you'll find everything you need to know to ace your exams"
      ],
      "tableOfContents": [
  
      ]
    }
  )
});

module.exports = router;

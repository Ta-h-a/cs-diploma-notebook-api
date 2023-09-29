var express = require('express');
var router = express.Router();
var index = require('../model/index')
const ejs = require("ejs");
require('dotenv').config();
const fs = require('fs/promises');
const path = require('path');

const filename = path.join(process.cwd(), 'model', 'index.js');
console.log(filename);

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  if (req.body.username === process.env.MLBP_USERNAME && req.body.password === process.env.MLBP_PASSWORD){
    res.send(
      {
        logged: true,
        currentState: index.isLocked
      }
      );
    }else{
      res.send(
        {
          logged: false,
        }
        )
      }
    });
    
    router.put('/', async function (req,res){
      const fd = await fs.open(filename, "w");
      // const fd = fs.openSync(filename, 'w');
      if(req.body.state){
        // Runs when website is locked
        index.isLocked = false
      }else{
        // Runs when website needs to be shut down
        index.isLocked = true
      }
      await fs.writeFile(fd, `const data = ${JSON.stringify(index)};\nmodule.exports = data`);
      // await fs.(fd);
      res.send(index.isLocked);
})

module.exports = router;
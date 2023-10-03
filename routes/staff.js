var express = require('express');
var router = express.Router();
var index = require('../model/index')
require('dotenv').config();
const createClient = require("@vercel/kv").createClient;

const kv = createClient({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

// const fs = require('fs/promises');
// const path = require('path');
// const filename = path.join(process.cwd(), 'model', 'index.js');
// console.log(filename);

// await kv.set("user_1_session", "session_token_value");
// const session = await kv.get("user_1_session");

async function getStatus(){
  const status = await kv.get("isLocked");
  console.log(status);
  return status;
}

/* GET home page. */
router.post('/', function(req, res, next) {
  // console.log(req.body.username);
  if (req.body.username === process.env.MLBP_USERNAME && req.body.password === process.env.MLBP_PASSWORD){
    res.send(
      {
        logged: true,
        currentState: getStatus()
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
      // const fd = await fs.open(filename, "w");
      let status = false
      // // const fd = fs.openSync(filename, 'w');
      if(!req.body.state){
        status = true
      }
      await kv.set("isLocked", status);
      // await fs.writeFile(fd, `const data = ${JSON.stringify(index)};\nmodule.exports = data`);
      // // await fs.(fd);
      console.log(status)
      res.send(status);
})

module.exports = router;
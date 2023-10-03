var express = require('express');
var router = express.Router();
var index = require('../model/index')
require('dotenv').config();
const createClient = require("@vercel/kv").createClient;

const kv = createClient({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

/* GET home page. */
router.get('/', async function(req, res, next) {
  index.isLocked = await kv.get("isLocked");
  res.send(index);
});

module.exports = router;
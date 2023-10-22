const express = require("express");
const semester = require("./routes/semester")
const theory = require("./routes/theory")
const practical = require("./routes/practical")
const index = require("./routes/index")
const cors = require("cors");
const staff = require("./routes/staff.js")
var bodyParser = require('body-parser')

var corsOptions = {
    origin: 'https://cs-diploma-notebook.vercel.app',
    // origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Express application 'using' middlewares
app.use(cors(corsOptions));
app.use('/semester',semester)
app.use("/theory",theory)
app.use('/practical',practical)
app.use("/",index)
app.use("/staff",staff)

app.listen(3000,()=>{
    console.log("Server started on Port 3000");
})

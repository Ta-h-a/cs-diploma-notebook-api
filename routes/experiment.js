const express = require("express")
const experimentData = require("../model/experiment")

const router = express.Router();

router.get(
    "/:name",
    (req,res,next)=>{
        experimentData.forEach((semData) => {
            if (req.params.name == semData.name){
                res.send(semData);
            }
        });
    })

module.exports = router;
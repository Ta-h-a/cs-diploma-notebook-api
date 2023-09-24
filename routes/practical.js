const express = require("express")
const practicalData = require("./../public/practical")
const experiment = require("./experiment")

const router = express.Router();
router.use("/experiment/",experiment)

router.get(
    "/:name",
    (req,res,next)=>{
        if(req.params.name === "all"){
            res.json(practicalData);
        }
        // semesterData.map(
        //     (semData, index)=>{
        //         if (req.params.id == index){
        //             switch(req.params.id){
        //                 case 1:
        //                     res.send(semData)     
        //             }
        //         }
        //     }
        // )
        practicalData.forEach((semData) => {
            if (req.params.name == semData.name){
                res.send(semData);
            }
        });
    })


module.exports = router;
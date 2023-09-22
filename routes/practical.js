const express = require("express")
const practicalData = require("./../public/practical")

const router = express.Router();

router.get(
    "/:name",
    (req,res,next)=>{
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
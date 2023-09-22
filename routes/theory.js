const express = require("express")
const theoryData = require("../public/theory");

const router = express.Router();

router.get(
    "/:courseName",
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
        theoryData.forEach((theory) => {
            if (req.params.courseName == theory.name){
                res.send(theory);
            }
        });
    })

module.exports = router;
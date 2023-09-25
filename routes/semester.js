const express = require("express")
const semesterData = require("./../model/semester")

const router = express.Router();

router.get(
    "/:id",
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
        semesterData.forEach((semData,i) => {
            let index = i + 1;
            if (req.params.id == index){
                // switch(index){
                //     case 1:
                //         res.json(semData);
                //         break;
                //     case 4:
                        
                // }
                res.json(semData)
            }
        });
    })

module.exports = router;
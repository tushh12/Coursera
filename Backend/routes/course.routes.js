import express from "express";

const courseRouter = express.Router();

courseRouter.post("/purchase",function(req,res) {
    // you would expect user to pay money 
    res.json({
        message : "user when purchase course"
    })
})
courseRouter.get("/preview",function(req,res){
    res.json({
        message : "preview course"
    })
})
export default courseRouter;

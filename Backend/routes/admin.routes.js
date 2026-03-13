import express from "express"
import { adminModel } from "../db.js";
const adminRouter  = express.Router();

adminRouter.post("/signup",function(req,res){
    res.json({
        message : "signup endpoint"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
        message : "signup endpoint"
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message : "i think it one of that where you can create the courses"
    })
})
adminRouter.put("/course",function(req,res){
    res.json({
        message : "course i think one of that "
    })
})
adminRouter.get("/course",function(req,res){
    res.json({
        message : " one of the course routes i think to see because it has the get one routes"
    })
})

export default adminRouter;
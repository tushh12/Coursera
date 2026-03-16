import express from "express"
import { adminModel } from "../db.js";
import jwt from "jsonwebtoken";
const adminRouter  = express.Router();


adminRouter.post("/signup", async function(req,res){
    const {email,password,firstName,lastName} = req.body;
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message : "admin got signup"
    })
})
adminRouter.post("/signin", async function(req,res){
    const {email,password} = req.body;
    const user = await adminModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token = jwt.sign({
            id : admin._,
        },process.env.JWT_ADMIN_PASSWORD);
           
        res.json({
        token : token
    })
 } else{
        res.status(403).json({
            message : "incorrect credientails"
        })
    }   
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
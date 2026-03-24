import express from "express"
import { adminModel, courseModel } from "../db.js";
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
            id : admin._id,
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
adminRouter.post("/course", async function(req,res){
     const adminId = req.userId;
     const {title,imageUrl,description,price} = req.body;
     // for taking image not an image url watch creating web3 sass in 6 hours - harkirat singh
     const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId,
     })
    res.json({
        message : "Course created",
        courseId : course._id
    })
})
adminRouter.put("/courseupdate", async function(req,res){
      const adminId = req.userId;
      const {title,imageUrl,description,price,courseId} = req.body;
      const course = await courseModel.findOneAndUpdate({
        _id : courseId,
        creatorId : adminId
      },{
        title: title,
        imageUrl:imageUrl,
        description:description,
        price:price,
      })
      
    res.json({
        message : "Course updated",
        courseId : course._id
    })
})
adminRouter.get("/course",async function(req,res){
    const adminId = req.userId;
    const courses =  await courseModel.find({
            creatorId : adminId
    })
    res.json({
        message : "Course updated",
        courses
    })
})

export default adminRouter;
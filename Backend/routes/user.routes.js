import express from "express"
import { userModel } from "../db.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post("/signup", async function(req,res){
    const {email,password,firstName,lastName} = req.body; // adding zod validation
    // hash the password from bycrypt so plain text password looks alike

    // put inside the try catch block
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
      res.json({
        message : "signup succedd"
      })
})

userRouter.post("/signin", async function(req,res){

    const {email,password} = req.body;
    // ideally password should be hashed and hence you can't compare user provided password and database password
    const user = await userModel.findOne({
        email:email,
        password:password,
    })
    if(user){
    const token = jwt.sign({
        id : user._id,
    },process.env.JWT_USER_PASSWORD);

    // Do cookie logic  
    
    res.json({
        token : token
    })
} else{
     res.status(403).json({
        message : "incorrect credentials"
     })
}
})
userRouter.get("/purchased",function(req,res){
    res.json({
        message:"User purchases courses"
    })
})
export  default userRouter;
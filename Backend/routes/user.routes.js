import express from "express"
import { courseModel, purchaseModel, userModel } from "../db.js";
import jwt from "jsonwebtoken";
import userMiddleware from "../middlewares/usermiddleware.js";
import { userSignupSchema,signinSchema } from "../validation.js";

const userRouter = express.Router();

userRouter.post("/signup", async function(req,res){
    const parsedData = userSignupSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(400).json({
            message:"Validation failed",
            error: parsedData.error.issues
        });
    }
    const {email,password,firstName,lastName} = req.body; // adding zod validation
    // hash the password from bycrypt so plain text password looks alike

    // put inside the try catch block

    try{
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
      res.json({
        message : "signup succedd"
      })
    } catch(error){
        res.status(500).json({
            message : "Error creating user",
            error:error.message
        });
    }
})

userRouter.post("/signin", async function(req,res){
    const parsedData = signinSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(400).json({
            message : "invalid input "
        })
    }
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
}
    
 else{
     res.status(403).json({
        message : "incorrect credentials"
     })
}
});
userRouter.get("/purchased", userMiddleware, async function(req,res){
      const userId = req.userId;
      const purchases = await purchaseModel.findOne({
        userId,
      });
      let purchaseCourseId = [];
      for(let i=0;i<purchases.length;i++){
         purchaseCourseId = push(purchases[i].courseId);
      }
      const courseData =  await courseModel.find({
        _id : {$in :  purchaseCourseId}
      })

    res.json({
        purchases,
        courseData
    })
})
export  default userRouter;
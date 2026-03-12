import express from "express"

const userRouter = express.Router();

userRouter.post("/signup",function(req,res){
      res.json({
        message : "signup endpoint"
      })
})

userRouter.post("/signin",function(req,res){
    res.json({
        message: "signin endpoint"
    })
})
userRouter.get("/purchased",function(req,res){
    res.json({
        message:"User purchases courses"
    })
})
export  default userRouter;
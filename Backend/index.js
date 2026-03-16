import express from "express";
import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js";
import adminRouter from "./routes/admin.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/',(req,res) => {
  res.send("hello from the backend! the mordern server is running")
    });
async function  main (){
 await mongoose.connect(process.env.MONGO_URI);
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);    
})  
}
main();
app.use("/user",userRouter);  
app.use("/course",courseRouter);
app.use("/admin",adminRouter);
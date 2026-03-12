import express from "express";
import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js";
import adminRouter from "./routes/admin.routes.js";
const app = express();

const PORT = 3000;

app.get('/',(req,res) => {
  res.send("hello from the backend! the mordern server is running")
    });

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})  
app.use("/user",userRouter);  
app.use("/course",courseRouter);
app.use("/admin",adminRouter);
import jwt from "jsonwebtoken"

function userMiddleware(req,res,next) {
    const token = req.headers.token;
    try {
    const decoded = jwt.verify(token,process.env.JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    } else{
        res.status(403).json({
            message : "invalid token payload"
        })
    }
} catch(error){
     res.status(403).json({
        message : "You are not signed in"
     })
}

}
export default userMiddleware;


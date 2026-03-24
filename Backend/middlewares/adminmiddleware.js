import jwt from "jsonwebtoken"

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    try {
    const decoded = jwt.verify(token,process.env.JWT_ADMIN_PASSWORD);
    if(decoded){
        req.adminId = decoded.id;
        next();
    }
    else {
        res.json(403).json({
            message : "invalid token payload "
        })
    }
}
    catch(error){
        res.status(403).json({
            message : "You are not signed in"
        })
    }
}
export default adminMiddleware;
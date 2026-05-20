import jwt from 'jsonwebtoken'
const {verify}=jwt

export function verifyToken(req,res,next){
    //token verification logic
    //console.log("The token object is:",req.cookies.token)
    const token=req.cookies?.token;
    //if req from unauthorized user
    if(!token)
    {
        return res.status(401).json({message: "Please Login"})
    }
    try
    {   
        //If token is existed
        const decodedToken=verify(token,"abcdef")
        console.log(decodedToken);
        //add the decoded token
        req.user=decodedToken;
    
        //call next
        next()
    }
    catch(err)
    {
        res.status(401).json({message:"Session Expired. Please Relogin"})
    }
}
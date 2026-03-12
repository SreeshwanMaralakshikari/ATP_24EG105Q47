//Create express app
import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from "./APIs/UserAPI.js";
import {productApp} from "./APIs/ProductAPI.js";
import cookieParser from 'cookie-parser';
import {config} from 'dotenv';

config();

const app=exp()
//add body parser(middleware)
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser())

const port=process.env.PORT || 4000
app.listen(1122,()=>console.log("Server on port 1122..."))

//forward req to UserAPP if path starts with /user-api
app.use("/user-api",userApp)

//forward req to ProductApp if path starts with /product-api
app.use("/product-api",productApp)

//connect to DB Server
async function connectDB()
{
    try
    {
        await connect(process.env.DB_URL)
        console.log("DB Connection success");
    }
    catch(err)
    {
        console.log("err in DB Connection:",err.name,":",err.message)
    }
}

connectDB();

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.code)
    //Validation Error
    if(err.name==="ValidationError")
    {
        res.status(400).json({message:"Validation Error occured",error:err.message})
    }
    //Cast Error
    if(err.name==="CastError")
    {
        res.status(400).json({message:"Casting Error occured",error:err.message})
    }
    //Duplication Error
    if(err.code===11000)
    {
        res.status(400).json({message:"Duplication Error; Email already Existing",error:err.message})
    }
    //Send server side error
        res.status(500).json({message:"error occured",error:"Server Side Error"})
})
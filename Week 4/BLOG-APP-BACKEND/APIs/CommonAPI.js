import exp from 'express';
import {UserModel} from '../models/UserModel.js';
import {hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import { verifyToken } from '../middlewares/VerifyToken.js';

const {sign} = jwt;

config();

export const commonApp=exp.Router();



//Route for Register
commonApp.post("/users",async(req,res)=>{
    //roles accepted to register
    let allowedRoles=["USER","AUTHOR"];

    //get user from req
    const newUser=req.body;
    console.log(req.body)
    //check if role is admin, then send error image
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid Role"});
    }

    //run validators manually!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    

    //hash password and replace plain  with hashed password
    newUser.password=await hash(newUser.password,12);

    //create New User Document
    const newUserDoc=new UserModel(newUser);

    //save document
    await newUserDoc.save();

    //send res
    res.status(201).json({message:"User Created"});
})

//Route for Login
commonApp.post("/login",async(req,res)=>{
    //no need to check for roles accepted to login because if correct role entered then only login
    //const allowedRolesToLogin=["USER","AUTHOR","ADMIN"];
    //get user cred obj from req
    const {email,password}=req.body;

    //find user by email
    const user=await UserModel.findOne({email:email});

    //if user not found
    if(!user){
        return res.status(400).json({message:"Invalid Email"});
    }

    //compare password
    const isMatched=await compare(password,user.password);

    //if passwords not matched
    if(!isMatched)
    {
        return res.status(400).json({message: "Invalid Password"});
    }

    //create jwt(jsonwebtoken)
    const signedToken=sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"6h"});
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })

    //send res to user
    const userObj=user.toObject();
    delete userObj.password;
    res.status(200).json({message:"Login Success",payload:userObj})
})

//Route for Logout
commonApp.get("/logout",(req,res)=>{
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //send res
    res.status(200).json({message:"Logout Success"});
})


//Change Password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    //get current password and new password
    const {currentPassword,newPassword}=req.body;

    //check current password and new password are same
    if(currentPassword===newPassword)
    {
        return res.status(404).json({message:"Current Password and New Password are same in your request"})
    }
    //get current password of user/admin/author
    const userIdOfToken=req.user?.id;
    const userDocument=await UserModel.findById(userIdOfToken)

    //check the current password of req and user are not same
    const isMatched=await compare(currentPassword,userDocument.password)
    if(!isMatched)
    {
        return res.status(403).json({message:"Your password is incorrect. Please Enter Again"})
    } 

    //hash the new password
    const hashedPassword=await hash(newPassword,12)

    //replace it woth original password
    userDocument.password=hashedPassword;
    //save
    await userDocument.save();
    //send res
    res.status(201).json({message:"User Password is successfully changed"})
})
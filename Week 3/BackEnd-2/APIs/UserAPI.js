//Create min-express app(Separate Route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import {verifyToken} from '../middleware/verifyToken.js'
import jwt from 'jsonwebtoken'; //jsonwebtoken only supports default export unlike other exports
import {config} from 'dotenv';

config();

const {sign}=jwt
//
export const userApp=exp.Router()

//Define User Rest API Routes
    //Create new User
    userApp.post("/users",async(req,res)=>{
        //get new user obj from req
        const newUser=req.body;
        //hash the password
        const hashedPassword=await hash(newUser.password,10)
        //replace the original plain password with hashed password
        newUser.password=hashedPassword;
        //Create new user document
        const newUserDocument=new UserModel(newUser);
        //save
        const result=await newUserDocument.save();
        console.log("result:",result);
        //send respone
        res.status(201).json({message: "User Created"});
    });

    //user login
    userApp.post('/auth',async(req,res)=>{
        //get user cred obj from client
        const {email,password}=req.body;
        //verify email
        let user=await UserModel.findOne({email:email})

        //if email not found
        if(!user)
        {
            return res.status(404).json({message:"Invalid Email"});
        }
        //compare passwords
        let result=await compare(password,user.password);

        //if passwords not matched
        if(!result)
        {
            return res.status(400).json({message:"Invalid Password"})
        }
        //if passwords are matched
            //create token(jsonwebtoken -jwt --jaat)
            const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"9h"}) /*non string: number==seconds, string: number==10(milliseconds), 
            10d=10days and 10w=10 weeks*/
            //store token as httpOnly cookie
            res.cookie("token",signedToken,{
                httpOnly: true,
                sameSite: "lax",
                secure: false
            })
            //send response
            res.status(200).json({message:"login success",payload:user})
    })

    //Read all users
    userApp.get("/users",verifyToken,async(req,res)=>{
        //read all users from db
        let usersList= await UserModel.find();
        //send res
        res.status(200).json({message:"users",payload:usersList});
    });

    //Read user by Email
    userApp.get("/user",verifyToken,async(req,res)=>{
        //Read object id from req params
        //const uid=req.params.id but this is not safest way

        //get the email of user from decoded token to get the current login user
        const emailOfUser=req.user?.email;
        console.log(emailOfUser);

        //find user by id
        //const userObj=await UserModel.findOne({_id:uid})
        //const userObj=await UserModel.findById(uid) not of best security

        //find user by id
        const userObj=await UserModel.findOne({email: emailOfUser}).populate("cart.product")

        //if user not found
        if(!userObj)
        {
            return res.status(404).json({message:"User not found"});
        }
        //send res
        res.status(200).json({message:"user",payload:userObj})
    })

    //Update a User by id
    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        //get modified user from req
        const modifiedUser=req.body;
        const uid=req.params.id;
        //find user by id and update
        const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set: {...modifiedUser }},{new: true,runValidators: true});
        if(!updatedUser)
        {
            return res.status(404).json({message: "User to be updated not found"})
        }
        //send res
        res.status(200).json({message:"User Modified",payload:updatedUser});
    })

    //delete user by id
    userApp.delete("/users/:id",verifyToken,async(req,res)=>{
        //get object Id from req params
        const uid=req.params.id;

        //find user by id and delete
        const deletedUser=await UserModel.findByIdAndDelete(uid,{new: true});
        //send res
        if(!deletedUser)
        {
            return res.status(404).json({message: "User to be deleted not found"})
        }
        res.status(200).json({message:"User Removed",payload:deletedUser})
    })

//app.use(verifyToken) ---> every req
//userApp.get(path,req-handler)

/*userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //Get product if from url parameter
    let prodId = req.params.pid;

    //Get current users details
    const emailOfUser=req.user?.email;

    //get user from db
    //const user=await UserModel.findOne({email:emailOfUser})
    //if user is invalid
    //if(!user)
    //{
    //    return res.status(404).json({message:"User not found"});
    //}

    //add product to cart
        //Before add, first it should check that product is already in the cart
        //If Product is there, then increment count by 1

        //else add the product to the cart
        let result = await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:prodId}}},{new: true})
        
    //if user email invalid
    if(!result)
    {
        return res.status(400).json({message:"User not found",payload: result})
    }
    res.status(200).json({message: "Product Successfully added to Cart",payload: result})
})*/

userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //Get product if from url parameter
    let prodId = req.params.pid;

    //Get current users details
    const emailOfUser=req.user?.email;

    //get user from db
    //const user=await UserModel.findOne({email:emailOfUser})
    //if user is invalid
    //if(!user)
    //{
    //    return res.status(404).json({message:"User not found"});
    //}

    //add product to cart
        //Before add, first it should check that product is already in the cart
        //If Product is there, then increment count by 1
        const user=await UserModel.findOne({email:emailOfUser})
        for(let product of user.cart)
        {
            if(product.product.ObjectId===prodId)
                product.count++;
            return res.status(200).json({message: `Product Already Exists so Quanitity increased to:${product.count}`});
        }
        
        //else add the product to the cart
        let result = await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:prodId}}},{new: true})
        
        //if user email invalid
        if(!result)
        {
            return res.status(400).json({message:"User not found",payload: result})
        }
        res.status(200).json({message: "Product Successfully added to Cart",payload: result})
})
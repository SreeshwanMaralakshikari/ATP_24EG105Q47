//Create mini-express app(Seperate Route)
import exp from 'express'
export const userApp=exp.Router()


//Test data (Replace this test data with DB)
let users=[]

//Create API(REST API - Representational State Transfer)
    //Route to handle GET request of the Client
    userApp.get('/users',(req,res)=>{
        //Read all users & send res
        res.json({message:"all users",payload:users})
    })


    //Route to handle GET User by Id request of the Client
    userApp.get('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)
        //find user
        let foundUser=users.find(userObj=>userObj.id===idOfUrl)
        if(foundUser===undefined)
        {
            return res.json({message:"User not found"})
        }
            res.json({message:`User with id ${foundUser.id} Found`,payload:foundUser})
    })


    //Route to handle POST request of the Client
    userApp.post('/users',(req,res)=>{
        //get user form client
        let newUser=req.body
        //push user into users
        users.push(newUser)
        //send res to client
        res.json({message:"User Created"})
    })


    //Route to handle PUT request of the Client
    userApp.put('/users',(req,res)=>{
        //get modified from client
        let modifiedUser=req.body
        //get index of exisiting user in userArray
        let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
        //if user not found
        if(index===-1)
        {
            return res.json({message:"User not found"})
        }
        //update user with index
        users.splice(index,1,modifiedUser)
        //send response to the client
        res.json({message:`User with index ${modifiedUser.index} is updated `})
    })


    //Route to handle  DELETE request of the Client
    userApp.delete('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)//{id: '5'}
        //find index of user
        let index=users.findIndex((userObj)=>userObj.id===idOfUrl)
        if(index==-1)
        {
            return res.json({message:"User not found"})
        }
        //delete user by index
        users.splice(index,1)
        //send res
        res.json({message:`User with index ${idOfUrl} is deleted `})
    })
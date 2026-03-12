//Create new User
/*export userApp.post("/users",async(req,res)=>{
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

export */
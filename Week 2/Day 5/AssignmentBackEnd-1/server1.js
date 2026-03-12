//Create HTTP Server
import exp from 'express'
const app=exp()

import {userApp} from "./APIs/UserAPI.js";
import {productApp} from "./APIs/ProductAPI.js";

//use body parser middleware(in-built)
app.use(exp.json())

//forward request to UserAPI of URL-Path contains user-api  
app.use('/user-api',userApp)

//forward request to ProductAPI of URL-Path contains product-api  
app.use('/product-api',productApp)


//set a port number
const port=1112

//assign port number to HTTP Server
app.listen(port,()=>console.log(`server listening to port ${port}...`))



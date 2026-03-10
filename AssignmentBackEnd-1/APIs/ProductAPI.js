//Create min-exp app(Separate route)
import exp from 'express'
export const productApp=exp.Router()

//////Product API /////////////////

//Create a products array to store post products
let products=[]

//Create API(REST API - Representational State Transfer)

    /*Route to handle POST request of the Client for (1) Create new Product({productId,name
    ,brand,price})*/
    productApp.post('/products',(req,res)=>{
        //get product form client
        let newProduct=req.body
        //push product into products
        products.push(newProduct)
        //send res to client
        res.json({message:"Product Created"})
    })

    //Route to handle GET request of the Client for (3)Read all products
    productApp.get('/products',(req,res)=>{
        //Read all products
        res.json({message:"All Products in Store",payload:products})
    })


    //Route to handle GET request of the Client for (3)Read all products by brand
    productApp.get('/products/:brand',(req,res)=>{
        //get brand of product from url parameter
        let brandOfURL=req.params.brand
        //filter products by brand
        let productsByBrand=products.filter(productItem=>productItem.brand===brandOfURL)
        //if no product of that brand found
        if(productsByBrand.length===0)
        {
            return res.json({message:`Products of Brand ${brandOfURL} not found`})
        }
        //if atleast one product of that brand found
        res.json({message:`Products of Brand ${brandOfURL}`,payload:productsByBrand})
    })


    //Route to handle PUT request of the Client (4) Update a Product
    productApp.put('/products',(req,res)=>{
        //get updated Product from client
        let updatedProduct=req.body
        //get index of exisiting product in products
        let index=products.findIndex(productItem=>productItem.productId===updatedProduct.productId)
        //if product not found
        if(index===-1)
        {
            return res.json({message:`Product with ID ${updatedProduct.productId} is not found`})
        }
        //update product with index
        products.splice(index,1,updatedProduct)
        //send response to the client
        res.json({message:`Product with ID ${updatedProduct.productId} is updated`})
    })


    //Route to handle  DELETE request of the Client (5) Delete a Product by Id
    productApp.delete('/products/:id',(req,res)=>{
        //get id of product from url parameter
        let idOfURL=Number(req.params.id)
        //find index of product
        let index=products.findIndex(productItem=>productItem.productId===idOfURL)
        if(index==-1)
        {
            return res.json({message:`Product with ${idOfURL} not found`})
        }
        //delete product by index
        products.splice(index,1)
        //send result to client
        res.json({message:`Product with ${idOfURL} is deleted`})
    })
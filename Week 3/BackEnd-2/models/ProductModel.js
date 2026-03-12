/*Create Product REST API with below features
Product document structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required)*/

import {Schema,model} from 'mongoose'

//Product Schema(productId,name,brand,price)
const productSchema=new Schema({
    productId:
    {
        type:String,
        required:[true,"ID of Product Required"],
        unique:[true,"ID of Product already exists"]
    },
    name:
    {
        type:String,
        required:[true,"Name of Product is Required"]
    },
    price:
    {
        type:Number,
        required:[true,"Price of Product is Required"],
        min:[10000,"Price of Product is less than 10000"],
        max:[50000,"Price of Product is higher than 50000"]
    },
    brand:
    {
        type:String,
        required:[true,"Brand of Product is Required"]
    },
},
{
    versionKey:false,
    timeStamps:true
})


export const ProductModel=new model("product",productSchema)
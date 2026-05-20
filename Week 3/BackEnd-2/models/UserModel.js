import {Schema,model,Types} from 'mongoose'

//create Cart Schema {product, count}
const cartSchema=new Schema({
    product:{
        type: Types.ObjectId,
        ref:"product" //Name of the product Model
    },
    count:{
        type: Number,
        default:1
    }
})

//Create User Schema
const userSchema=new Schema({
    userName:{
        type: String,
        required: [true,"Username is Required"],
        minLength: [4,"Min Length of Username is 4 Characters"],
        maxLength: [6,"Username size exceed 6 characters"]
    },
    password: {
        type: String,
        required: [true,"Password Required"]
    },
    email:{
        type: String,
        required: [true,"Email Required"],
        unique:[true,"Email is already used"]
    },
    age:{
        type: Number
    },
    cart:[cartSchema] //Now this cart can accept cartSchema Object
},{
    versionKey:false,
    timestamps:true,
})

    //string is javascript datatype
    //String is mongoose datatype

//Generate User Model
export const UserModel=model("user",userSchema)
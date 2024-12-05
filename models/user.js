const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    salt:{
        type:String,
    },
    profileImageURL:{
        type:String,
        default:""

    },
    
   
    
},{timestamps:true})
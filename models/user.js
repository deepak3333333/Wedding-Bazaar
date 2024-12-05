const { default: mongoose } = require("mongoose");
const {randomBytes,createHmac}=require("crypto");

const userSchema=new mongoose.Schema({
    username:{
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
          default:"https://cdn-icons-png.flaticon.com/512/149/149071.png"

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

   
    
},{timestamps:true})


userSchema.pre("save", function(next){
    const user=this
    const salt=randomBytes(16).toString("hex")
    const hashedPassword= createHmac("sha256",salt).update(user.password).digest("hex")
    user.salt=salt
    user.password=hashedPassword
    next()
})

const User=mongoose.model("User",userSchema)

module.exports=User
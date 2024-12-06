const User = require("../models/user")

async function handleUserSignupGet(req,res) {
 return res.render("signup")
    
}
async function handleUserSignupPost(req,res) {
    const {username,email,password,role}=req.body
    await User.create({username,email,password,role})
    return res.redirect("/users/login")
   
    
    
}
async function handleUserLoginGet(req,res) {
    return res.render("login")
    
}
async function handleUserLoginPost(req,res) {
    const loginfailed=false;
   const {email,password}=req.body
  
   try {
    const token=await User.matchedPasswordGenrateToken(email,password)
     return res.cookie("token", token).redirect("/");
    
   } catch (error) {
    return res.render("login",{error:"Incoorect Email or Password"})
    
   }
  
   

    
}

module.exports={handleUserSignupGet,handleUserLoginGet,handleUserSignupPost,handleUserLoginPost}
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
   const {email,password}=req.body
   const user=await User.matchedPassword(email,password)
   if(user) {
       return res.redirect("/")
   }
   

    
}

module.exports={handleUserSignupGet,handleUserLoginGet,handleUserSignupPost,handleUserLoginPost}
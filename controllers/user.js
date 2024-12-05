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

module.exports={handleUserSignupGet,handleUserLoginGet,handleUserSignupPost}
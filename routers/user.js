const { Router } = require("express");
const { handleUserSignupGet,handleUserLoginGet,handleUserSignupPost,handleUserLoginPost} = require("../controllers/user");


const router=Router()

router.get("/signup",handleUserSignupGet)
router.post("/signup",handleUserSignupPost)




router.get("/login",handleUserLoginGet)
router.post("/login",handleUserLoginPost)


module.exports=router
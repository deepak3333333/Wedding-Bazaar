const { Router } = require("express");
const { handleUserSignupGet,handleUserLoginGet,handleUserSignupPost} = require("../controllers/user");


const router=Router()

router.get("/signup",handleUserSignupGet)
router.post("/signup",handleUserSignupPost)




router.get("/login",handleUserLoginGet)


module.exports=router
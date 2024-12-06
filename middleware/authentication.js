const { validationToken } = require("../services/authentication");

function checkAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName];
        if(!tokenCookieValue){
            return next()
        }
        try {
            const userPayload=validationToken(tokenCookieValue);
           
            
            req.user=userPayload;
            
        } catch (error) {
            
        }
        return next()
    }
}
module.exports = checkAuthenticationCookie;
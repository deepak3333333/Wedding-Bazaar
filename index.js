const express=require("express")
const app=express()
const port=45


app.set('view engine',"ejs")












app.get("/", (req,res)=>{
    res.render("home")
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    console.log(`localhost:${port}`);
    
})


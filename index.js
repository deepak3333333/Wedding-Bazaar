const express = require("express");

const app = express();
const port = 45;

const mongoose = require("mongoose"); // Import mongoose only once

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/WeddingBazaar")
.then(() => {
    console.log("Connected to MongoDB");
})
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userRouter = require("./routers/user");
const cookieParser = require("cookie-parser");
const checkAuthenticationCookie = require("./middleware/authentication");
app.use(cookieParser());
app.use(checkAuthenticationCookie("token"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");



// Set up routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  
 
  console.log("This is ",req.user);
  
  res.render("home", { user:req.user });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

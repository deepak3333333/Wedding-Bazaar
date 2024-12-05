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

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("home");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

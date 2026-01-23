//import express
const express = require("express");
//create an express app
const app = express();

//import mongoose
const mongoose=require("mongoose");
// import dotenv (loads environment variables from .env file)
const dotenv=require("dotenv");
//import cors ()
const cors=require("cors")


//It makes the values written in .env available through process.env.
dotenv.config()
//Enables Cross-Origin Resource Sharing so that the backend can accept requests from different origins like frontend applications.
app.use(cors())
//converts request body into json object
app.use(express.json())


//Connect to database using connection link(MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Mongodb connected successfully")})
.catch((err)=>{console.log(err)});

// Handles all routes that start with /auth using authRoutes
app.use('/auth',require('./routes/authRoutes'))
// Handles all routes that start with /task using taskRoutes
app.use('/task',require('./routes/taskRoutes'))

// Handles GET request at /api
app.get("/api", (req, res) => {
  res.send("hi from express");
});

// Handles POST request at /api
app.post('/api',(req,res)=>{
  const temp=req.body;
  res.send(temp);
})

// start server on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

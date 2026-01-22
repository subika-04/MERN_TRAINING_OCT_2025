//import express
const express = require("express");
//create an express app
const app = express();

//import mongoose
const mongoose=require("mongoose");
// import dotenv (loads environment variables from .env file)
const dotenv=require("dotenv");

//It makes the values written in .env available through process.env.
dotenv.config()
//converts request body into json object
app.use(express.json())

//Connect to database using connection link(MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Mongodb connected successfully")})
.catch((err)=>{console.log(err)});

//Any request starting with /auth is forwarded to authRoutes
app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))
//get request using /api
app.get("/api", (req, res) => {
  res.send("hi from express");
});

//post request
app.post('/api',(req,res)=>{
  const temp=req.body;
  res.send(temp);
})

// start server on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

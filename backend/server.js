const express = require("express");
const app = express();

const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Mongodb connected successfully")})
.catch((err)=>{console.log(err)});

app.get("/api", (req, res) => {
  res.send("hi from express");
});
app.post('/api',(req,res)=>{
  const temp=req.body;
  res.send(temp);
})
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

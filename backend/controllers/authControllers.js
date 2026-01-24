const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require("../models/User")

exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const existingUser =await User.findOne({email});
    if(existingUser)
    {
        return res.status(400).send({message:"Email already exists"});
    }
    //if 10 given,2^10 times hashing algorithm runs(10-stable)
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await User.create({ 
        name,email,password:hashedPassword
    })
    //Status created=201
    res.status(201).json({msg:"user created successfully"})
}
exports.login=async(req,res)=>{
    try
    {
      const {email,password}=req.body;
      const existingUser=await User.findOne({email});
      if(!existingUser)
      {
        return res.status(400).send("Email Not Registered")
      }
      const isMatching=await bcrypt.compare(password,existingUser.password)
      if(!isMatching)
      {
        return res.status(400).send("Incorrect Password")
      }
      const token=jwt.sign(
        {
            id:existingUser._id
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
      )
      //res.status(200).send("User Successfully registered")
      res.json({token})
    }
    catch(error)
    {
        res.status(500).send(error);
    }
}

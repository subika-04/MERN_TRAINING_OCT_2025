    const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})
//Users-name of collection
module.exports=mongoose.model('Users',userSchema)

const mongoose = require("mongoose");


const Users = mongoose.Schema({
    email: {type:String},
    password:{type:String,require:true},
    name:{type:String},
   
    gender:{type:String},
     farming: {
         type: String
     },
    Location:{type:String},
    avater:{type:String},
    join:  {type:Date, Default:Date.now() },
    resetPasswordToken: String,
    resetPasswordExpires:{type:Date},

    

})
module.exports = mongoose.model('Users', Users);
import mongoose from "mongoose";  
const userSchema=new mongoose.Schema({
  userName:{type:String,required:[true,"Please Provide username"],unique:true},
  password:{type:String,required:[true,"Please Provide password"],unique:true},
  email:{type:String,required:[true,"Please Provide email"]},
  isVerified:{type:Boolean,default:false},
  isAdmin:{type:Boolean,default:false},
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date

});

const User=mongoose.models.users || mongoose.model("users",userSchema);
export default User;
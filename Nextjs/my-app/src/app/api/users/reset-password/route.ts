import {connect} from "@/dbConfig/dbConfig"
import { NextResponse,NextRequest } from "next/server"
import User from "@/models/userModel"
import bcrpyt from "bcryptjs"

connect()
export async function POST(req:NextRequest) {
  try {
    const reqBody=await req.json()
    console.log(reqBody)
    const {token,newpassword}=reqBody;
    const user =await User.findOne({forgotPasswordToken:token,forgotPasswordTokenExpiry:{$gt : Date.now()}})
    if(!user){
      return NextResponse.json({message:"Not valid token "},{status:400})
    }
    const salt=await bcrpyt.genSalt(10);
    const secNewpassword=await bcrpyt.hash(newpassword,salt)
    user.password=secNewpassword;
    user.forgotPasswordToken=undefined;
    user.forgotPasswordTokenExpiry=undefined;
    await user.save();
    return NextResponse.json({message:"Password changed succesfully ",success:true},{status:200})
    
  } catch (error:any) {
    console.log(error.message)
    return NextResponse.json({message:"Erro while reseting password"},{status:500})
  }
  
} 
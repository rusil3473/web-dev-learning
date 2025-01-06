import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse,NextRequest } from "next/server"
import bcryptjs from "bcryptjs"
import { sendEmail } from "@/helper/mailer"

connect()

export  async function POST(req:NextRequest) {
  try {
    const reqBody=await req.json()
    const {email,userName,password}=reqBody;

    const user=await User.findOne({email});
    if(user){
      return NextResponse.json({message:"Email already exist"},{status:400})
    }
    const salt=await bcryptjs.genSalt(10);
    const secPassword=await bcryptjs.hash(password,salt)
   const savedUser= await User.create({
      email,userName,password:secPassword
    })

    const mail= await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})
    console.log(mail)
    return NextResponse.json({message:"User created",success:true},{status:200});

  } catch (error:any) {
    console.log(error)
    return NextResponse.json({message:"Error while creating user"},{status:500})
  }
} 
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";

export async function POST(req:NextRequest) {

  try {
    const reqBody=await req.json();
    console.log(reqBody)
    const {email}=reqBody;
    const user=await User.findOne({email});
    if(!user){
      return NextResponse.json({message:"Cannot Find SUch email first sigup "},{status:400});
    }
    await sendEmail({email,emailType:"RESET",userId:user._id});
    return NextResponse.json({message:"Mail Sent to given email address check user email to reset password "},{status:200})

  } catch (error:any) {
    return NextResponse.json({message:"Error while reseting password"},{status:500})
  }
  
}
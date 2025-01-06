import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "No Such user found " }, { status: 400 })
    }
    const isCorrect =await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return NextResponse.json({ message: "incorrect Password " }, { status: 400 })
    }
    const data = { id: user._id, email, userName: user.userName }
    const token = jwt.sign(data, process.env.SECRET!, { expiresIn: "1d" });
    const rescookies = await cookies()


    rescookies.set("token", token,{
      httpOnly:true
    })
   return NextResponse.json({ messgae:isCorrect, success: true }, { status: 200 })


  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: "Login not Successful" }, { status: 500 })
  }

}

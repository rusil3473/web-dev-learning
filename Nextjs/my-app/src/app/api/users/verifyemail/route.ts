import { connect } from "@/dbConfig/dbConfig"
import { NextResponse, NextRequest } from "next/server"
import User from "@/models/userModel"
connect()

export async function POST(req: NextRequest) {
  try {

    const reqBody = await req.json();
    const { token } = reqBody;
    console.log(token);
    const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
    if (!user) {
      return NextResponse.json({ message: "Invalid Token" }, { status: 400 })
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verfiyTokenExpiry = undefined;
    await user.save();
    return NextResponse.json({ message: "Verified ", sucess: true }, { status: 200 })


  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({ message: "Error while sending email " }, { status: 500 })
  }
}
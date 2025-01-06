import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";


export const getDataFromToken=async()=>{
  try {
    const reqCookies=await cookies()
    const token =reqCookies.get("token")?.value ||"";
    const decoded:any=jwt.verify(token,process.env.SECRET!)
    return decoded.id;
  } catch (error:any) {
    console.log(error)
    return NextResponse.json({message:"Failed to get data from token "},{status:400})
  }

}
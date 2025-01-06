import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel";

connect();

export async function GET() {
  try {
   const userId= await getDataFromToken();
   const user=await User.findOne({_id:userId}).select("-password");
   return NextResponse.json({message:"User Found ",data:user},{status:200})

    
  } catch (error:any) {
    console.log(error)
    NextResponse.json({message:"Error while getting data "},{status:400})
  }
  
}
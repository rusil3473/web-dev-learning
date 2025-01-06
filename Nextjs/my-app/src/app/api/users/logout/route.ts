
import { NextRequest,NextResponse } from "next/server"
import { cookies } from "next/headers"


export  async function GET(){
  
  try{
    const reqCookies=await cookies();
    reqCookies.delete("token");
    return NextResponse.json({message:"Logout Succesful ",succeess:true},{status:200})
  }
  catch(err : any){
    console.log(err)
    return NextResponse.json({message:"Error "},{status:400})
  }
}
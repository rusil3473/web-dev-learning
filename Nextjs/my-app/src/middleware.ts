import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export async function middleware(req: NextRequest) {
  try{
  const reqCookies=await cookies()
  const path = req.nextUrl.pathname
  const isPublic:boolean=(path==="/login" || path==="/signup");
  const token=reqCookies.get("token")?.value || ""

  if(isPublic && token){
    return NextResponse.redirect(new URL("/",req.nextUrl));
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL("/login",req.nextUrl))
  }
  }
  catch(err:any){
    console.log(err.message)
    return NextResponse.json({message:"Error whiile in midddleware"},{status:400})
  }

}

export const config =  {
  matcher: [
    "/", "/login", "/profile", "/signup"
  ]
}
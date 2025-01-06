"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {

  const [data,setData]=useState("Nothing")
  const router = useRouter();
  const handleLogout = async () => {
    try {
      axios.get("/api/users/logout");
      router.push("/login")
    } catch (error: any) {
      console.log(error.response.message)
    }
  }
  const getUserDetails=async()=>{
    try {
      const res=await axios.get("/api/users/me")
      console.log(res.data);
      console.log(res.data.data._id);
     setData(res.data.data._id);
      

    } catch (error:any) {
      console.log(error.response.message)
    }
  }
  return (
    <>
      <h1 className="text-white">
        ProfilePage
      </h1>
      <h1 className="text-white">
        {data==="Nothing" ? "Nothing ":<Link href={`/profile/${data}`}>Go to Your personal Profile</Link>}
      </h1>
      <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition" onClick={handleLogout}>
        Logout
      </button>
      <button className="px-4 py-2 bg-green-700 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition" onClick={getUserDetails}>
        Get details
      </button>
    </>
  )
}
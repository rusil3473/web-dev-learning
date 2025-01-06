"use client"
import axios from "axios"
import { useEffect, useState } from "react"


export default function VerifyPage() {
  const [token, setToken] = useState("");


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const verifyEmail = async () => {
    try {
     await axios.post("/api/users/verifyemail", { token })

    } catch (error: any) {
 
      console.log(error)
    }
  }
  useEffect(() => {
    const token = window.location.search.split("=")[1]
    console.log(token)
    setToken(token || "");
  }, [])

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token, verifyEmail])
  return (
    <h1 className="text-white bg-green-400">Verify Page</h1>

  )
}
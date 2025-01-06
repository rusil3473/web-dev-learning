"use client"
import axios from "axios"
import { useEffect, useState } from "react"


export default function VerifyPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [err, setErr] = useState(false);

  const verifyEmail = async () => {
    try {
      const res = await axios.post("/api/users/verifyemail", { token })
      setVerified(true);
    } catch (error: any) {
      setErr(true);
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
  }, [token])
  return (
    <h1 className="text-white bg-green-400">Verify Page</h1>

  )
}
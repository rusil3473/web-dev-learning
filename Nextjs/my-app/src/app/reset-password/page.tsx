"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
export default function ResetPasswordPage() {
 
  const onResetPassword=async (e:any)=>{
    e.preventDefault();
    try {
      await axios.post("api/users/reset-password",{newpassword:password,token})
      alert("Password reset successful")
      
    } catch (error:any) {
      console.log(error)
    }
  }
  const [token,setToken]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [error ,setError]=useState("");

  useEffect(()=>{
    if(password!==confirmPassword){
      setError("Password does not match ");
    }
    else{
      setError("")
    }
  },[confirmPassword, password])

 
  useEffect(()=>{
    const t=window.location.search.split("=")[1]
    setToken(t || "")
  },[])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={onResetPassword} className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Reset Password</h2>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your new password"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Confirm your new password"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mb-4"
        >
          Reset Password
        </button>

        <div className="text-center">
          <span className="text-gray-400 text-sm">Remember your password?</span>
          <Link
            href="/login"
            className="ml-2 text-blue-400 hover:text-blue-500 font-medium transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

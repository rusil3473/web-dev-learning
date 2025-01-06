"use client"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
export default function SignupPage() {


  const router=useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: ""
  })
  const onSignUp = async (e:any) => { 
    e.preventDefault();
    try {
      const res=await axios.post("/api/users/signup",user)
      console.log("Signup Success ",res.data);
      router.push("/login");
      
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
  <form onSubmit={onSignUp} className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>

    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your username"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your password"
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mb-4"
    >
      Signup
    </button>

    <div className="text-center">
      <span className="text-gray-400 text-sm">Already have an account?</span>
      <Link
        href="/login"
        className="ml-2 text-blue-400 hover:text-blue-500 font-medium transition duration-300"
      >
        Login
      </Link>
    </div>
  </form>
</div>

  )
}
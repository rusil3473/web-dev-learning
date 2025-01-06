"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function ForgotPasswordPage() {

  const router = useRouter();
  const [email, setEmail] = useState("");

  const onForgotPassword = async (e: any) => {
    e.preventDefault();
    try {
       await axios.post("/api/users/forgot-password", email );
      console.log("Password reset email sent");
      alert("Password reset email has been sent to your email address.");
      router.push("/login");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={onForgotPassword} className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Forgot Password</h2>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mb-4"
        >
          Submit
        </button>

        <div className="text-center">
          <span className="text-gray-400 text-sm">Remembered your password?</span>
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

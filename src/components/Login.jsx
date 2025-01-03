import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg w-[370px]">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="text-sm text-gray-500 text-center mb-6  hover:underline">
              <a href="#">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Login
            </button>
          </form>
           {/* Navigation to Signup */}
        <div className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-gray-500 hover:underline">
            Click here
          </Link>
        </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  
import { useState } from "react";
import React  from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    //two way binding
    const submitHandler = (e) =>  {
        e.preventDefault();
        console.log("email is", email);
        console.log("password is", password);

        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo / App Name */}
        <h2 className="text-emerald-500 text-center text-2xl font-bold">
          Employee Management System
        </h2>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mt-4">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form 

            onSubmit={(e) => {
              submitHandler(e);
            }}
        
        className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              
            </label>

            <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
              }}
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              
            </label>

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-emerald-600 hover:text-emerald-700"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition duration-300"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
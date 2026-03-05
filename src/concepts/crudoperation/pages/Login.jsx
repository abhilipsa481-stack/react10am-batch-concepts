import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const[formdata,setformdata]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const{name,value}=e.target 
        setformdata({...formdata,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(formdata)
        setformdata({
            email:"",
            password:""
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">

      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-96">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Login
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4" type="submit">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Login Button */}
          <button
            className="mt-2 bg-cyan-400 text-slate-900 font-semibold py-2 rounded-md hover:bg-cyan-300 transition duration-300"
            onSubmit={handleForm}
          >
            Login
          </button>

        </form>

        {/* Register Section */}
        <div className="flex justify-center gap-2 mt-6 text-gray-300 text-sm">
          <p>Don't have an account?</p>
          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Login;
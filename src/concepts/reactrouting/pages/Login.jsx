import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData,setFormData]=useState({
    username:"",
    password:""
  })

  const{username,password}=formData
  const handleInput=(e)=>{
    const{name,value}=e.target
    setFormData({...formData, [name]:value})
  }

  const[passwordIcon,setPasswordIcon]=useState(false)
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    const token=localStorage.setItem("token",JSON.stringify("abhilipsa"))
    navigate("/dashboard")
    console.log(formData)
  }
  return (
    <div className='h-[88vh] flex items-center justify-center  bg-gradient-to-r from-slate-500 to-slate-800'>
      <div className='bg-white p-14 rounded-2xl shadow-2xl w-120 h-80 flex-col flex items-center justify-evenly'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>LOGIN</h2>
        <form onSubmit={handleSubmit} className='flex items-center flex-col gap-5'>
          <input
          type='text'
          placeholder='username'
          name='username'
          value={username}
          onChange={handleInput}
          className=' w-70 h-13 border border-b-gray-600 rounded-xl text-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600  transition' />
          <div className='relative'>
            <input type={passwordIcon ? 'text':'password'}
            placeholder='password'
            name='password'
            value={password}
            onChange={handleInput}
            className=' w-70 h-13 border border-b-gray-600 rounded-xl  text-xl px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition'/>

            <div className='p-1 absolute top-4 right-7 cursor-pointer flex items-center justify-center'onClick={()=>setPasswordIcon(!passwordIcon)}>
              {
                passwordIcon?<IoEyeSharp size={25}/>:<FaRegEyeSlash size={25}/>
              }
              
            </div>
          </div>
          <button type='submit' className=' bg-blue-800 text-white py-4 rounded-xl w-20 h-10 font-semibold hover:bg-cyan-950 transition duration-100 shadow-md'>Login</button>
        </form>

        <p className='text-center text-l text-gray-700 mt-6'>Don't have an account ?{" "}<span className='text-blue-900 font-semibold hover:underline'>Register</span></p>

      </div>

    </div>
  )
}

export default Login
import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaChevronCircleDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbHelpTriangleFilled } from "react-icons/tb";




const Navbar = () => {
    const navlist=[
        {
            text:"home",
            path:"/",
            icon:<FaHome />

        },
        {
            text:"About",
            path:"/about",
            icon:<FaChevronCircleDown />

        },
        {
            text:"Contact",
            path:"/contact",
            icon:<FaPhoneAlt />
        },
        {
            text:"Help",
            path:"/help",
            icon:<TbHelpTriangleFilled />


        }
    ]
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-cyan-400 cursor-pointer">
          MyLogo
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-300 font-medium">
         {
            navlist.map((ele,index)=>{
                return(
                    
                    <li className='px-5 py-4 rounded-md  flex items-center gap-2 '>
                        {ele.icon}
                        <Link to={ele.path}>{ele.text}</Link>
                        </li>
                )
            })
         }
        </ul>

        {/* Login Button */}
        <button className="px-5 py-2 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition duration-300">
         <Link to="/login">login</Link>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
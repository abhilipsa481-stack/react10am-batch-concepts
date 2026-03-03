import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <div className="w-screen h-19.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-around  text-blackP-3.5 ">
            <div className="w-[15%] h-10 flex items-center justify-center font-extrabold text-3xl font-serif text-white -tracking-widest">Logo</div>

            <ul className="w-[50%] h-full flex items-center text-white justify-around">

                <li className="p-4 hover:underline-offset-1 cursor-pointer rounded-lg capitalize text-lg font-bold "><Link to="/home">home</Link></li>
                <li className=" p-4 hover:underline-offset-1 cursor-pointer rounded-lg capitalize text-lg font-bold "><Link to="/about">about</Link></li>
                <li className="p-4 hover:underline-offset-1 cursor-pointer rounded-lg capitalize text-lg font-bold "><Link to="/projects">projects</Link></li>
                <li className=" p-4 hover:underline-offset-1 cursor-pointer rounded-lg capitalize text-lg font-bold "><Link to="/contact">contact</Link></li>
            </ul>
            <button className=" px-6 py-10 border-2 rounded-lg font-bold text-white bg-blue-500 cursor-pointer hover:text-white"><Link to="/login">Login</Link></button>

        </div>

    )
}
export default Navbar 
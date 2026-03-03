import { useRef, useState } from "react"

import "./userefhook.css"
const UseRefHookTask1=()=>{

    const themeRef=useRef()
    const changeTheme=()=>{
       themeRef.current.classList.toggle("dark")
    }

    return(
<div className="homeoage demo remo" ref={themeRef}>

    <button onClick={changeTheme}>Theme</button>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus tempora aspernatur provident, officiis hic illo autem quaerat distinctio corporis.</p>
     </div>
    )
}
export default UseRefHookTask1
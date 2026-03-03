import { useRef, useState } from "react"

const UseRefHookHome=()=>
{
    // const[text,setText]=useState("Abhi")
    // console.log("hii")
    const nameRef=useRef()
    // console.log(nameRef)

    const updateText=()=>{
        nameRef.current.innerText="Gulu"
    }

    console.log("hii")

     return(
<div>
    {/* <h1>{text}</h1>
    <button onClick={()=>TbSettingsExclamation("Gulu")}>update name</button> */}

    <h1 ref={nameRef}>Abhilipsa</h1>
    <button onClick={updateText}>update name</button>
</div>
    )

}
export default UseRefHookHome
   
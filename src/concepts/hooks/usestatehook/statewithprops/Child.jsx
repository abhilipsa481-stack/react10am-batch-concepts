import { useState } from "react"

const Child=({count,setCount})=>{
    console.log("child")
    // const[val,setVal]=useState(0)
    return(
        <div>
             <h1>{count} in child</h1>
           {/* <h2>{val} in child</h2>
            <button onClick={()=>setVal(val+10)}>upadate val</button> */}
       <button onClick={()=>setCount(count+1)}>Update from child</button>
        </div>
    )
}
export default Child
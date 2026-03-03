import { useEffect, useState } from "react"

const UseEffectHook=()=>{
    const[count,setCount]=useState(0)
    const[val,setVal]=useState(0)
    const fdata=()=>{
         console.log("fdata function")
    }
    // useEffect(()=>{
    //     fdata()
    // },[])      //with empty dependency

    // useEffect(()=>{
    //     fdata()
    //  },[count,val])    

    useEffect(()=>{
        fdata()
     })    
    
    
   
    return(
<div>
    <h1>UseEffectHook</h1>
    <h2>{count}</h2>
    <p>{val}</p>
    <button onClick={()=>setCount(count+1)}>Update</button>
    <button onClick={()=>setVal(val+10)}>Update val</button>

</div>
    )
}
export default UseEffectHook
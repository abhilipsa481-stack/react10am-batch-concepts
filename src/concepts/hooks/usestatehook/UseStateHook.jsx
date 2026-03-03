import { useState } from "react"

const UseStateHook=()=>{
    //!it is used to store the data and update the data dynamical
//   const data=useState()
//   console.log(data)

//   const[x,y]=useState(10)
//   console.log(x)
//   console.log(y)

const [count,setCount]=useState(0)

const updateValue=()=>{
setCount(count+1)
}

const sub=()=>{
    setCount(count-1)
}
const reset=()=>{
    setCount(0)
}
console.log("hello")


    return(
        // <div>UseStateHook</div>
        <div>
        <h1>{count}</h1>
        {/* <button onClick={updateValue}>count</button>
        <br/> */}
        <button onClick={updateValue}>count+1</button>
         <button onClick={sub}>count-1 </button>
          <button onClick={reset}>reset </button>
        </div>
    )
}
export default UseStateHook
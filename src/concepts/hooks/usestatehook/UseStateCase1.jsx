import { useState } from "react"

const UseStateCase1=()=>{
const[count,setCount]=useState(0)
console.log(count)
// const updateVal=()=>{
//     setCount(count+1)
// }
// updateVal()
    return(
        <div>
<div>{count}</div>
<button onClick={()=>{setCount(count+1)}}>Click</button>
</div>
    )
}
export default UseStateCase1
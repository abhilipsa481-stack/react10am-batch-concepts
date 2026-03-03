import React, { useState } from "react";

// const ControlledFormHandling=()=>{
//     const[formData,setformData]=useState(
//         {
//             username:"",
//             email:"",
//             password:"",
//             phno:""
//         }
//     )
    
    
//     const handleInput=(e)=>{
//         const{name,value}=e.target
//         setformData({...formData,[name]:value})
//     }
// const handleForm=(e)=>{
//     e.preventDefault()
//     console.log(formData)
// }
//     return(
//         <div>
//             <form onSubmit={handleForm}>
//                 <input type="text" placeholder="username" name="username" onChange={handleInput} />
//                 <input type="email" placeholder="email" name="email" onChange={handleInput} />
//                 <input type="password" placeholder="password" name="password" onChange={handleInput} />
//                 <input type="phno" placeholder="phno" name="phno" onChange={handleInput} />
//                 <br />
//                 <button>submit</button>
//             </form>
//             <h1>{formData.username}</h1>
//             <h1>{formData.email}</h1>
//              <h1>{formData.password}</h1>
//             <h1>{formData.phno}</h1>
//         </div>

//     )
// }
// export default ControlledFormHandling


// import React, { useState } from "react";

const ControlledFormHandling=()=>{
    const[formData,setformData]=useState({
            username:""
     })
    
    const [errors,setErros]=useState(null)
    const handleInput=(e)=>{
        const{name,value}=e.target
        setErros(null)
        setformData({...formData,[name]:value})
    }
const handleForm=(e)=>{
    e.preventDefault()
    console.log(formData)
    if(!formData.username){
    setErros(true)
}
setformData({
    username:""
})
}

    return(
        <div>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleInput} />
                {
                    errors?<p style={{color:"red"}}>username is requared<sup>*</sup></p>:""
                }
                <br />
                <button>submit</button>
            </form>
            <h1>{formData.username}</h1>
            
        </div>

    )
}
export default ControlledFormHandling
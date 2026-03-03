import { useState } from "react"

const ControlledForm2=()=>{
    const[formData,setformData]=useState({
        username:" ",
        email:" ",
        password:" ",
        course:" "
    })
    
    const{username,email,password,course}=formData

    const handleInput=(e)=>{
        const {name,value}=e.target
        setformData({...formData,[name]:value})
    }
    
    const handleForm=(e)=>{
        e.preventDefault()
        //! write a logic to send the data to backend
        console.log(formData)
        setformData({
        username:" ",
        email:" ",
        password:" ",
        course:" "
        })
    }
    
    return(
<div>
    <form onSubmit={handleForm}>
        <div>
          <input type="text" placeholder="your name" name="username" value={username} onChange={handleInput} />
        </div>
         <div>
          <input type="email" placeholder="your email" name="email" value={email} onChange={handleInput} />
        </div>
         <div>
        <input type="password" placeholder="password" name="password" value={password} onChange={handleInput} />
        </div>
        <div>
            <label htmlFor="">course</label>
            <select name="course"  value={course} onChange={handleInput} >
            <option value="" selected={!course?true:false}></option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
            </select>
        </div>
        <button>submit</button>
    </form>
</div>
    )
}
export default ControlledForm2

//useeffect is a hook in react js which is used to avoid the sideeffects of reactjs such as infanite rerendering of a component when state is updated
// useeffect hook will not return any data
//it will accept 2 tings (1)callback function, (2)dependency
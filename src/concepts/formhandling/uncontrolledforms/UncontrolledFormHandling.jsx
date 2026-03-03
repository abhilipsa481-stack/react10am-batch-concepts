import { useRef } from "react"
import { toast } from "react-toastify"

const UncontrolledFormHandling=()=>{
    const usernameRef=useRef(null)
    const handleForm=(e)=>{
        e.preventDefault()
        // console.log(e)
        // console.log("form submitted")
        // console.log(usernameRef.current.value)
         const username=usernameRef.current.value
         const password=passwordRef.current.value

         if(!username){
            toast.error("All fields are requard",{position:"top-center"})
            return
         }
         console.log("hello")
    }

    return(
<>
        
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Enter Your Name" ref={usernameRef}/>



       <br/>
       <label htmlFor="male">
        <input type="radio" value="male" id="male" name="gender" ref={maleRef}/>Male
      </label>
      <label htmlFor="Female">
        <input type="radio" value="female" id="female" name="gender" ref={femaleRef}/>Female
      </label>
      <label htmlFor="others">
        <input type="radio" value="others" id="others" name="gender" ref={othersRef}/>Others
      </label>
            <br/>
            <button>Submit</button>
        </form>
</>
    )
}
export default UncontrolledFormHandling
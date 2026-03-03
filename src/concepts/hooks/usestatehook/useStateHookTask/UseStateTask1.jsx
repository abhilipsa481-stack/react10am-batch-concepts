
import { FaRegHeart } from "react-icons/fa";
const UseStateTask1=()=>{
const[proposal,SetProposal]=useState(null)

const acceptProposal=()=>{
    SetProposal(true)
}
const rejectproposal=()=>{
    SetProposal(false)
}
const reset=()=>{
    SetProposal(nill)
}

    return(
        <div className="mainbox">
            <FaRegHeart />
            </div>
    )
}
export default UseStateTask1


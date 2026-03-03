import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Mainpage=()=>{
    return(
        <div>
<Navbar />
<Outlet />
</div>
    )
}
export default Mainpage
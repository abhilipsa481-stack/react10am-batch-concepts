
import Child from "./Child"

const Parent=()=>{
    return(
        <div id="parent" className="parent">
            <Child name="sundari" age={22} email="sundari@gmail.com"/>
            <Child name="mala" age={25} email="mala@gmail.com"/>
            <Child name="leela" age={17} email="leela@gmail.com"/>
        </div>
    )
}

export default Parent
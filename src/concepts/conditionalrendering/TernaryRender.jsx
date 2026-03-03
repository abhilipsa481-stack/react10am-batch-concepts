const TernaryRender=()=>{
let value=false
let per=80
let theme="dark"
return(
    <div>

        {value? <h1>Hello Abhi</h1>:<h1>Bye Abhi</h1>}

        {(per>70)?<p>A Grade</p>:(per>50 && per<70)?<p>B Grade</p>:<p>Fail</p>}
        {/* <h1 style={{backgroundColor:"lightblue"}}>Abhilipsa</h1> */}
        <h1 style={theme==="dark"?{backgroundColor:"green"}:{backgroundColor:"lightgreen"}}>Abhilipsa</h1>
        {/* <div className="box"></div> */}
        <div className={`box $ {theme==="dark"?"dark":"light"}`}></div>

    </div>
)

}
export default TernaryRender
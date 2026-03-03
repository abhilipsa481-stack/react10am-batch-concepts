import React from "react";

const Jsxexpression=()=>{
// jsx expression is used to access the js variable or functions inside the jsx | html
// syntax----> {}

//! Note--->inside the jsx expression is not possible to declare a variable but initialization is possible.

//! how to use js function || how to call js function

//!if a arraow function returning a  jsx/html element the arrow function is called as a component. 

//! if it is not returning any jsx element then it is called as js function.

//! inside a jsx expression if we want to use consitional statement then we need to use ternary operator. if i want to use loop then map method

    let username="Abhilipsa";

    let demo=()=>{
        console.log("demo function")
    }
let is_active=true
if(is_active===true){
    console.log("true block")
}
else{
    console.log("false block")
}
let arr=['abhi','lipsa','ipsita']


    return(
            
           <div>
            {/* <h1>{username}</h1>
            {username="Ipsita"}
            <br/>
            {username} */}
            {/* {let val=20;} */}
            <button onClick={demo}>Click</button>
            {
                is_active?<h1>i am safe</h1>:<h1>i am dead</h1>
            }

            <h1>{arr[0]}</h1>
            <h1>{arr[1]}</h1>
            <h1>{arr[2]}</h1>

            <hr/>
            {/* {
                arr.map((user)=>{
                 return(
                       <h1>{user}</h1>
                       )
                })
            } */}
            {
                arr.map((ele)=>{
                 return(
                       <h1>{ele}</h1>
                       )
                })
            }
           </div>
        
    )
}
export default Jsxexpression
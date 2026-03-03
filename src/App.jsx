import React from "react";
import Jsxexpression from "./concepts/jsxexpression/JsxExpression";
import CreateComponent from "./concepts/createComponent/CreateComponent";
import ConditionalRendaring from "./concepts/conditionalrendering/ConditionalRendaring";
import TernaryRender from "./concepts/conditionalrendering/TernaryRender";
import Propshome from "./concepts/props/propscomponents/Propshome";
import Icon_Implement from "./concepts/icons_implementation/Icons_Implement";
import HooksHome from "./concepts/hooks/HooksHome";
import UseStateHook from "./concepts/hooks/usestatehook/UseStateHook";
import ReactFragments from "./concepts/fragments/ReactFragments";
import ListAndKeys from "./concepts/listandkeys/ListAndKeys";
import FormHandling from "./concepts/formhandling/FormHandling";
import { ToastContainer } from "react-toastify";
import AxiosConcept from "./concepts/axiosconcept/AxiosConcept";
import TailwindCssConcept from "./concepts/tailwindcssconcept/TailwindCssConcept";
import RouterLayout from "./concepts/reactrouting/RouterLayout";
import PropsDriling from "./concepts/propsdriling/PropsDriling";
import ContexApiConcept from "./concepts/contextapi/ContexApiConcept";
import HOC from "./concepts/hoc/HOC";
import ReactOptimization from "./concepts/optimization/ReactOptimization";

const App =()=>{
    return(
        <div >
    {/* {<CreateComponent/>} */}
       {/* <Jsxexpression/> */}
       {/* <ConditionalRendaring/> */}
       {/* <TernaryRender/> */}
       {/* <Propshome/> */}
       {/* <Icon_Implement/> */}
       <HooksHome/>
       {/* <UseStateHook/> */}
     {/* <ReactFragments/> */}
     {/* <ListAndKeys/> */}
     {/* <FormHandling/> */}
     {/* <AxiosConcept /> */}
     {/* <TailwindCssConcept /> */}
     {/* <RouterLayout /> */}
     {/* <PropsDriling /> */}
     {/* <ContexApiConcept /> */}
     {/* <HOC /> */}
     {/* <ReactOptimization /> */}

<ToastContainer/>
        </div>
    )
    
}
export default App
// const App=()=>{
//     let sms="Abhilipsa";


//     return(
//         <h1>{sms}</h1>
//     )
// }
// export default App
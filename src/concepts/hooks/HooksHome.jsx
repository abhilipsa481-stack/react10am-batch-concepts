import UseCallBackHook from "./usecallbackhook/UseCallBackHook"
import UseEffecTask1 from "./useeffecthook/tasks/UseEffectTask1"
import UseEffectHook from "./useeffecthook/UseEffectHook"
import UseMemoHook from "./usememohook/UseMemoHook"
import UseRefHookHome from "./userefhook/UseRefHookHome"
import UseRefHookTask1 from "./userefhook/userefhooktask/UseRefHookTask1"
import StateWithProps from "./usestatehook/statewithprops/StateWithProps"
import UseStateCase1 from "./usestatehook/UseStateCase1"
import UseStateTask1 from "./usestatehook/useStateHookTask/UseStateTask1"

const HooksHome=()=>{
    return(
        <div>
        <div>
            {/* <UseStateTask1/> */}
            {/* <UseStateCase1/> */}
            {/* <StateWithProps/> */}
            
            {/* <UseRefHookHome/> */}
            {/* <UseRefHookTask1/> */}
            {/* <UseEffectHook /> */}
            {/* <UseEffecTask1 /> */}
            {/* <UseMemoHook /> */}
            <UseCallBackHook />
        </div>
        
        </div>
    )

}
export default HooksHome
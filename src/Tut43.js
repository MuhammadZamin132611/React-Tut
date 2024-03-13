import React,{useRef} from "react";
import Tut43I from './Tut43I'
function Tut43(){
    let inputRef=useRef(null)
    function updateInput(){
        inputRef.current.value="1000"
    }
    return (
        <div>
            <h1>forwardRef in React Js</h1>
            <Tut43I ref={inputRef}/>
            <button onClick={updateInput}>Update inputBox</button>
        </div>
    )
}
export default Tut43;
import React, { useRef } from "react";
export default function Tut42() {
    let inputRef = useRef(null)
    let normalVariable = ''
    function handelInput(){
        normalVariable=inputRef.current.value
        console.log("function call handelInput",normalVariable)
        // inputRef.current.style.color="white"
        // inputRef.current.style.backgroundColor="blue"
        // normalVariable=inputRef.current.style.dispaly="none"
    }
    return (
        <div>
            <h1>Ref in React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handelInput}>Handel Input</button>

        </div>
    )

}

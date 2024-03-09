import React from "react"
export default function Tut16(){
    const [status,setState]=React.useState(false);
    return (
        <div>
            {
                status?<h1>Hello World !</h1>:null
            }
            
            {/* <button onClick={()=>setState(false)}>Hide</button>
            <button onClick={()=>setState(true)}>Show</button> */}
            <button onClick={()=>setState(!status)}>Toggle</button>
        </div>
    )
}
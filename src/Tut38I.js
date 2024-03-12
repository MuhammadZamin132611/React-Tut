import React from "react"
export default function Tut38I(props) {
    const data ="mohd Zain"
    return (
        <>
            <h1>User Componenet</h1>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </>
    )
}
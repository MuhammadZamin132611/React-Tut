import React from "react";
export default function Tut20(props){
    return (
        <div>
            <h1>User Component</h1>
            <button onClick={()=>props.data()}>call data function</button>
        </div>
    )
}
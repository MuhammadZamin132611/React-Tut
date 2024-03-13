import React,{useState} from "react";
function Tut44(){
    let [val,setVal]=useState("");
    let [item,setItem]=useState("");
    return (
        <div>
            <h1>Controlled Componenet</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <h1>Value: {val}</h1>
            <h1>Item: {item}</h1>
        </div>
    )
}

export default Tut44;
import React,{useState} from "react";
export default function Tut28(){
    const [data,setData]=useState("Zamin");
    return (
        <div>
        <h1>{data}</h1>
        <button onClick={()=>setData("Mohd")}>Update</button>
        </div>
    )
}
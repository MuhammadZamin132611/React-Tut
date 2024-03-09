import React,{useEffect,useState} from "react";
export default function Tut29(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Use Effect")
    },[])
    return (
        <div>
           <h1>Use Effect in React {count}</h1>
           <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </div>
    )
}
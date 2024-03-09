import React,{useEffect,useState} from "react";
import Tut30I from "./Tut30I"
export default function Tut30(){
    const [data,setData]=useState(10);
    const [count,setCount]=useState(100);
    return (
        <div>
            <Tut30I count={count} data={data}/>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}
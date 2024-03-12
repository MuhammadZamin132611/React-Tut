import React,{useState,useMemo} from "react"
export default function Tut40(){
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)
    const mutliCountMemo=useMemo(function multiCount(){
        console.log("call multiCount Function")
        return count*5
    },[count])
    return (
        <div>
            <h1>useMemo Hook in React</h1>
            <h1>Count: {count}</h1>
            <h1>Item: {item}</h1>
            <h1>{mutliCountMemo}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item*10)}>Update Item</button>
        </div>
    )
}
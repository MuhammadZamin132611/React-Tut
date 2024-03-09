import React,{useEffect,useState} from "react";
export default function Tut30I(props){
    useEffect(()=>{
        alert("called with count state " + props.count);
    },[props.count])
    return (
        <div>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
        </div>
    )
}
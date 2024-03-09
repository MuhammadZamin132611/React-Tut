import React,{useState} from "react";
export default function Tut15(){
    const [data,setDate]=useState(null)
    const [print,setPrint]=useState(false)
    function getDate(val){
        console.warn(val.target.value);
        setDate(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getDate} />
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}
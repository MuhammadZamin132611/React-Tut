import { useState } from "react";

export default function Tut11(){
    const [data,setData]=useState(0);
    function updateData(){
        setData(data+1)
    }
    console.log("_______________")
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>Updata Data</button>
        </div>
    )
}
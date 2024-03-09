import {useState} from "react"
export default function Tut17(){
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [intrest,setIntrest]=useState("");
    function getData(e){
        console.log(name,tnc,intrest)
        e.preventDefault()
    }
    return (
        <div>
            <h1>Handel form in React</h1>
            <form onSubmit={getData}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br /><br />
                <select onChange={(e)=>setIntrest(e.target.value)}>
                    <option>Selet Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Condition</span><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
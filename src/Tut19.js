import React, { useState } from "react"
export default function Tut19() {
    const [user,setUser]=useState("");
    const [Password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false)
    const [passErr,setPassErr]=useState(false)
    function loginHandel(e){
        if(user.length<3 || Password.length<3){
            alert("type correct values")
        }
        else{
            alert("all good")
        }
        e.preventDefault();
    }
    function userHndler(e){
        let item=e.target.value
        if(item.length<3){
            setUserErr(true)
            console.log("Invalid")
        }
        else{
            setUserErr(false)
        }
        setUser(item);
    }
    function passwordHandler(e){
        let item = e.target.value
        if(item.length<3){
            setPassErr(true);
        }
        else{
            setPassErr(false)
        }
        setPassword(item);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandel}>
                <input type="text" placeholder="Enter User Id" onChange={userHndler}/>
                {userErr?<span>User Not Valid</span>:""}
                <br /><br />
                <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>
                {passErr?<span>Password Not Valid</span>:""}
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
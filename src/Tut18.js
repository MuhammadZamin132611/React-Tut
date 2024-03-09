import {useState} from "react"
export default function Tut18(){
    const [loggedIn,setLoggedIn]=useState(1);
    // 1,2,3
    return (
        <div>
            {/* {loggedIn?<h1>Welcome Zamin</h1>:<h1>Welcome Guest</h1>} */}
            {loggedIn==1?<h1>Welcome User 1</h1>:loggedIn==2?<h1>Welcome User 2</h1>:<h1>Welcome Guest</h1>}
        </div>
    )
}
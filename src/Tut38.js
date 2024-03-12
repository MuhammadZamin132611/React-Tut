import React from "react"
import Tut38I from './Tut38I'
export default function Tut38() {
    function parentAlert(data){
        alert(data)
    }
    return (
        <>
            <h1>Lifying State Up </h1>
            <Tut38I alert={parentAlert}/>
        </>
    )
}
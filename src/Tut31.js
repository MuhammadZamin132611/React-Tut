import React from "react";
import './style.css'
import style from './custom.module.css'
import {Button, Alert} from 'react-bootstrap'
export default function Tut31(){
    return (
        <div>
            <h1 className="primary">Style type 1 in React js</h1>
            <h1 style={{color:'red', backgroundColor:'black'}}>Style type 2 in React js</h1>
            <h1 className={style.success}>Style type 3 in React js</h1>
            <Button onClick={()=>alert("Hello")}>Click me</Button>
            <Alert variant="danger">
          This is a danger alert—check it out!
        </Alert>
        </div>
    )
}
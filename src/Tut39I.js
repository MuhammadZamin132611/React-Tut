// class component
import React,{Component} from "react";
class Tut39I extends Component{
    render(){
        console.log("user componenet check re-rendring")
        return (
            <h1>User Componenet: {this.props.count}</h1>
        )
    }
}

export default Tut39I;
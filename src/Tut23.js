// class component
import React,{Component} from "react";
class Tut23 extends Component{
    constructor(){
        super();
        this.state={
            email:"zamin@test.com"
        }
    }
    render(){
        // console.log("Render Method", this.props)
        console.log("Render Method", this.state.email)
        return (
            // <h1>Hello from {this.props.name}</h1>
            <div>
                <h1>Update Email: {this.state.email}</h1>
                <button onClick={()=>this.setState({email:"mohd@gmail.com"})}>Update Email Address</button>
            </div>
        )
    }
}

export default Tut23;
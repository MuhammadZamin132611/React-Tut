import React, { Component } from "react";

class Tut14 extends Component {
    constructor(){
        super()
        this.state={
            name:"Ibrahim"
        }
    }
    render() {
        console.log(this.props);
        return (
            <div style={{ backgroundColor: "skyblue", margin: 10 }}>
                <h1>Studen {this.props.name}</h1>
                <h3>Email: {this.props.email}</h3>
                <button onClick={()=>this.setState({name:"mohd"})}>Update Name</button>

            </div>
        )
    }
}

export default Tut14;
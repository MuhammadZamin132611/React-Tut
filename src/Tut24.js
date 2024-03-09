import React from "react";

class Tut24 extends React.Component{
    constructor(){
        super();
        console.log("constrcutor");
        this.state={
            count:0
        }
    }
    componentDidMount(preProps, preState,snapshot){
        console.log("componentdidmount",preState)
    }
    render(){
        // console.log("render");
        return (
            <div>
                {/* <h1>Component Did mount {this.state.name}</h1> */}
                <h1>Component Did mount {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Updata Name</button>
            </div>
        )
    }
}
export default Tut24;
import React,{Component} from "react"
class Tut12 extends Component{
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Updat Data</button>
            </div>
        )
    }
}

export default Tut12;
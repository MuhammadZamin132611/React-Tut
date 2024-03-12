// class component
import React,{PureComponent} from "react";
import Tut39I from './Tut39I';
class Tut39 extends PureComponent{
    constructor(){
        super();
        this.state={
            count:1,
            // inresar:1
        }
    }
    
    render(){
        return (
            <div>
            <Tut39I count={this.state.count} />
            {/* <h1>{this.state.inresar}</h1> */}
            <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
            {/* <button onClick={()=>this.setState({inresar:this.state.inresar+1})}>Update Count2</button> */}
            </div>
        )
    }
}

export default Tut39;
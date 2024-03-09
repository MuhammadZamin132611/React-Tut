import React from "react";
import Student from "./Student";
class Tut27 extends React.Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return (
            <div>
                {this.state.show?<Student />:<h1>Child componenet remove</h1>}
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Componenet</button>
            </div>
        )
    }
}
export default Tut27;
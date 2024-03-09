import React from "react";
class Tut26 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponenetUpdate", this.state.count);
        if(this.state.count<5 && this.state.count<10){
            return true;
        }
    }
    render() {
        return (
            <div>
                <h1>Should Component Update {this.state.count} </h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter</button>
            </div>
        )
    }
}
export default Tut26;
import React,{createRef} from "react";
class Tut41 extends React.Component {
    constructor(){
        super();
        this.inputRef=createRef();
    }
    componentDidMount(){
        // console.log(this.inputRef.current.value="1000")
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="white"
        this.inputRef.current.style.backgroundColor="blue"
    }
    render() {
        return (
            <div>
                <h1>Ref in React</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }

}
export default Tut41;
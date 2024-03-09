import React from "react";
class Student extends React.Component {
    componentWillUnmount(){
        // alert("componentWillUnmount is called")
        console.log("componentWillUnmount is called")
    }
    render(){
        return (
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}
export default Student;
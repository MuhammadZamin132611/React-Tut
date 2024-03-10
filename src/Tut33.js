import React from "react";
export default function Tut33() {
    // const studen = ['Mohd', 'Zamin', 'Sam', 'Peter'];
    const student = [
        { name: 'zamin', contact: '000', email: "zamin@gmail.com" },
        { name: 'mohd', contact: '333', email: "mohd@gmail.com" },
        { name: 'sam', contact: '222', email: "sam@gmail.com" },
        { name: 'peter', contact: '111', email: "peter@gmail.com" },
    ]
    return (
        <div>
            <h1>Handel Array with List</h1>
            <h1>Hello</h1>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    student.map((data) =>

                        <tr>
                            <td> {data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>



                    )
                }
            </table>
        </div>
    )
}
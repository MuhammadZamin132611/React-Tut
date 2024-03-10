import {Table} from 'react-bootstrap'
export default function Tut34() {
    const student = [
        { name: 'zamin', contact: '000', email: "zamin@gmail.com" },
        { name: 'mohd', contact: '333', email: "mohd@gmail.com" },
        { name: 'sam', contact: '222', email: "sam@gmail.com" },
        { name: 'peter', contact: '111', email: "peter@gmail.com" },
    ]
    return (
        <div>
            <h1>List with bootstrap table</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {
                        student.map((item, i) =>
                            // item.contact === '111'?
                            <tr key={i+1}>
                                <td>{i}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                            // :null
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
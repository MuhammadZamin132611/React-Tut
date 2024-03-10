import { Table } from 'react-bootstrap'
export default function Tut35() {
    const users = [
        {
            name: 'zamin', email: "zamin@gmail.com", address: [
                { Hn: '10', City: 'noida', country: 'india' },
                { Hn: '14', City: 'Delhi', country: 'india' },
                { Hn: '12', City: 'Gurgao', country: 'india' },
                { Hn: '11', City: 'UP', country: 'india' }
            ]
        },
        {
            name: 'mohd', email: "mohd@gmail.com", address: [
                { Hn: '10', City: 'noida', country: 'india' },
                { Hn: '14', City: 'Delhi', country: 'india' },
                { Hn: '12', City: 'Gurgao', country: 'india' },
                { Hn: '11', City: 'UP', country: 'india' }
            ]
        },
        {
            name: 'sam', email: "sam@gmail.com", address: [
                { Hn: '10', City: 'noida', country: 'india' },
                { Hn: '14', City: 'Delhi', country: 'india' },
                { Hn: '12', City: 'Gurgao', country: 'india' },
                { Hn: '11', City: 'UP', country: 'india' }
            ]
        },
        {
            name: 'peter', email: "peter@gmail.com", address: [
                { Hn: '10', City: 'noida', country: 'india' },
                { Hn: '14', City: 'Delhi', country: 'india' },
                { Hn: '12', City: 'Gurgao', country: 'india' },
                { Hn: '11', City: 'UP', country: 'india' }
            ]
        },
    ]
    return (
        <div>
            <h1>Nested Array</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>SN</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Address</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><Table striped bordered hover variant="dark">
                                    <tbody>{
                                        item.address.map((data, j) =>
                                            <tr key={j}>
                                                <td>{data.Hn}</td>
                                                <td>{data.City}</td>
                                                <td>{data.country}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
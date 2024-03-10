import Tut36I from './Tut36I'
export default function (){
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
            <h1>Reused Component with List</h1>
            
            {
                users.map((item)=>
                <Tut36I data={item}/>
                )
            }
        </div>
    )
}
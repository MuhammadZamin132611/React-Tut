function Tut10() {

    let data = "zamin"
    function apple() {
        data = "peter"
        alert(data);
    }

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={apple}>Click Me</button>
            {/* <button onClick={()=>alert("hello")}>Click Me</button> */}
        </div>
    )
}

export default Tut10;
import React from 'react'

function Intro() {

    let name = "Çağatay"
    let cities = ["İstanbul", "Ankara", "İzmir"]

    let address = {
        street: "Valideçeşme mah",
        no: "78"
    }

    return <>
        <h1>Name: {name.toUpperCase()}</h1>
        <hr />
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>

        <hr />
        
        <h3>Address</h3>
        <p>Street: {address.street}</p>
        <p>No: {address.no}</p>
    </>
}

export default Intro
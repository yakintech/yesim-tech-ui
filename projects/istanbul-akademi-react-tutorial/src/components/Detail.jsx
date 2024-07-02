import React from 'react'

function Detail(props) {
  return <>
    <h1>Name: {props.name}</h1>
    <h1>EMail: {props.email}</h1>
    <h1>Phone: {props.phone}</h1>

    <hr />

    <h1>Points</h1>
    <ul>
        {
            props.points.map(item => <li>{item}</li>)
        }
    </ul>
  </>
}

export default Detail



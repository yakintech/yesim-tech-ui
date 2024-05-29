import React from 'react'

function UserDetail(props) {

    console.log("Props: ", props);


    const { name, surname, age, status } = props
    
    return <>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>
        <h1>Age: {age}</h1>
        <h1>Online Status: {status.toString()}</h1>
    </>


    // return <>
    //     <h1>Name: {props.name}</h1>
    //     <h1>Surname: {props.surname}</h1>
    //     <h1>Age: {props.age}</h1>
    //     <h1>Online Status: {props.status.toString()}</h1>
    // </>
}

export default UserDetail



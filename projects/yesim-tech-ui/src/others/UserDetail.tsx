import React from 'react'

function UserDetail({ name, surname = "", country = "Türkiye" }: UserDetailProps) {
    return (<>
        <h1>User Detail</h1>
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Country: {country}</p>
    </>)
}


interface UserDetailProps {
    name: string,
    surname?: string,
    country?: string
}

export default UserDetail
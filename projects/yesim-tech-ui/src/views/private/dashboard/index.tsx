import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { AuthContextType } from '../../../context/AuthContext'

function Dashboard() {

    const { user } = useContext(AuthContext) as AuthContextType

    return <>
        <h1>Dashboard</h1>
        <hr />
        <h2>User: {user.email}</h2>
        <h2>Roles: {user.roles}</h2>
    </>
}

export default Dashboard
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { AuthContextType } from '../../../context/AuthContext'
import { Title } from '../../../components/core-components/h1'
import electronicImage from '../../../assets/images/electronic.jpg'

function Dashboard() {

    const { user } = useContext(AuthContext) as AuthContextType

    return <>
        <img src={electronicImage} width={300} height={150} alt="Electronic" />
        <Title>Dashboard</Title>
        <h1>Dashboard</h1>
        <hr />
        <h2>User: {user.email}</h2>
        <h2>Roles: {user.roles}</h2>
    </>
}

export default Dashboard
import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    let { id } = useParams()
    return <>
        <h1>Id: {id}</h1>
    </>
}

export default Detail
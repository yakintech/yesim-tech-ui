import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import Update from './update'
import Detail from './detail'

function Product() {
    return <>
        <Routes>
            <Route path='/' element={<List />} />
            <Route path='/add' element={<Add />} />
            <Route path='/update/:id' element={<Update />} />
            {/* <Route path='/:id' element={<Detail/>} /> */}
        </Routes>
    </>
}

export default Product
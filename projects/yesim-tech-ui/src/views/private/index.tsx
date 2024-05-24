import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './product'
import Dashboard from './dashboard'

function PrivateViews() {
  return <>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/products/*' element={<Product/>} />
    </Routes>
  </>
}

export default PrivateViews
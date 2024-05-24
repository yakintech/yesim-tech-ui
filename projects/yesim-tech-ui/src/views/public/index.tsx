import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'

function PublicViews() {
  return <>
    <Routes>
      <Route path='/*' element={<Login />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </>
}

export default PublicViews
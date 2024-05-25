import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './product'
import Dashboard from './dashboard'
import { RoleProvider, USER_ROLES } from '../../utils/auth/RoleProvider'

function PrivateViews() {
  return <>
    <ul>
      <li><Link to='/'>Dashboard</Link></li>

      <RoleProvider roleNumber={USER_ROLES.PRODUCT_LIST}>
        <li><Link to='/products'>Products</Link></li>
      </RoleProvider>

    </ul>

    <Routes>
      <Route path='/' element={<Dashboard />} />


      <Route path='/products/*' element={
        <RoleProvider roleNumber={USER_ROLES.PRODUCT_LIST}><Product /></RoleProvider>
      } />


      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default PrivateViews



function NotFound() {
  return <h1>Not Found</h1>
}
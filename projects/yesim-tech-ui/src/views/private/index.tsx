import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './product'
import Dashboard from './dashboard'
import { RoleProvider, USER_ROLES } from '../../utils/auth/RoleProvider'
import SiteHeader from '../../components/layout-componens/SiteHeader'
import SiteFooter from '../../components/layout-componens/SiteFooter'

function PrivateViews() {
  return <>

    <SiteHeader/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/products/*' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <SiteFooter/>
  </>
}

export default PrivateViews



function NotFound() {
  return <h1>Not Found</h1>
}
import React, { useEffect } from 'react'
import Views from './views/'
import { useLocation } from 'react-router-dom'
import { RouteRoleProvider } from './utils/auth/RouteRoleProvider';
import UserDetail from './others/UserDetail';

function App() {

  let location = useLocation()


  return <UserDetail name='' />
  return <RouteRoleProvider path={location.pathname}>
    <Views />
  </RouteRoleProvider>
}

export default App
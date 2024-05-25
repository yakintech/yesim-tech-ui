import React, { useEffect } from 'react'
import Views from './views/'
import { useLocation } from 'react-router-dom'
import { RouteRoleProvider } from './utils/auth/RouteRoleProvider';
import UserDetail from './others/UserDetail';
import YButton from './components/core-components/button';
import Dashboard from './Dashboard';

function App() {


  return <Views/>
  // let location = useLocation()


  // return <Dashboard/>
  // return <YButton>Test</YButton>
  // return <RouteRoleProvider path={location.pathname}>
  //   <Views />
  // </RouteRoleProvider>
}

export default App
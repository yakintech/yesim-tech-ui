import React, { useEffect } from 'react'
import Views from './views/'
import { useLocation } from 'react-router-dom'
import { RouteRoleProvider } from './utils/auth/RouteRoleProvider';
import UserDetail from './others/UserDetail';
import YButton from './components/core-components/button';
import Dashboard from './Dashboard';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import moment from 'moment';
import { HelmetProvider } from 'react-helmet-async';


const helmetContext = {};

function App() {


  return <HelmetProvider context={helmetContext}>
    <Views />
  </HelmetProvider>
  // return <DayjsSample/>
  // let location = useLocation()


  // return <Dashboard/>
  // return <YButton>Test</YButton>
  // return <RouteRoleProvider path={location.pathname}>
  //   <Views />
  // </RouteRoleProvider>
}

export default App




function DayjsSample() {

  dayjs.extend(customParseFormat)

  //  var dateNow = dayjs(new Date()).format("DD.MM.YYYY")
  // console.log(dateNow)

  var date = dayjs("22.01.2022", "DD.MM.YYYY")
  console.log(date)


  var date2 = moment("22.01.2022", "DD.MM.YYYY")
  console.log(date2)
  return <></>
}
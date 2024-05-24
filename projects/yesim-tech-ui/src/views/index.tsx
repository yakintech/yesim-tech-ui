import React, { useContext, useEffect } from 'react'
import PrivateViews from './private';
import PublicViews from './public';
import { AuthContext, AuthContextType } from '../context/AuthContext';

function Views() {

  const { isLogin, loading } = useContext(AuthContext) as AuthContextType
  

  return <>
    {
      loading ? <></> : isLogin ? <PrivateViews /> : <PublicViews />
    }
  </>
}

export default Views
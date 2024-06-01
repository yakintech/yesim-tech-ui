import React, { useContext, useEffect } from 'react'
import PrivateViews from './private';
import PublicViews from './public';
import { AuthContext, AuthContextType } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchAuthControl } from '../store/slices/AuthSlice';

function Views() {

  const { isLogin, loading } = useContext(AuthContext) as AuthContextType
  const { isLogin: reduxIsLogin, loading : reduxLoading, user } = useSelector((state: RootState) => state.auth)


  return <>
    {
      //loading ? <></> : isLogin ? <PrivateViews /> : <PublicViews />
      reduxLoading ? <></> : reduxIsLogin ? <PrivateViews /> : <PublicViews />
    }
  </>
}

export default Views



// function AuthJWTControl({children}: any){

  
//   let dispatch = useDispatch<AppDispatch>();


//   useEffect(() => {
//     dispatch(fetchAuthControl())
//   })



// }
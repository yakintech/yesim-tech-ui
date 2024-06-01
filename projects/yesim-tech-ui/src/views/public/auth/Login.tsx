import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LoginModel } from '../../../api/auth/LoginModel'
import { LoginService } from '../../../api/auth/LoginService'
import { AuthContext, AuthContextType } from '../../../context/AuthContext'
import { useDispatch } from 'react-redux'
import { loginAuth } from '../../../store/slices/AuthSlice'

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginModel>()

  const { login } = useContext(AuthContext) as AuthContextType

  let dispath = useDispatch()

  const loginUser = (data: LoginModel) => {

    LoginService.login(data)
      .then(result => {
        login({ email: result.email, roles: result.roles }) //call context login method
        dispath(loginAuth({ email: result.email, roles: result.roles })) //call redux login method

      })
      .catch(error => {
        alert("Email veya şifre yanlış")
      }
      )

  }

  return <>
    <form onSubmit={handleSubmit(loginUser)}>
      <div>
        <label htmlFor="">EMail</label>
        <input type='text' {...register("email")} />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type='password' {...register("password")} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </>
}

export default Login
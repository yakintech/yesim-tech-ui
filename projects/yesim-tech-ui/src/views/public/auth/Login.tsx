import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LoginModel } from '../../../api/auth/LoginModel'
import { LoginService } from '../../../api/auth/LoginService'
import { AuthContext, AuthContextType } from '../../../context/AuthContext'

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginModel>()

  const { login } = useContext(AuthContext) as AuthContextType

  const loginUser = (data: LoginModel) => {

    LoginService.login(data)
      .then(result => {
        if (result == true) {
          login()
        }
        else {
          alert("EMail veya şifre yanlış!")
        }
      })

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
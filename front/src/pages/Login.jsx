import React from 'react'
import LoginForm from '../components/LoginForm'
import './Login.scss'

const Login = () => {
  return (
    <div className='formulario'>
        <h2>Login</h2>
        <LoginForm></LoginForm>
    </div>
  )
}

export default Login
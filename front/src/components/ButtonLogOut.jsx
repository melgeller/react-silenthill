import React from 'react'
import { JwtContext } from '../context/jwtContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './ButtonLogOut.scss'

const ButtonLogOut = () => {
    const { setJwt } = useContext(JwtContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate('/login');
    }
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default ButtonLogOut
import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return (
    <div>
      <ul className='intro'>
            <li className='menu'>
              <Link to='/'>Home</Link>
            </li>
            <li className='menu'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='menu'>
              <Link to='/register'>Register</Link>
            </li>
            </ul>
    </div>
  )
}

export default Home
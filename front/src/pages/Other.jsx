import React from 'react'
import { useContext } from 'react'
import { SHContext } from '../context/context'
import './Games.scss'
import { Link } from 'react-router-dom'

const Other = () => {
  const { others } = useContext(SHContext);
  return (
    <div className='games'>
      {others.map((other) => (
        <Link key={other._id} to={`${other._id}`}>
        <div className='cardGame'>
          <p key={other._id}>{other.title}</p>
          <img className='poster' src={other.poster} alt={other.title}></img>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Other
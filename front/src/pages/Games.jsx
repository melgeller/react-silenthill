import React from 'react'
import { useContext } from 'react'
import { SHContext } from '../context/context'
import './Games.scss'
import { Link } from 'react-router-dom'

const Games = () => {
  const { games } = useContext(SHContext);
  return (
    <div className='games'>
      {games.map((game) => (
        <Link key={game._id} to={`${game._id}`}>
        <div className='cardGame'>
          <p key={game._id}>{game.title}</p>
          <img src={game.poster} alt={game.title}></img>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Games
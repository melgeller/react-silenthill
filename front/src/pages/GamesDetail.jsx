import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GamesDetail.scss";

const GamesDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getGameByTitle = async () => {
      const res = await axios.get(
        `https://node-silent-hill.vercel.app/games/id/${id}`
      );
      setGame(res.data)
      setTimeout(() => {
        setLoaded(true)
      }, 2000)
    };

    getGameByTitle();
  });
  return <div className='details'>
      {game ? (
        <>
        {loaded ? (
          <>
        <img className='poster' src={game.poster} alt={game.title}></img>
        <div className='cardDetail'>
        <p className='titleDetail'>{game.title}</p>
        <p className='mediumDetail'>{game.year}</p>
        <p className='mediumDetail'>{game.platform}</p>
        <p className='smallDetail'>{game.about}</p>
        </div>
        </>
          ) : (
            <div className="harry">
            <img
              src='https://i.pinimg.com/originals/e0/6f/60/e06f60e1c6c49d5570a52011987242b0.gif'
              alt='loading'></img>
              </div>
          )}
        

        </> ) : null
        
      }
      
    </div>
};

export default GamesDetail;

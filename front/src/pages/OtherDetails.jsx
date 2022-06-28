import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './GamesDetail.scss'

const GamesDetail = () => {
  const {id} = useParams()
  const [other, setOthers] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() =>{
    const getOthersByTitle = async() => {
      const res = await axios.get(`https://node-silent-hill.vercel.app/spinOffs/id/${id}`);
      setOthers(res.data)
      setTimeout(() => {
        setLoaded(true)
      }, 2000)
    }

    getOthersByTitle();
  }, );
  return <div className='details'>
      {other ? (
        <>
        {loaded ? (
          <>
        <img className='poster' src={other.poster} alt={other.title}></img>
        <div className='cardDetail'>
        <p className='titleDetail'>{other.title}</p>
        <p className='mediumDetail'>{other.year}</p>
        <p className='mediumDetail'>{other.platform}</p>
        <p className='smallDetail'>{other.about}</p>
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
  
}

export default GamesDetail
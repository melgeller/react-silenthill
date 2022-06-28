import React, { useContext } from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";
import ButtonLogOut from "./ButtonLogOut";
import { JwtContext } from "../context/jwtContext";


const Navigator = () => {
  const { jwt } = useContext(JwtContext);

  return (
    <div className="paginaUno">
        {jwt && (
            <div className='navigator'>
          <ul>
            <li>
              <Link to='/games'>Games</Link>
            </li>
            <li>
              <Link to='/other'>Other</Link>
            </li>
            <li>
              <ButtonLogOut></ButtonLogOut>
            </li>
            </ul>
         </div>
        )}
        {jwt === null && (
            <div className="homeUno">
            <div className="imagen">
            <Link to='/'><img src="https://i.imgur.com/D9gO30A.png" alt='logo'></img></Link>
            </div>
            </div>
        )}
    
    </div>
  );
};

export default Navigator;

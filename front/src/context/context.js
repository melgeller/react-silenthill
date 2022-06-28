import React, {useState, useEffect, createContext} from "react";
import  axios from "axios";

export const SHContext = createContext();
const BASEURL = "https://node-silent-hill.vercel.app"

export const SHContextProvider = (
    {children}
) => {
    const [games, setGames] = useState([]);
    const [others, setOthers] = useState([]);

    useEffect(() => {
        const getGames = async() => {
            const gamesApi = await axios.get(`${BASEURL}/games`);
            setGames(gamesApi.data);
            console.log(gamesApi)
        };
        getGames();
        

    },[]);

    useEffect(() => {
        const getOthers = async() =>{
            const othersApi = await axios.get(`${BASEURL}/spinoffs`);
            setOthers(othersApi.data);
        };
        getOthers();
    }, []);

    return(<SHContext.Provider value = {
        {games, others}}>{children}</SHContext.Provider>)
}
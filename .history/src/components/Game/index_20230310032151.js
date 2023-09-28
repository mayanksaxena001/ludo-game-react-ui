import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";
import gameService from '../../service/game.service';

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    // let navigate = useNavigate();
    useEffect(() => {
        if (data) {
            console.log('Gamedata : ', data);
            SocketService.joinRoom(data.room);//TODO join only when needed 
        } 
        if(!data){
            gameService.getGameById().then().catch();
        }
        // else {
        //     navigate('/dashboard');
        // }
    }, [data])
    const [gameStarted, setGameStarted] = useState(false);
    useEffect(()=>{
        // setGameStarted(data.gameStarted);
    },[gameStarted]);
    return (
        <GameBoard id={'xyz'} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
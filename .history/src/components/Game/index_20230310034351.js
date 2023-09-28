import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    const [gameData, setGameData] = useState({ game: data });
    // let navigate = useNavigate();
    useEffect(() => {
        if (data) {
            console.log('Gamedata : ', data);
            SocketService.joinRoom(data.room);//TODO join only when needed
            SocketService.sendMessage(gameData);
            SocketService.getMessage(() =>
                (data) => {
                    console.log("Data Received at client : ", data);
                }
            );
        }
        // if(!data){
        //     gameService.getGameById().then().catch();
        // }
        // else {
        //     navigate('/dashboard');
        // }
    }, [data])
    const [gameStarted, setGameStarted] = useState(false);
    useEffect(() => {
        // setGameStarted(data.gameStarted);
    }, [gameStarted]);
    return (
        <GameBoard id={'xyz'} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
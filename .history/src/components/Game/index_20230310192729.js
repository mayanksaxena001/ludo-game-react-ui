import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    const [gameStarted, setGameStarted] = useState(false);
    const [room, setRoom] = useState(data.room);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState({ game: data, started: gameStarted, gameOver: gameOver });
    
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    
    useEffect(() => {
        if (data) {
            console.log('Gamedata : ', data);
            SocketService.joinRoom(data.room);//TODO join only when needed
            setRoom(data.room);
            SocketService.sendMessage(gameData);
            const receivedMessage = (data) => {
                console.log("Data Received at client : ", data);
            };
            SocketService.getMessage(
                receivedMessage
                );
            }
            // if(!data){
                //     gameService.getGameById().then().catch();
                // }
        // else {
        //     navigate('/dashboard');
        // }
    }, [data,gameStarted])
    // let navigate = useNavigate();
    return (
        <GameBoard room={room} id={'xyz'} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
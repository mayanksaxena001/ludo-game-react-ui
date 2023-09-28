import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    const [room, setRoom] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        console.log('Gamedata : ', data);
        if (data && data.room) {
            setRoom(data.room);
            if(SocketService.isConnected())SocketService.joinRoom(data.room);//TODO join only when needed 
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
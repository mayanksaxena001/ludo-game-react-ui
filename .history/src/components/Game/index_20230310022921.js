import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState(location.state);
    useEffect(() => {
        if (data && data.room) {
            setRoom(data.room);
            SocketService.joinRoom(data.room);
        } 
        else {
            navigate('/dashboard');
        }
    }, [data])
    const [gameStarted, setGameStarted] = useState(false);
    let navigate = useNavigate();
    console.log('Gamedata : ', data);
    const [room, setRoom] = useState(null);
    return (
        <GameBoard id={'xyz'} room={room} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
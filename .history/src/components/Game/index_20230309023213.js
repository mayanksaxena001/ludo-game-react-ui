import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    let navigate = useNavigate();
    const [data, setData] = useState(location.state);
    const [gameStarted, setGameStarted] = useState(false);
    console.log('Gamedata : ', data);
    const [room, setRoom] = useState(null);
    useEffect(() => {
        if (data && data.room) {
            setRoom(data.room);
            SocketService.joinRoom(room);
        } 
        // else {
        //     navigate('/dashboard');
        // }
    }, [])
    return (
        <GameBoard id={'xyz'} room={room} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
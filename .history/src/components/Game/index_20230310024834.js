import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    const [data, setData] = useState({game:location.state});
    const [room, setRoom] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        if (data && data.room) {
            setRoom(data.room);
            console.log('Gamedata : ', data);
            SocketService.joinRoom(data.room);//TODO join only when needed 
        } 
        else {
            navigate('/dashboard');
        }
    }, [data])
    const [gameStarted, setGameStarted] = useState(false);
    useEffect(()=>{
        setGameStarted(data.gameStarted);
    },[gameStarted]);
    return (
        <GameBoard id={'xyz'} room={room} disabled={gameStarted} gameData={data} />
    );
}

export default LudoGame;
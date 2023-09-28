import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const location = useLocation();
    console.log('location : ',location);
    const { data } = props;
    let navigate = useNavigate();
    // const [data, setData] = useState([null]);
    const [gameStarted, setGameStarted] = useState(false);
    console.log('Gamedata : ', data);
    const [room, setRoom] = useState(null);
    useEffect(() => {
        if (data) {
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
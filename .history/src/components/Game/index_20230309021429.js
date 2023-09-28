import React, { useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";

function LudoGame(props) {
    const { data } = props.history.data;
    let navigate = useNavigate();
    // const [data, setData] = useState([null]);
    const [players, setPlayers] = useState(['Red', 'Green', 'Blue', 'Yellow']);
    const [currentPlayer, setCurrentPlayer] = useState(1);
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
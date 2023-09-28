import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";
import game_data from './gameData';
import gameService from '../../service/game.service';

function LudoGame(props) {
    const location = useLocation();
    const [game, setGame] = useState(location.state);
    const [gameStarted, setGameStarted] = useState(false);
    const [room, setRoom] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState(game_data);

    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled

    useEffect(() => {
        if (game) {
            console.log('Gamedata : ', game);
            setRoom(game.room);
            const tempData = gameData;
            tempData.game = game;
            setGameData(tempData);
            gameService.getGameInfoById(game.id).then((data) => {
                if (data) {
                    console.log('gameInfo', data.gameInfo);
                    const tempData = gameData;
                    if (!tempData.players[data.gameInfo.user_id]) {
                        SocketService.joinRoom(tempData.game.room);//TODO join only when needed
                        tempData.players[data.gameInfo.user_id] = data.gameInfo;
                        setGameData(tempData);
                        SocketService.sendMessage(gameData);
                    }
                }

            }).catch(err => console.log(err));
            SocketService.sendMessage(gameData);
            //not working..
            SocketService.registerReceiveCallback(
                receivedMessage
            );
        }
    }, [game, gameData])
    const receivedMessage = useCallback((data) => {
        console.log("Data Received at client : ", data);
    });
    // let navigate = useNavigate();
    return (
        <GameBoard room={room} id={'xyz'} disabled={gameStarted} gameData={gameData} />
    );
}

export default LudoGame;
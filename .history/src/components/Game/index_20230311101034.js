import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";
import game_data from './gameData';
import gameService from '../../service/game.service';
import socketService from '../../service/socket.service';

const SocketContext = SocketService.getContext();
const socket = SocketService.getSocket();

function LudoGame(props) {
    const location = useLocation();
    const [game, setGame] = useState(location.state);
    const [gameStarted, setGameStarted] = useState(false);
    const [room, setRoom] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState(game_data);
    const [userId, setUserId] = useState(null);
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    const receivedMessage = useCallback((data) => {
        console.log("Data Received at client : ", data);
        setGameData(data);
    }, []);

    useEffect(() => {
        if (game) {
            console.log('Gamedata : ', gameData);
            if (socket) {
                SocketService.joinRoom(game.room);//TODO join only when needed
                socketService.receivedMessage(receivedMessage);
                SocketService.sendMessage(gameData);
            }
            setRoom(game.room);
            const tempData = gameData;
            tempData.game = game;
            setGameData(tempData);
            if (!userId) gameService.getGameInfoById(game.id).then((data) => {
                if (data) {
                    console.log('gameInfo', data.gameInfo);
                    setUserId(data.gameInfo.user_id);
                    if (!gameData.players[data.gameInfo.user_id]) {
                        gameData.players[data.gameInfo.user_id] = data.gameInfo;
                        setGameData(gameData);
                        SocketService.sendMessage(gameData);
                    }
                }

            }).catch(err => console.log(err));
        }
        // return () => {
        //     socket.disconnect()
        // }
    }, [game])
    // let navigate = useNavigate();
    return (
        <SocketContext.Provider value={socket}>
            <GameBoard room={room} id={'xyz'} disabled={gameStarted} gameData={gameData} />
        </SocketContext.Provider>
    );
}

export default LudoGame;
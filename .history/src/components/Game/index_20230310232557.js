import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import { socket, SocketContext } from '../../service/socket.service';
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
    const [userId, setUserId] = useState(null);
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    // const receivedMessage = useCallback((data) => {
    //     console.log("Data Received at client : ", data);
    //     setGameData(data);
    // }, []);

    useEffect(() => {
        if (socket) {
            console.log('Socket : ',socket);
            socket.emit("join_room", game.room);//TODO join only when needed
            socket.on("received_message", (data) => {
                console.log("Data Received at client : ", data);
                setGameData(data);
            });
            socket.emit("send_message", gameData);
        }
        if (game) {
            console.log('Gamedata : ', game);
            setRoom(game.room);
            const tempData = gameData;
            tempData.game = game;
            setGameData(tempData);
            gameService.getGameInfoById(game.id).then((data) => {
                if (data) {
                    console.log('gameInfo', data.gameInfo);
                    setUserId(data.gameInfo.user_id);
                    if (!gameData.players[data.gameInfo.user_id]) {
                        gameData.players[data.gameInfo.user_id] = data.gameInfo;
                        setGameData(gameData);
                        socket.emit("send_message", gameData);
                    }
                }

            }).catch(err => console.log(err));
            //not working..
        }
        return () => {
            socket.disconnect()
        }
    }, [game, gameData])
    // let navigate = useNavigate();
    return (
        <SocketContext.Provider value={socket}>
            <GameBoard room={room} id={'xyz'} disabled={gameStarted} gameData={gameData} />
        </SocketContext.Provider>
    );
}

export default LudoGame;
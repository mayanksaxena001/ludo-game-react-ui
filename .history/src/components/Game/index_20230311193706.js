import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useNavigate, useLocation } from "react-router-dom";
import game_data from './gameData';
import gameService from '../../service/game.service';
import socketService from '../../service/socket.service';

const SocketChannelContext = SocketService.getContext();
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
    SocketService.joinRoom(game.room);
    gameData.game = game;
    gameData.has_started=true;
    SocketService.sendMessage(gameData);

    console.log(game);
    // socketService.receivedMessage(receivedMessage);
    const receivedMessage = useCallback((data) => {
        console.log("Data Received at client : ", data);
        if (data) {
            if (data.has_started) {
                setGameStarted(true);
            }
            // if (data.type == 'PLAYER_JOINED') {
            //     gameData.player_count++;
            // }
            //copy data to game_data
            // if (data.game) game_data.game = data.game;
            // if (data.players) game_data.players = data.players;
            // if (data.has_started) game_data.has_started = data.has_started;
            // if (data.has_stopped) game_data.has_stopped = data.has_stopped;
            // if (data.player_count) game_data.player_count = data.player_count;
            // if (data.tokens) game_data.tokens = data.tokens;

            // //check if data is changed
            // if(!gameData.game) gameData.game=game_data.game;
            // // if(!gameData.has_started) 
            // // gameData.has_started=game_data.has_started;
            // // // if(!gameData.has_stopped)
            // //  gameData.has_stopped=game_data.has_stopped;
            // // if(!gameData.player_count) 
            // // gameData.player_count=game_data.player_count;
            // if(userId){
            //     //incase player is  not registered
            //     if(!game_data.players[userId]){
            //         game_data.players[userId] = gameData.players[userId];
            //     }
            // }
            // setGameData(game_data);
        }
    }, []);

    // useEffect(() => {
    //     if (game) {
    //         console.log('game : ', game);
    //         if (socket) {
    //             SocketService.joinRoom(game.room);//TODO join only when needed
    //             socketService.receivedMessage(receivedMessage);
    //             SocketService.sendMessage(gameData);
    //         }
    //         setRoom(game.room);
    //         if (gameData) {
    //             console.log('Game data', gameData);
    //             const tempData = gameData;
    //             tempData.game = game;
    //             setGameData(tempData);
    //         }
    //         if (!userId) gameService.getGameInfoById(game.id).then((data) => {
    //             if (data) {
    //                 console.log('gameInfo', data.gameInfo);
    //                 setUserId(data.gameInfo.user_id);
    //                 if (!gameData.players[data.gameInfo.user_id]) {
    //                     gameData.players[data.gameInfo.user_id] = data.gameInfo;
    //                     setGameData(gameData);
    //                     SocketService.sendMessage(gameData);
    //                 }
    //             }

    //         }).catch(err => console.log(err));
    //     }
    //     return () => {
    //         setUserId(null);
    //         setGameData(null);
    //     //     socket.disconnect()
    //     }
    // }, [game, gameData])

    useEffect(() => { socketService.receivedMessage(receivedMessage); }, []);
    // let navigate = useNavigate();
    if (!gameStarted) {
        return (<h1>Waiting for Players to join</h1>)
    }
    else
        return (
            <SocketChannelContext.Provider value={socket}>
                <GameBoard room={room} id={'xyz'} disabled={!gameStarted} gameData={gameData} />
            </SocketChannelContext.Provider>
        );
}

export default LudoGame;
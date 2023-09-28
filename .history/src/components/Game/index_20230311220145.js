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
    console.log('Game', game);
    const [gameStarted, setGameStarted] = useState(game.game.has_started);
    const [room, setRoom] = useState(game.game.room);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState(game_data);
    const [userId, setUserId] = useState(game.userId);
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    if (!gameData.game) gameData.game = game.game;
    gameData.has_started = true;//TODO remove it
    if (!gameData.players[userId]) gameData.players[userId] = game.userId;
    SocketService.joinRoom(room);
    console.log(gameData);
    const receivedMessage = useCallback((data) => {
        console.log("Data Received at client : ", data);
        if (data) {
            if (data.has_started) {
                setGameStarted(true);
            }
            if (!data.players[userId]) data.players[userId] = userId;
            setGameData(data);
        }
    }, []);


    useEffect(() => {
        socketService.receivedMessage(receivedMessage);
        return () => {
            socket.disconnect();
        }
    }, []);

    const dicehandler = (data) => {
        if (data) {
            console.log('Dice data', data);
            gameData.dice_value = data;
            const player_turn = gameData.player_turn + 1;
            if (player_turn > gameData.player_count) player_turn = 1;
            SocketService.sendMessage(gameData);
            setGameData(gameData);
        }
    }

    const startGameHandler = () => {
        setGameStarted(true);
        gameData.has_started = true;
        SocketService.sendMessage(gameData);
    }

    if (!gameStarted) {
        const startDisabled = game.game.created_by != userId ? true : false;
        return (<>
            <h1>Waiting for Players to join</h1>
            <button disabled={startDisabled} onClick={startGameHandler}>Start Game</button>
        </>
        )
    }
    else
        return (
            <SocketChannelContext.Provider value={socket}>
                <GameBoard room={room} id={game.id} disabled={!gameStarted} gameData={gameData} dicehandler={dicehandler} />
            </SocketChannelContext.Provider>
        );
}

export default LudoGame;
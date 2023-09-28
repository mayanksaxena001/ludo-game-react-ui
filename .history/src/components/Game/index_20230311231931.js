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
    const [gameStarted, setGameStarted] = useState(game.game.has_started);
    const [room, setRoom] = useState(game.game.room);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState(game_data);
    const [userId, setUserId] = useState(game.userId);
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    // gameData.game = game.game;
    // gameData.has_started = true;//TODO remove it
    // gameData.players[userId] = 1;

    const receivedMessage = useCallback((data) => {
        if (data) {
            console.log("Data Received at client : ", data);
            if (data.has_started) {
                setGameStarted(true);
            }

            let turn = 0;
            for (var key in data.players) {
                const player = data.players[key];
                turn = player.player_turn;
            }
            if (!data.players[userId]) {
                const indexCount = turn + 1;
                data.players[userId] = {
                    id: userId,
                    player_turn: indexCount,
                    tokens: [indexCount + '1', indexCount + '2', indexCount + '3', indexCount + '4']
                };
            }
            setGameData(data);
            // if (data.type == 'PLAYER_JOINED') {
            //     gameData.player_count++;
            // }
        }
    }, []);

    useEffect(() => {
        console.log('inside game use effect');
        gameData.game = game.game;
        console.log('GameData', gameData);
        SocketService.joinRoom(room);
        socketService.receivedMessage(receivedMessage);
        // SocketService.onJoinRoomRequest(joinRoomRequest);
        return () => {
            socket.disconnect();
        }
    }, []);

    const dicehandler = (data) => {
        if (data) {
            console.log('Dice data', data);
            const testData = gameData;
            testData.dice_value = data;
            const player_turn = testData.player_turn + 1;
            if (player_turn > testData.player_count) player_turn = 1;//rolling turns
            testData.player_turn = player_turn;
            SocketService.sendMessage(testData);
            setGameData(testData);
        }
    }

    const startGameHandler = () => {
        setGameStarted(true);
        gameData.has_started = true;
        gameData.players[userId] = {
            id: userId,
            player_turn: 1,
            tokens: [player_turn + '1', player_turn + '2', player_turn + '3', player_turn + '4']
        };
        SocketService.sendMessage(gameData);
    }
    // let navigate = useNavigate();
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
                <GameBoard room={room} id={'xyz'} disabled={!gameStarted} gameData={gameData} dicehandler={dicehandler} />
            </SocketChannelContext.Provider>
        );
}

export default LudoGame;
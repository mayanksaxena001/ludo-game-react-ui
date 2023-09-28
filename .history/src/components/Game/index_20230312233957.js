import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useLocation } from "react-router-dom";
import GameData from '../Models/gameData';
import socketService from '../../service/socket.service';

const SocketChannelContext = SocketService.getContext();
const socket = SocketService.getSocket();

function LudoGame(props) {
    const location = useLocation();
    const [game, setGame] = useState(location.state);
    const [gameStarted, setGameStarted] = useState(game.game.has_started);
    const [room, setRoom] = useState(game.game.room);
    const [gameOver, setGameOver] = useState(false);
    const [gameData, setGameData] = useState(GameData);
    const [user, setUser] = useState(game.user);
    const [playerTurn, setPlayerTurn] = useState(gameData.player_turn);
    const [player, setPlayer] = useState({});
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    // gameData.game = game.game;
    // gameData.has_started = true;//TODO remove it
    // gameData.players[user.id] = 1;
    console.log('GameData', gameData);
    console.log('playerTurn', playerTurn);

    const receivedMessage = useCallback((data) => {
        if (data) {
            console.log("Data Received at client : ", data);
            if (data.has_started) {
                setGameStarted(true);
            }

            let turn = 0, playerCount = 0;
            for (var key in data.players) {
                const player = data.players[key];
                turn = player.player_turn;
                playerCount++;
            }
            if (!data.players[data.player_turn]) {
                let indexCount = turn + 1;
                let player = {
                    id: user.id,
                    player_turn: indexCount,
                    tokens: [indexCount + '1', indexCount + '2', indexCount + '3', indexCount + '4'],
                    username: user.username
                };
                data.players[data.player_turn] = player;
                setPlayer(player);
            }
            setPlayerTurn(data.player_turn);
            setGameData(data);

            // console.log(player);
            // console.log('playerTurn', data.player_turn);
        }
    }, []);

    useEffect(() => {
        console.log('inside game use effect');
        gameData.game = game.game;
        let player = {
            id: user.id,
            player_turn: 1,
            username: user.username
        };
        setPlayer(player);
        SocketService.joinRoom(room);
        socketService.receivedMessage(receivedMessage);
        // SocketService.sendMessage(gameData);
        // SocketService.onJoinRoomRequest(joinRoomRequest);
        return () => {
            socket.disconnect();
            setGameData(GameData);
        }
    }, [gameData]);

    const dicehandler = (data) => {
        if (data) {//data.has_started
            console.log('Dice data', data);
            data = 6;//remove
            // let testData = gameData;
            gameData.dice_value = data;
            if (data != 6) {
                let player_turn = gameData.player_turn + 1;
                if (player_turn > gameData.player_count) player_turn = 1;//rolling turns
                gameData.player_turn = player_turn;
            }
            // setGameData(testData);//TODO : not updating state
            // setPlayerTurn(testData.player_turn);
            console.log('GameData', gameData);
            SocketService.sendMessage(gameData);
        }
    }

    const startGameHandler = () => {
        //TODO start game / disable start button when all players have not joined
        setGameStarted(true);
        let testData = gameData;
        testData.has_started = true;
        const player_turn = 1;
        setPlayerTurn(player_turn);
        let player = {
            id: user.id,
            player_turn: player_turn,
            tokens: [player_turn + '1', player_turn + '2', player_turn + '3', player_turn + '4']
        };
        setPlayer(player);
        testData.player_turn = player_turn;
        testData.players[player_turn] = player;
        setGameData(testData);
        SocketService.sendMessage(testData);
    }

    const handleTokenMove = (data) => {

    }
    // let navigate = useNavigate();
    if (!gameStarted) {
        const startDisabled = game.game.created_by != user.id ? true : false;
        return (<>
            <h1>Waiting for Players to join</h1>
            <button disabled={startDisabled} onClick={startGameHandler}>Start Game</button>
        </>
        )
    }
    else {
        const isDisabled = player.player_turn != playerTurn ? true : false;
        return (
            <SocketChannelContext.Provider value={socket}>
                <GameBoard room={room} id={user.id} playerTurn={playerTurn} handleTokenMove={handleTokenMove} disabled={isDisabled} gameData={gameData} dicehandler={dicehandler} />
            </SocketChannelContext.Provider>
        );
    }
}

export default LudoGame;
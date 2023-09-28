import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard';
import SocketService from '../../service/socket.service';
import { useLocation } from "react-router-dom";
import GameData from '../Models/gameData';
import socketService from '../../service/socket.service';
import updateGameData from './ludo.logic';
import Player from '../Models/player';
import Token from '../Models/token';

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
    const [player, setPlayer] = useState(Player);
    let COLORS = ['#ff0000', '#0000ff', '#008000', '#ffff00'];
    //Create game data in start of component load
    //Revolve it around to other people using socket
    //According to turn , change actions can be linked with game data
    //others people screen component need to be disabled
    // gameData.game = game.game;
    // gameData.has_started = true;//TODO remove it
    // gameData.players[user.id] = 1;
    console.log('GameData', gameData);
    console.log('playerTurn', playerTurn);
    console.log('Player', player);

    const receivedMessage = useCallback((data) => {
        if (data) {
            console.log("Data Received at client : ", data);

            let turn = 0, playerCount = 0, ispresent = false;
            for (var key in data.players) {
                const player = data.players[key];
                if (player.id == user.id) ispresent = true;
                turn = player.player_turn;
                playerCount++;
            }
            if (!ispresent) {
                let indexCount = turn + 1;
                let player_ = addPlayer(indexCount, data.token_count, user);
                data.players[indexCount] = player_;
                setPlayer(player_);
            }
            if (data.has_started) {
                //TODO : start when all players are in room
                setGameStarted(true);

            } else {
                data.player_turn = Math.floor(Math.random() * data.player_count) + 1;
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
        const player_turn = 1;
        setPlayerTurn(player_turn);
        gameData.player_turn = player_turn;
        let player_ = addPlayer(player_turn, gameData.token_count, user);
        gameData.players[player_turn] = player_;
        setPlayer(player_);
        SocketService.joinRoom(room);
        SocketService.sendMessage(gameData);
        socketService.receivedMessage(receivedMessage);
        // SocketService.sendMessage(gameData);
        // SocketService.onJoinRoomRequest(joinRoomRequest);
        return () => {
            socket.disconnect();
        }
    }, []);

    const addPlayer = (indexCount, tokenCount, user) => {
        let player_ = Player;
        player_.id = user.id;
        player_.username = user.username;
        player_.player_turn = indexCount;
        player_.house.id = indexCount;
        player_.color = COLORS[indexCount];
        if (tokenCount) {
            for (let i = 1; i <= tokenCount; i++) {
                let token = Token;
                token.id = indexCount + ':' + i;//TODO : not working
                player_.house.tokens.push(token);
            }
        }
        return player_;
    }

    const dicehandler = (data) => {
        if (data) {//data.has_started
            console.log('Dice data', data);
            // data=6;
            const testData = gameData;
            testData.dice_value = data;
            let player_turn = testData.player_turn;
            if (data != 6) {
                player_turn = player_turn + 1;
                if (player_turn > testData.player_count) player_turn = 1;//rolling turns
                testData.player_turn = player_turn;
            }
            setPlayerTurn(testData.player_turn);
            setGameData(testData);//TODO : not working when on dice value 6
            SocketService.sendMessage(testData);
        }
    }

    const startGameHandler = () => {
        //TODO start game / disable start button when all players have not joined
        console.log('starting game...');
        setGameStarted(true);
        let testData = gameData;
        testData.has_started = true;
        setGameData(testData);
        SocketService.sendMessage(testData);
    }

    const handleTokenMove = (data) => {
        console.log('Token clicked');
        // updateGameData();
    }
    // let navigate = useNavigate();
    if (!gameStarted) {
        const startDisabled = gameData.game.created_by != user.id ? true : false;
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
                <GameBoard id={gameData.game.id} player={player} playerTurn={playerTurn} handleTokenMove={handleTokenMove} isDisabled={isDisabled} gameData={gameData} dicehandler={dicehandler} />
            </SocketChannelContext.Provider>
        );
    }
}

export default LudoGame;
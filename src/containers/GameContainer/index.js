import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../../components/gameboard';
import { useDispatch, useSelector } from 'react-redux';
import SocketController from '../../service/connectSocket';
import { addPlayer, disconnectSocket, setDiceValue, setGame, setPlayerTurn, updateGameData } from '../../reducers/socketReducer';
import { fetchUser } from '../../reducers/userSlice';
import './game_container.css';
import { Button } from '@material-ui/core';
import ChatSidebar from '../../components/sidebar';
let socketController = null;

function LudoGame(props) {
    const SocketChannelContext = React.createContext();
    const dispatch = useDispatch();
    const { currentGame, loading } = useSelector(state => state.game);
    const { user } = useSelector(state => state.user);
    const { joinedRoom, gameData, connected, player, messages } = useSelector(state => state.socket);
    const { token } = useSelector(state => state.auth);

    // const gameStarted = useState(gameData.has_started);
    const [gameOver, setGameOver] = useState(gameData.has_stopped);
    console.log('GameData', gameData);
    console.log('Player', player);
    console.log('socketController', socketController);
    // console.log('game', game);

    useEffect(() => {
        console.log('inside game use effect');
        if (!socketController) socketController = new SocketController();
        // console.log('connected', connected);
        // console.log('user', user);
        // console.log('joinedRoom', joinedRoom);
        //TODO : get current game from server if not present

        if (!user) dispatch(fetchUser());
        if (connected === false) dispatch(socketController.connectSocket(token));
        if (currentGame && gameData && !gameData.game.id) dispatch(setGame(currentGame));
        if (currentGame.room && connected && !joinedRoom) {
            if (user) {
                dispatch(addPlayer({ id: user.id, username: user.username }));
            }
            dispatch(socketController.joinServerRoom({ room: currentGame.room, userId: user.id, gameId: currentGame.id }));
        }
        if (currentGame && connected && joinedRoom) {
            console.log('============================//////////////===========');

        }

        //TODO problem with cleanupcode
        // return () => {
        //     if (connected === true) dispatch(socketController.disconnectSocket());
        // }
    }, [dispatch, gameData, connected, currentGame, joinedRoom, loading]);


    const dicehandler = (data) => {
        if (data) {//data.has_started
            console.log('Dice data', data);
            dispatch(socketController.diceRoll({ diceValue: data, room: currentGame.room, userId: user.id, gameId: currentGame.id }));
        }
    }

    const startGameHandler = () => {
        //TODO start game / disable start button when all players have not joined
        console.log('starting game...');
        dispatch(socketController.startGame({ userId: user.id, room: currentGame.room, gameId: currentGame.id }));
    }

    const handleTokenMove = (data) => {
        console.log('Token clicked..', data);
        dispatch(socketController.selectedToken({ tokenId: data.id, room: currentGame.room, userId: user.id, gameId: currentGame.id }));
    }

    const handleSendMessage = (message) => {
        let data = { room: currentGame.room, message: { text: message, sender: user.name } }
        dispatch(socketController.sendChatMessage(data));
    }

    const handleTimeOut = () => {
        console.log('Timeout..');
        // const player = this.gameData.turns[this.gameData.player_turn];
        // dispatch(socketController.timeOut({ userId: player.id, room: game.room }));
    }

    const activePlayers = () => {
        let result = [];
        let players = gameData.players;
        for (var key in players) {
            const player = players[key];
            if (player) result.push(player);
        }
        return result.map(player => {
            return <div key={player.id} className='active_player'>
                <span>{player.username}</span>
            </div>;
        });
    }

    const startButton = () => {
        // let playerCount = 0;
        // for (let key in gameData.players) {
        //     if (gameData.players[key]) {
        //         playerCount++;
        //     }
        // }
        let startButtonEnabled = !gameData.has_started && !gameData.has_stopped && gameData.game.created_by === player.id;
        // && playerCount === gameData.player_count;
        if (startButtonEnabled) {
            return <div className='circle'>
                <Button disabled={!startButtonEnabled} className='circle' onClick={startGameHandler} >
                    Start Game
                </Button>
            </div>
        }
    }

    const winners = () => {
        let count = 0;
        let players = gameData.players;
        let home = gameData.home;
        let result = [];
        for (let i = 0; i < home.length; i++) {
            result.push(home[i]);

        }
        for (var key in players) {
            const player = players[key];
            let found = false;
            for (let i = 0; i < home.length; i++) {
                if (home[i] === player.id) found = true;

            }
            if (!found) result.push(player.id);
        }

        return result.map(player => {
            const username = gameData.players[player].username;
            count++;
            return <div key={player} className='active_player'>
                <span>{count}</span> : <span>{username}</span>
            </div>;
        });
    }

    const WaitingWindow = () => {

        if (gameData.has_stopped === true && gameData.has_started === false)
            return <div className='active_players'>
                {winners()}
            </div>
        else return (<div className='waiting_window'>
            <div className='active_players'>
                {activePlayers()}
            </div>
            <div className="loader">
                {startButton()}
            </div>
        </div>)
    }

    const content = (!gameData.has_started) ? <WaitingWindow /> : (
        <SocketChannelContext.Provider value={gameData}>
            <GameBoard id={currentGame.id} player={player} handleTokenMove={handleTokenMove} gameData={gameData} dicehandler={dicehandler} handleTimeOut={handleTimeOut} startGameHandler={startGameHandler} />
            <ChatSidebar room={currentGame.room} handleSendMessage={handleSendMessage} socketController={socketController}></ChatSidebar>
        </SocketChannelContext.Provider>
    );
    return <>
        <div className='main-game-board'>
            {content}
        </div>
    </>;
    // }
}

export default LudoGame;
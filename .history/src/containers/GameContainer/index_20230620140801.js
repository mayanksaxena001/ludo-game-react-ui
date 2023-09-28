import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../../components/gameboard';
import { useDispatch, useSelector } from 'react-redux';
import SocketController from '../service/connectSocket';
import { addPlayer, disconnectSocket, setDiceValue, setGame, setPlayerTurn, updateGameData } from '../../reducers/socketReducer';
import { fetchUser } from '../../reducers/userSlice';
import './game_container.css';
import { Button } from '@material-ui/core';
let socketController = null;

function LudoGame(props) {
    const SocketChannelContext = React.createContext();
    const dispatch = useDispatch();
    const { currentGame, loading } = useSelector(state => state.game);
    const { user } = useSelector(state => state.user);
    const { joinedRoom, gameData, connected, player } = useSelector(state => state.socket);

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
        if (connected === false) dispatch(socketController.connectSocket());
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

        // return ()=>{
        //     if(connected === false) socketController=null;
        // }
    }, [dispatch, gameData, connected, currentGame, joinedRoom, loading]);


    const dicehandler = (data) => {
        if (data) {//data.has_started
            console.log('Dice data', data);
            dispatch(socketController.diceRoll({ diceValue: data, room: currentGame.room, userId: user.id }));
        }
    }

    const startGameHandler = () => {
        //TODO start game / disable start button when all players have not joined
        console.log('starting game...');
        dispatch(socketController.startGame({ userId: user.id, room: currentGame.room }));
    }

    const handleTokenMove = (data) => {
        console.log('Token clicked..', data);
        dispatch(socketController.selectedToken({ tokenId: data.id, room: currentGame.room, userId: user.id }));
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
        let playerCount = 0;
        for (let key in gameData.players) {
            if (gameData.players[key]) {
                playerCount++;
            }
        }
        let startButtonEnabled = !gameData.has_started && gameData.game.created_by === player.id
            && playerCount === gameData.player_count;
        if (startButtonEnabled) {
            return <div className='circle'>
                <Button disabled={!startButtonEnabled} className='circle' onClick={startGameHandler} >
                    Start Game
                </Button>
            </div>
        }
    }
    const WaitingWindow = () =>
        <div className='waiting_window'>
            <div className='active_players'>
                {activePlayers()}
            </div>
            <div className="loader">
                {startButton()}
            </div>
        </div>

    const content = (!gameData.has_started) ? <WaitingWindow /> : (
        <SocketChannelContext.Provider value={gameData}>
            <GameBoard id={currentGame.id} player={player} handleTokenMove={handleTokenMove} gameData={gameData} dicehandler={dicehandler} handleTimeOut={handleTimeOut} startGameHandler={startGameHandler} />
        </SocketChannelContext.Provider>
    );
    return content;
    // }
}

export default LudoGame;
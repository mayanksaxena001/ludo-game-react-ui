import React, { useCallback, useEffect, useState } from 'react';
import GameBoard from '../../components/gameboard';
import { useDispatch, useSelector } from 'react-redux';
import SocketController from '../../service/socket.controller.js';
import { addPlayer, disconnectSocket, setDiceValue, setGame, setPlayerTurn, updateGameData } from '../../reducers/socketReducer';
import { fetchUser } from '../../reducers/userSlice';
import './game_container.css';
import { Button } from '@material-ui/core';
import ChatSidebar from '../../components/sidebar';
import { CSSTransition } from 'react-transition-group';
let socketController = null;

function LudoGame(props) {
    const { isBot } = props;
    const SocketChannelContext = React.createContext();
    const dispatch = useDispatch();
    const { currentGame, loading } = useSelector(state => state.game);
    const { user } = useSelector(state => state.user);
    const { joinedRoom, gameData, connected, player, messages } = useSelector(state => state.socket);
    const { token } = useSelector(state => state.auth);

    // const gameStarted = useState(gameData.has_started);
    const [gameOver, setGameOver] = useState(gameData.has_stopped);
    const [moveTokenPosition, setMoveTokenPosition] = useState('');
    // console.log('GameData', gameData);
    // console.log('Player', player);
    // console.log('socketController', socketController);
    // console.log('game', game);

    useEffect(() => {
        console.log('inside game use effect...1..');
        if (!socketController) socketController = new SocketController();
        // console.log('connected', connected);
        // console.log('user', user);
        // console.log('joinedRoom', joinedRoom);
        //TODO : get current game from server if not present

        if (!user) dispatch(fetchUser());
        if (connected === false) dispatch(socketController.connectSocket(user.id, currentGame.room));
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
        // if(gameData.move_token && gameData.diceCastComplete && gameData.selectedToken!==''){
            if(gameData.moveTokenPositions.length >0){
            console.log('move token on board..');
            //move token strategy
            let count=0;
            setInterval(()=>{
                //all boxes
                setMoveTokenPosition(gameData.moveTokenPositions[count]);
                count++;
            },1000)
        }
        //TODO problem with cleanupcode
        // return () => {
        //     if (connected === true) dispatch(socketController.disconnectSocket());
        // }
    }, [dispatch, gameData, connected, currentGame, joinedRoom, loading]);

    useEffect(() => {
        console.log('inside game use effect ...2..');

        return () => {
            dispatch(socketController.disconnectSocket());
        }
    }, []);

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
        console.log('sending chat message..');
        let data = { room: currentGame.room, userId: user.id, gameId: currentGame.id, content: message }
        dispatch(socketController.sendChatMessage(data));
    }

    const handleTimeOut = () => {
        console.log('Timeout..');
        // const player = this.gameData.turns[this.gameData.player_turn];
        let data = { room: currentGame.room, userId: user.id, gameId: currentGame.id }
        // dispatch(socketController.timeOut({ userId: player.id, room: game.room }));
        dispatch(socketController.timeOut(data));
    }

    const activePlayers = () => {
        let result = [];
        let players = gameData.players;
        for (var key in players) {
            const player = players[key];
            if (player) result.push(player);
        }
        return result.map(player => {
            return <div key={player.id} className='active_player' disabled={!player.active}>
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
        else {
            return <>
                <h1>Waiting for players..</h1>
            </>
        }
    }

    const winners = () => {
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
                if (home[i] !== null && home[i] === player.id) found = true;
                
            }
            if (!found) result.push(player.id);
        }
        
        let count = 0;
        return result.map(playerId => {
            if (playerId === null) return;
            let player = gameData.players[playerId];
            const username = player != null && player.username != null ? player.username : "Null";
            count++;
            if(count > 3) return ;
            const imageUrl = `/img/crown${count}.png`;
            return <div key={playerId} className='active_player'>
               <img width='100px' height='100px' src={imageUrl} alt="logo" />; : <span>{username}</span>
            </div>;
        });
    }

    const OverlapWindow = () => {

        if (gameData.has_stopped === true && gameData.has_started === false)
            return <div className='active_players'>
                {winners()}
            </div>
        else return (<div className='waiting_window'>
            <div className='active_players'>
                {activePlayers()}
            </div>
            <div className='active_players_1'>
                {startButton()}
            </div>
        </div>)
    }

    const conditioNwindow = () => {
        if (!gameData.has_started) return <OverlapWindow />;
    }
    const content = (
        <SocketChannelContext.Provider value={gameData}>
            {conditioNwindow()}
            <GameBoard id={currentGame.id} player={player} handleTokenMove={handleTokenMove} gameData={gameData} dicehandler={dicehandler} handleTimeOut={handleTimeOut} messages={messages} moveTokenPosition={moveTokenPosition}/>
            <ChatSidebar room={currentGame.room} gameData={gameData} handleSendMessage={handleSendMessage} socketController={socketController} ></ChatSidebar>
        </SocketChannelContext.Provider>
    );
    // return <>
    //     <div className='main-game-board'>
    //         {content}
    //     </div>
    // </>;
    return <>
        <CSSTransition
            in={true}
            timeout={2000}
            classNames="fade"
            unmountOnExit
            appear
            enter={false}
        >
            <div className='main-game-board'>
                {content}
            </div>
        </CSSTransition>
    </>
}

export default LudoGame;
// import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Profile from '../../components/profile';
import isEmptyObject from '../../helpers/util';
import { resetAuthData } from '../../reducers/authSlice';
import { createGame, fetchGames, joinGame, resetCurrentGame, resetGameData } from '../../reducers/gameSlice';
import { resetSocketData } from '../../reducers/socketReducer';
import { fetchUser, resetUserData } from '../../reducers/userSlice';
import StorageService from '../../service/storage.service';
import './dashboard.css';
import { Button, Select } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import NewDashBoard from './DashBoard';
import { CSSTransition } from 'react-transition-group';
function Dashboard(props) {
    // const { user } = props;
    const { user } = useSelector(state => state.user);
    const { games, loading, currentGame } = useSelector(state => state.game);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [tokenCount, setTokenCount] = useState(2);
    const [playerCount, setPlayerCount] = useState(2);
    const [gameIndex, setGameIndex] = useState(0);

    useEffect(() => {
        console.log('use effect dashboard');
        if (!isEmptyObject(currentGame)) dispatch(resetCurrentGame());
        dispatch(fetchGames());
        dispatch(resetSocketData());
    }, []);

    useEffect(() => {
        console.log('fetching user..');
        if (isEmptyObject(user)) dispatch(fetchUser());
    }, [dispatch, user]);

    const handleCreateGame = () => {
        console.log('creating game..');
        //dispatch
        dispatch(createGame({ token_count: tokenCount, player_count: playerCount }));
        navigate('/game');
    }

    const handleLogout = () => {
        StorageService.setToken('');
        dispatch(resetSocketData());
        dispatch(resetAuthData());
        dispatch(resetGameData());
        dispatch(resetUserData());
        navigate('/');
        // alert('Logged out successfully');
    }

    const handleJoinRoom = (index) => {
        let game = games[index];
        dispatch(joinGame({ game_id: game.id }));
        navigate('/game');
    }

    const Logout = () => {
        return <div>
            <Button block="true" size="large" type="submit" onClick={() => handleLogout()}>
                <LogoutIcon style={{ height: '50px', width: '50px' }} />
            </Button>
        </div>
    }

    const CoinBox = () => {
        return <div className='coin-box'>
          <img style={{height:'50px',width:'50px'}} src='/img/dice.png' alt="logo" />
            <img style={{height:'50px',width:'50px'}} src='/img/banana.svg' alt="logo" />
            <img style={{height:'50px',width:'50px'}} src='/img/orange.svg' alt="logo" />
          <Button block="true" size="large" type="submit" onClick={() => {}}>
                <img style={{height:'50px',width:'50px'}} src='/img/next.svg' alt="logo" />
            </Button>
            <Logout/>
        </div>
    }

    const GamesTable = () => {
        return <>
            <h5>Click on room to join current game!</h5>
            <table>
                <tbody>
                    <tr className="table-Header">
                        <td >
                            <h1>No.</h1>
                        </td>
                        <td>
                            <h1>Game Id</h1>
                        </td>
                        <td>
                            <h1>Room</h1>
                        </td>
                        <td>
                            <h1>Created By</h1>
                        </td>
                    </tr>
                    {
                        games.map((game, index) => {
                            return <GamesTableRow className='table-row' key={index}
                                count={index + 1}
                                id={game.id}
                                room={game.room}
                                created_by={game.created_by}
                            />
                        })
                    }
                </tbody>
            </table>
        </>
    }
    const GamesTableRow = (props) => {
        return <tr>
            <td>
                <h5>{props.count}</h5>
            </td>
            <td>
                <h5>{props.id}</h5>
            </td>
            <td style={{ backgroundColor: "white", cursor: 'pointer' }} onClick={(e) => handleJoinRoom(props.count - 1)}>
                <h5>{props.room}</h5>
            </td>
            <td>
                <h5>{props.created_by}</h5>
            </td>
        </tr>
        // return (
        //     <div className='table-row' key={index} onClick={() => handleJoinRoom(index)}>
        //         <div>{index + 1}</div>
        //         <div>{game.id}</div>
        //         <div className='join_room'>{game.room}</div>
        //         <div>{game.created_by}</div>
        //     </div>)
    }

    const TokenComboxBox = () => {
        var num = [1, 2, 3, 4];
        return <div>
            <select id="token-count" name="select" label="Token Count" value={tokenCount} onChange={(e) => setTokenCount(e.target.value)}>
                {num.map((n) => {
                    return (<option key={n} value={n} >{n}</option>);
                })}
            </select>
        </div>
    }

    const PlayerComboxBox = () => {
        var num = [2, 3, 4];
        return <div>
            <select name="select" defaultValue={tokenCount} onChange={(e) => setPlayerCount(e.target.value)}>
                {num.map((n) => {
                    return (<option key={n} value={n} >{n}</option>);
                })}
            </select>
        </div>
    }

    const GamesPanel = () => {
        let game = games[gameIndex];
        if (game)
            return <>
                <span style={{ color: 'white',fontSize:'25px' }}>Live Games!</span>
                <div className='game-panel'>
                    <Button disabled={gameIndex <= 0} block="true" size="large" type="submit" onClick={() => { setGameIndex(prev => prev - 1) }}>
                        <img className='cursor' style={{ width: '100%' }} src='/img/left_arrow_circle.svg' alt="logo" />
                    </Button>

                    <GamesPanelRow 
                        count={gameIndex + 1}
                        id={game.id}
                        room={game.room}
                        created_by={game.created_by_user}
                        token_count={game.token_count}
                        player_count={game.player_count}
                    />
                    <Button disabled={gameIndex >= games.length-1}  block="true" size="large" type="submit" onClick={() => { setGameIndex(prev => prev + 1) }}>
                        <img className='cursor' style={{ width: '100%' }} src='/img/right_arrow_circle.svg' alt="logo" />
                    </Button>
                </div>
            </>
        else{
            return < >
            <div className='game-panel'>
            <span style={{ color: 'white' }}>No Live Games! Create a game to play.</span>
            </div>
            </>
        }
    }

    const GamesPanelRow = (props) => {
        return <>
            <div className='games-panel-row'>
                <div className='games-panel-row-info'>
                    <h5>ROOM</h5>
                    <span style={{ color: 'white' }}>{props.room}</span>
                    <Button block="true" size="large" type="submit" onClick={(e) => handleJoinRoom(props.count - 1)}>
                        <img className='cursor' style={{ width: '20%' }} src='/img/right-arrow.png' alt="logo" />
                    </Button>
                </div>
                <div className='games-panel-row-info'>
                    <h5>COUNT</h5>
                    <span style={{ color: 'white' }}>{props.count}</span>
                </div>
                {/* <div className='games-panel-row-info'>
                <h5>ID</h5>
                <span style={{ color: 'white' }}>{props.id}</span>
                </div> */}
                <div className='games-panel-row-info'>
                    <h5>TOKEN COUNT</h5>
                    <span style={{ color: 'white' }}>{props.token_count}</span>
                </div>
                <div className='games-panel-row-info'>
                    <h5>PLAYER COUNT</h5>
                    <span style={{ color: 'white' }}>{props.player_count}</span>
                </div>
                <div className='games-panel-row-info'>
                    <h5>CREATED BY</h5>
                    <span style={{ color: 'white' }}>{props.created_by}</span>
                </div>
            </div>
        </>
    }

    const Spinner = () => <div className="loader"></div>;
    const content = loading ? <Spinner /> : (
        <div className='dashboard'>
            <div className='profile-box'>
                <Profile user={user} />
                {/* <Logout /> */}
                <CoinBox />
            </div>
            <div className='home-box'>
                {/* <div className="box active" onClick={() => joinGame()}>Join Game</div> */}
                <div>
                    <div className="box" style={{ backgroundColor: 'transparent' }}>
                        <Button block="true" size="large" type="submit" onClick={() => { }}>
                            <img style={{ width: '100%' }} src='/img/right-arrow.png' alt="logo" />
                        </Button>
                        <span style={{ color: 'white' }}>PLAY WITH FRIENDS</span>
                    </div>
                    <div className="box " style={{ backgroundColor: 'transparent' }}>
                        <div>
                            <span style={{ color: 'white' }}>TOKEN COUNT</span>
                            <TokenComboxBox />
                        </div>
                        <div>
                            <span style={{ color: 'white' }}>PLAYER COUNT</span>
                            <PlayerComboxBox />
                        </div>
                        <Button block="true" size="large" className='cursor' onClick={() => handleCreateGame()}>
                            <img className='cursor' style={{ width: '50%' }} src='/img/next.svg' alt="logo" />
                        </Button>
                        <span style={{ color: 'white' }}>CREATE GAME</span>
                    </div>
                </div>
                <div>
                <div className="box">
                <img style={{height:'100%',width:'100%'}} src='/img/galaxy.gif' alt="logo" />
                <span style={{color:'white'}}>COMING SOON!</span>
                </div>
                <div className="box">
                <img style={{height:'100%',width:'100%'}} src='/img/4.gif' alt="logo" />
                <span style={{color:'white'}}>COMING SOON!</span>
                </div>
                </div>
            </div>
            <div className='games'>
                {/* <GamesTable /> */}
                <GamesPanel/>
            </div>
        </div>
    );
    const newDashBoard = <NewDashBoard games={games} user={user}></NewDashBoard>;
    return <>
        <CSSTransition
            in={true}
            timeout={2000}
            classNames="fade"
            unmountOnExit
            appear
            enter={false}
        >
            {content}
        </CSSTransition>
    </>
}

export default Dashboard;

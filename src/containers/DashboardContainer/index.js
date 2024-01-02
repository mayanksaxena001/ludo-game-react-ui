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

function Dashboard(props) {
    // const { user } = props;
    const { user } = useSelector(state => state.user);
    const { games, loading, currentGame } = useSelector(state => state.game);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [tokenCount, setTokenCount] = useState(2);
    const [playerCount, setPlayerCount] = useState(2);

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
    const Spinner = () => <div className="loader"></div>;
    const content = loading ? <Spinner /> : (
        <div className='dashboard'>
            <div className='profile-box'>
                <Profile user={user} />
                <Logout />
            </div>
            <div className='home-box'>
                {/* <div className="box active" onClick={() => joinGame()}>Join Game</div> */}
                <div className="box active">
                    <button className='cursor' onClick={() => handleCreateGame()}>
                        Create Game
                    </button>
                    <div>
                        Token Count :
                        <TokenComboxBox />
                    </div>
                    <div>
                        Player Count :
                        <PlayerComboxBox />
                    </div>
                </div>
            </div>
            <div className='games'>
                <GamesTable />
            </div>
        </div>
    );
    const newDashBoard = <NewDashBoard games={games} user={user}></NewDashBoard>;
    return content;


}

export default Dashboard;

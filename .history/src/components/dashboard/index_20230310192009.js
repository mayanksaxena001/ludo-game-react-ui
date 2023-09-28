// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import GameService from '../../service/game.service';
import UserService from '../../service/user.service';
import StorageService from '../../service/storage.service';
import Profile from '../Profile';

function Dashboard(props) {
    // const { user } = props;
    const [fetchData, setFetch] = useState(true);
    const [gameData, setGameData] = useState(null);
    const [user, setUser] = useState(null);
    const [activeGames, setActiveGames] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        console.log('use effect dashboard');
        const token = StorageService.getToken();
        if (!token) navigate('/home');
        fetchUserDetails(token);
    }, [fetchData, activeGames]);

    const fetchUserDetails = (token) => {
        if (fetchData && token) {
            UserService.getUser().then(data => {
                if (data) {
                    setUser(data.user);
                    console.log(data.user);
                    setFetch(false);
                }
            }).catch(err => {
                setFetch(true);
                console.log(err);
                alert('Something went wrong,Please try again..');
            });

            GameService.getAllActiveGames().then(data => {
                if (data) {
                    setActiveGames(data.games);
                }
            }).catch(e => console.log(e));
        }
    }

    const handleCreateGame = () => {
        console.log('creating game..');
        GameService.createGame({}).then(data => {
            if (data) {
                setGameData(data.game);
                navigate('/game', {
                    state: data.game
                });
            }
        }).catch(error => {
            console.log(error);
            alert('Something went wrong,Please try again..');
        });
    }
    // const joinGame = () => {
    //     console.log('join game..');
    //     navigate('/game', {
    //         state: gameData
    //     });
    // }



    const handleLogout = () => {
        StorageService.setToken('');
        navigate('/home');
        // alert('Logged out successfully');
    }

    const Logout = () => {
        return <div>
            <button block="true" size="lg" type="submit" onClick={() => handleLogout()}>
                Logout
            </button>
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
                        activeGames.map((game, index) => {
                            return <GamesTableRow className='table-row'
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
            <td style={{ backgroundColor: "white", cursor: 'pointer' }} onClick={() => handleJoinRoom(props.count)}>
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


    const handleJoinRoom = (index) => {
        console.log('index : ',index);
        let game = activeGames[index];
        GameService.joinGame({ game_id: game.id }).then(data => {
            if (data) {
                setGameData(game);
                navigate('/game', {
                    state: game
                });
            }
        }).catch(err => {
            console.log(err);
            alert('Something went wrong,Please try again..');
        });
    }

    return (
        <div className='dashboard'>
            <div className='profile-box'>
                <Profile  {...props} />
                <Logout />
            </div>
            <div className='home-box'>
                {/* <div className="box active" onClick={() => joinGame()}>Join Game</div> */}
                <div className="box active" onClick={() => handleCreateGame()}>Create Game</div>
            </div>
            <div className='games'>
                <GamesTable />
            </div>
        </div>
    );


}

export default Dashboard;

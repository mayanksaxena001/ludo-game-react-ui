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
    useEffect(() => {
        console.log('use effect dashboard');
        const token = StorageService.getToken();
        if (!token) navigate('/home');
        fetchUserDetails(token);
    }, [fetchData]);

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
    const [gameData, setGameData] = useState(null);
    const [user, setUser] = useState(null);
    const [activeGames, setActiveGames] = useState([]);
    let navigate = useNavigate();

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
        return activeGames.map((game, index) => {
            return (
                <div className='table-row' key={index} onClick={() => handleJoinRoom(index)}>
                    <div>{index + 1}</div>
                    <div>{game.id}</div>
                    <div className='join_room' >{game.room}</div>
                    <div>{game.created_by}</div>
                </div>

            );
        })
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

    const handleJoinRoom = (index) => {
        let game = activeGames[index];
        GameService.joinGame({ game_id: game.id }).then(data => {
            if (data) {
                setGameData(game);
                navigate('/game', {
                    state: { game }
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

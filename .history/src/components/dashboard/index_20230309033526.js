// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import { getAllActiveGames, createGame } from '../../service/game.service';
import { getUser, updateUser } from '../../service/user.service';
import { getToken, setToken } from '../../service/storage.service';

function Dashboard(props) {
    // const { user } = props;
    const [gameData, setGameData] = useState(null);
    const [fetchData, setFetch] = useState(true);
    const [user, setUser] = useState(null);
    const [activeGames, setActiveGames] = useState([]);
    let navigate = useNavigate();

    const joinGame = () => {
        console.log('join game..');
        navigate('/game', {
            state: gameData
        });
    }
    const handleCreateGame = () => {
        console.log('creating game..');
        createGame({}).then(data => {
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

    useEffect(() => {
        console.log('use effect dashboard');
        const token = getToken();
        if (!token) navigate('/home');
        if (fetchData) {
            getUser().then(data => {
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

            getAllActiveGames().then(data => {
                if (data) {
                    setActiveGames(data.games);
                }
            }).catch(e => console.log(e));
        }
    }, [user]);

    const UserProfile = () => {
        console.log('user profile');
        if (user) {
            return <form className='profile'>
                <div>
                    Id : {user.id}
                </div>
                <div>
                    Name : {user.name}
                </div>
                <div>
                    Username : {user.username}
                </div>
                <div>
                    Email : {user.email}
                </div>
            </form>
        }
    }

    const handleLogout = () => {
        setToken('');
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

    return (
        <div className='dashboard'>
            <div className='profile-box'>
                <UserProfile />
                <Logout />
            </div>
            <div className='home-box'>
                <div className="box active" onClick={() => joinGame()}>Join Game</div>
                <div className="box active" onClick={() => handleCreateGame()}>Create Game</div>
            </div>
            <div className='games'>
                {activeGames.map((listValue, index) => {
                    return (
                        <tr key={index}>
                            <td>{listValue.id}</td>
                            <td>{listValue.room}</td>
                            <td>{listValue.created_by}</td>
                        </tr>
                    );
                })}
            </div>
        </div>
    );
}

export default Dashboard;

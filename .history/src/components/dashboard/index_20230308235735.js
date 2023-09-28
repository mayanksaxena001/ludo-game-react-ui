// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import { getGameById, createGame } from '../../service/game.service';
import { getUser, updateUser } from '../../service/user.service';
import { getToken } from '../../service/storage.service';

function Dashboard(props) {
    // const { user } = props;
    const [gameData, setGameData] = useState({});
    const [fetchData, setFetch] = useState(true);
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    const joinGame = () => {
        console.log('join game..');
        navigate('/game', {
            gameData: gameData
        });
    }
    const handleCreateGame = () => {
        console.log('creating game..');
        createGame({}).then(data => {
            if (data) {
                setGameData(data);
                navigate('/game', {
                    gameData: gameData
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
                    setUser(data);
                    console.log(data.user);
                    setFetch(false);
                }
            }).catch(err => {
                setFetch(true);
                console.log(err);
                alert('Something went wrong,Please try again..');
            });
        }
    }, [user]);

    const UserProfile = () => {
        if (user) {
            return <div>
                {user.id}
            </div>
        }
    }

    return (
        <div className='dashboard'>
            <div className='profile-box'>
                <UserProfile />
            </div>
            <div className='home-box'>
                <div className="box active" onClick={() => joinGame()}>Join Game</div>
                <div className="box active" onClick={() => handleCreateGame()}>Create Game</div>
            </div>
        </div>
    );
}

export default Dashboard;

// import logo from './logo.svg';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import { getGameById, createGame } from '../../service/game.service'

function Dashboard(props) {
    const [game, setGame] = useState(null);
    let navigate = useNavigate();

    const joinGame = () => {
        console.log('join game..');
        navigate('/game', {
            game
        });
    }
    const createGame = () => {
        console.log('creating game..');
        createGame({}).then(data => {
            if (data) {
                setGame(data);
                navigate('/game', {
                    game
                });
            }
        });
    }

    useEffect(() => {
        //fetch game data 
    }, []);

    return (
        <div className='dashboard'>
            <div className='home-box'>
                <div className="box active" onClick={() => joinGame()}>Join Game</div>
                <div className="box active" onClick={() => createGame()}>Create Game</div>
            </div>
        </div>
    );
}

export default Dashboard;

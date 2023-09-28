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

        });
    }
    const createGame = () => {

    }

    useEffect(() => {
        //fetch game data 
        if(!game){
            
        }
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

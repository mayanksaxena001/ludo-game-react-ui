// import logo from './logo.svg';
import React from 'react';
// import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import './dashboard.css';


function Dashboard(props) {
    let navigate = useNavigate();

    const joinGame = () => {
        navigate('/game');
    }
    const createGame = () => {

    }

    return (
        <div className='dashboard'>
            {/* <Popup trigger={props.trigger}/> */}
            <div className='home-box'>
                <div className="box active" onClick={joinGame()}>Join Game</div>
                <div className="box active" onClick={createGame()}>Create Game</div>
            </div>
            <div className='home-box'>
                <div className="box active" onClick={joinGame()}>Leaderboard</div>
                <div className="box active" onClick={createGame()}>Points Tally</div>
            </div>
        </div>
    );
}

export default Dashboard;

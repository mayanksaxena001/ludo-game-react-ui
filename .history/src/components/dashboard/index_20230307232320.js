// import logo from './logo.svg';
import React, { useEffect } from 'react';
// import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import './dashboard.css';


function Dashboard(props) {
    let navigate = useNavigate();

    const joinGame = () => {
        console.log('join game..');
        navigate('/game');
    }
    const createGame = () => {

    }

    useEffect(()=>{},[]);

    return (
        <div className='dashboard'>
            {/* <Popup trigger={props.trigger}/> */}
            <div className='home-box'>
                <div className="box active" onClick={() => joinGame()}>Join Game</div>
                <div className="box active" onClick={() => createGame()}>Create Game</div>
            </div>
        </div>
    );
}

export default Dashboard;

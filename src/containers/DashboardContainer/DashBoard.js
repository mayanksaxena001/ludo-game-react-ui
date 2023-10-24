import { Button } from '@material-ui/core';
import React from 'react';
import Profile from '../../components/profile';
function NewDashBoard(props) {
    // const backgr oundImage = '/img/forest.jpg';
    const Heart = ({ size, color }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
            >
                <path
                    fill={color}
                    d="M12 21.35l-1.45-1.32C5.4 16.15 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.65-8.55 11.54L12 21.35z"
                />
            </svg>
        );
    };

    const Egg = ({ size, color }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 48 48"
            >
                <path
                    fill={color}
                    d="M24 2c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20S35.05 2 24 2zm0 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z"
                />
            </svg>
        );
    };

    const WhiteEgg = ({ size }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 48 48"
            >
                <circle cx="24" cy="24" r="22" fill="white" stroke="black" strokeWidth="2" />
            </svg>
        );
    };

    const WhiteOvalEgg = ({ width, height }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 60">
                <ellipse cx="24" cy="30" rx="22" ry="30" fill="white" stroke="black" strokeWidth="2" />
            </svg>
        );
    };

    const PinkSapphireDiamond = ({ size }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
                <polygon
                    points="50,5 95,50 50,95 5,50"
                    fill="pink"
                    stroke="darkred"
                    strokeWidth="2"
                />
            </svg>
        );
    };

    const Banana = ({ width, height, color }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 200">
                {/* Banana body */}
                <path
                    d="M50,10 C90,40 85,120 50,190 C15,120 10,40 50,10"
                    fill={color}
                    stroke="black"
                    strokeWidth="2"
                />
                {/* Stem */}
                <line x1="50" y1="10" x2="50" y2="30" stroke="green" strokeWidth="3" />
            </svg>
        );
    };

    const MessageBubble = ({ width, height }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100">
                {/* Message bubble body */}
                <path
                    d="M20,20 Q20,10 30,10 H70 Q80,10 80,20 V60 Q80,70 70,70 H40 L20,90 V20"
                    fill="lightblue"
                    stroke="blue"
                    strokeWidth="2"
                />
            </svg>
        );
    };


    const InboxMessage = ({ width, height }) => {
        return (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" >
                <style type="text/css">
                </style>
                <rect x="5" y="5" class="st0" width="300" height="180" />
                <polyline class="st0" points="5,5 155,110 305,5 " />
            </svg>
        );
    };

    const OldEnvelopeEmailIcon = ({ size, color }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
                {/* Envelope */}
                <path
                    d="M90,15H10A10,10,0,0,0,0,25V75a10,10,0,0,0,10,10h80a10,10,0,0,0,10-10V25A10,10,0,0,0,90,15Z"
                    fill="white"
                    stroke="gray"
                    strokeWidth="2"
                />

                {/* Letter */}
                <path
                    d="M75,30L50,50L25,30H75Z"
                    fill={color}
                />

                {/* Lines on the letter */}
                <line x1="25" y1="45" x2="50" y2="50" stroke="gray" strokeWidth="2" />
                <line x1="50" y1="50" x2="75" y2="45" stroke="gray" strokeWidth="2" />
            </svg>
        );
    };

    const BorderOnlyMessageIcon = ({ size, color }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
                {/* Envelope */}
                <path
                    d="M90,15H10A10,10,0,0,0,0,25V75a10,10,0,0,0,10,10h80a10,10,0,0,0,10-10V25A10,10,0,0,0,90,15Z"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                />

                {/* Letter */}
                <path
                    d="M75,30L50,50L25,30H75Z"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                />

                {/* Lines on the letter */}
                <line x1="25" y1="45" x2="50" y2="50" stroke={color} strokeWidth="2" />
                <line x1="50" y1="50" x2="75" y2="45" stroke={color} strokeWidth="2" />
            </svg>
        );
    };

    const GameSettingsIcon = ({ size, color }) => {
        return (
            <Button type="submit" color="primary" sx={ { borderRadius: 28 } }>
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
                    {/* Gear shape */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="6" />
                    <line x1="50" y1="10" x2="50" y2="30" stroke={color} strokeWidth="6" />
                    <line x1="50" y1="70" x2="50" y2="90" stroke={color} strokeWidth="6" />
                    <line x1="18" y1="32" x2="32" y2="18" stroke={color} strokeWidth="6" />
                    <line x1="68" y1="68" x2="82" y2="82" stroke={color} strokeWidth="6" />
                </svg>
                </Button>
        );
    };
    const games = props.games;
    const user = props.user;
    const content = <div className='dashboard'>
        <div>
            <Profile user={user} />
            <Heart size={50} color="red" />
            <Egg size={80} color="lightblue" />
            <WhiteEgg size={80} />
            <WhiteOvalEgg width={80} height={120} />
            <PinkSapphireDiamond size={80} />
            <Banana width={100} height={200} color="yellow" />
        </div>
        {/* {games.map((g,i)=>{return <>
        <div key={i}>
            {g.id}
        </div>
        </>})} */}
        <div className='home-box'>
            <MessageBubble width={150} height={100} />
            <InboxMessage width={150} height={100} />
            <OldEnvelopeEmailIcon size={100} color="blue" />
            <BorderOnlyMessageIcon size={100} color="blue" />
            <GameSettingsIcon size={100} color="gray" />
        </div>
    </div>

    return content;
}

export default NewDashBoard;


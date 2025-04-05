import React, { useEffect } from 'react';
import Canvas from '../../containers/canvas';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, tokenData, handleTokenMove, isEnabled } = props;
    useEffect(() => {
        console.log('token use effect');
    });
    const entranceThemeSound = "/audio/bomb.mp3";
    let audio = new Audio(entranceThemeSound);
    let enabled = tokenData.active && isEnabled;
    let color = tokenData.color ? tokenData.color : 'white';
    if (enabled) {
        color = 'orange';
    }
    let clicked =false;
    const getClassName = () => {
        if(clicked) return "token token.clicked";
        if (enabled) return "token circle";
        return `token token.${color}`;
    }
    const onClick=()=>{
        clicked=true;
        // audio.play();
        //set style
        handleTokenMove(tokenData);
    }
    return (
        <div disabled={!enabled} style={{ backgroundColor: 'white' }} className={getClassName()} onClick={() => onClick()} >
            <div style={{ backgroundColor: color }} className="head"></div>
            <div style={{ backgroundColor: color }} className="body"></div>
            <div style={{ backgroundColor: color }} className="arm arm-left"></div>
            <div style={{ backgroundColor: color }} className="arm arm-right"></div>
            <div style={{ backgroundColor: color }} className="leg leg-left"></div>
            <div style={{ backgroundColor: color }} className="leg leg-right"></div>
        </div>
    );

    // return (
    //     <Canvas />
    //   ); 
    // return (
    //     <div className={handleClassName()} onClick={handleTokenMove} 
    //     style={{ backgroundColor: color, height: height, width: width }}>
    //         {/* {id}:{value} */}
    //     </div>
    // )
}

export default Token;

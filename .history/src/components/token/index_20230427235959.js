import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, tokenData, handleTokenMove, isEnabled } = props;
    useEffect(() => {
        console.log('token use effect');
    });
    let color = tokenData.color ? tokenData.color : '';
    const getClassName = () => {
        if (tokenData.active && isEnabled) return "token circle";
        return `token ${color}`;
    }
    return (
        <div className={getClassName()} style={{ backgroundColor: color }} onClick={() => handleTokenMove(tokenData)} >
            <div  style={{ backgroundColor: color }} className="head"></div>
            <div className="body"></div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right"></div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
        </div>
    );

    // return (
    //     <div className={handleClassName()} onClick={handleTokenMove} 
    //     style={{ backgroundColor: color, height: height, width: width }}>
    //         {/* {id}:{value} */}
    //     </div>
    // )
}

export default Token;

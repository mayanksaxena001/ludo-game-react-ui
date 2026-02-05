import React, { useEffect,useState } from 'react';
import Canvas from '../../containers/canvas';
import './token.css';
import { CSSTransition } from 'react-transition-group';
//TODO
function Token(props) {
    const { id, value, height, width, tokenData, handleTokenMove, isEnabled ,move_token} = props;
    const [jumpKey, setJumpKey] = useState(0);
    useEffect(() => {
        console.log('token use effect');
    });
    const entranceThemeSound = "/audio/click.mp3";
    let audio = new Audio(entranceThemeSound);
    let enabled = tokenData.active && isEnabled;
    let color = tokenData.color ? tokenData.color : 'white';
    if (enabled) {
        color = 'orange';
    }
    let clicked =false;
    const getClassName = () => {
        if(clicked) return "token token.clicked";
        if (enabled) return "token circle jumping";
        return `token token.${color}`;
    }
    const onClick=()=>{
        clicked=true;
        audio.play();
        //set style
        handleTokenMove(tokenData);
    }


  const triggerJump = () => {
    setJumpKey((prev) => prev + 1); // force remount of transition
  };

    const tokenImg = () => {
        return <>
            <svg width="100%" height="100%" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="6">
                <circle fill={color} cx="50" cy="20" r="15" />

                <path fill={color} d="M35 35 C25 70, 25 100, 50 105 C75 100, 75 70, 65 35 Z" />

                <ellipse fill={color} cx="50" cy="105" rx="25" ry="5" />
            </svg>

     </>
    }
    return (
    //     <CSSTransition
    //     key={jumpKey}
    //     in={true}
    //     appear={true}
    //     timeout={500}
    //     classNames="jump"
    //   >
    //         </CSSTransition>
        <div disabled={!enabled} style={{ backgroundColor: color }} className={getClassName()} onClick={() => onClick()} >
             {tokenImg()}
            </div>
        // <div disabled={!enabled} style={{ backgroundColor: 'white' }} className={getClassName()} onClick={() => onClick()} >
        //     <div style={{ backgroundColor: color }} className="head"></div>
        //     <div style={{ backgroundColor: color }} className="body"></div>
        //     <div style={{ backgroundColor: color }} className="arm arm-left"></div>
        //     <div style={{ backgroundColor: color }} className="arm arm-right"></div>
        //     <div style={{ backgroundColor: color }} className="leg leg-left"></div>
        //     <div style={{ backgroundColor: color }} className="leg leg-right"></div>
        // </div>
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

// import logo from './logo.svg';
import React, { useEffect } from 'react';
import Box from '../box';
import './verticalpath.css';

function VerticalPath(props) {
    const { id, height, width, color, data } = props;
    let className = '';
    let COLORED_BOXES_ID = [8, 9, 10, 11, 12, 17];
    const map = new Map();
    let allTokens = {};
    for (let key in data.players) {
        let player = data.players[key];
        if (player && player.house) {
            data.players[key].house.tokens.map(token => {
                if (token && token.position) {
                    if (allTokens[token.position]) {
                        allTokens[token.position].push(token);
                    } else {
                        allTokens[token.position] = [];
                        allTokens[token.position].push(token);

                    }
                }
            });
        }
    }
    console.log('allTokens', allTokens);
    for (let i = 1; i <= 18; i++) {
        const boxId = id + '-' + i;
        let tokens = allTokens[boxId] ? allTokens[boxId] : [];
        const box = <Box tokens={tokens} id={boxId} height={height} width={width} />;
        map.set(i, box)
    }
    if (id === '1') {
        className = 'vertical-path-1';
    }
    else if (id === '3') {
        className = 'vertical-path-2';
    }
    COLORED_BOXES_ID.map(boxId => {
        const box = <Box id={id + '-' + boxId} color={color} height={height} width={width} />;
        map.set(boxId, box);
    });
    const boxes = Array.from(map.values());

    const pathBoxes = () => {
        if (id === '1') {
            const VPath1 = <div className='vpath'>
                {boxes[0]}
                {boxes[1]}
                {boxes[2]}
                {boxes[3]}
                {boxes[4]}
                {boxes[5]}
            </div>
            const VPath2 = <div className='vpath'>
                {boxes[11]}
                {boxes[10]}
                {boxes[9]}
                {boxes[8]}
                {boxes[7]}
                {boxes[6]}
            </div>
            const VPath3 = <div className='vpath'>
                {boxes[12]}
                {boxes[13]}
                {boxes[14]}
                {boxes[15]}
                {boxes[16]}
                {boxes[17]}
            </div>
            return <>
                {VPath3}
                {VPath2}
                {VPath1}
            </>
        }
        else if (id === '3') {
            const VPath1 = <div className='vpath'>
                {boxes[5]}
                {boxes[4]}
                {boxes[3]}
                {boxes[2]}
                {boxes[1]}
                {boxes[0]}
            </div>
            const VPath2 = <div className='vpath'>
                {boxes[6]}
                {boxes[7]}
                {boxes[8]}
                {boxes[9]}
                {boxes[10]}
                {boxes[11]}
            </div>
            const VPath3 = <div className='vpath'>
                {boxes[17]}
                {boxes[16]}
                {boxes[15]}
                {boxes[14]}
                {boxes[13]}
                {boxes[12]}
            </div>
            return <>
                {VPath1}
                {VPath2}
                {VPath3}
            </>
        }
    }

    useEffect(() => {
        console.log('Inside vt use effect');
    });
    return (
        <div className={className} >
            {pathBoxes()}
        </div>
    );
}

export default VerticalPath;

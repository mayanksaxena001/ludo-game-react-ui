// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './horizontalpath.css';
import Box from '../box';

function HorizontalPath(props) {
    const { id, height, width, color, data } = props;
    let className = '';
    let COLORED_BOXES_ID = [8, 9, 10, 11, 12, 17];
    const map = new Map();
    for (let i = 1; i <= 18; i++) {
        map.set(i, <Box id={id+'-'+i} value={i} minheight={height} minWidth={width} />)
    }
    if (id === '4') {
        className = 'horizontal-path-1';
    }
    else if (id === '2') {
        className = 'horizontal-path-2';
    }
    COLORED_BOXES_ID.map(boxId => {
        // if(boxId ===)
        map.set(boxId, <Box id={id+'-'+boxId} color={color} minheight={height} minWidth={width} />);
    });
    const boxes = Array.from(map.values());
    
    const pathBoxes = () => {
        if (id === '2') {
            const HPath1 = <div className='hpath'>
                {boxes[5]}
                {boxes[4]}
                {boxes[3]}
                {boxes[2]}
                {boxes[1]}
                {boxes[0]}
            </div>
            const HPath2 = <div className='hpath'>
                {boxes[6]}
                {boxes[7]}
                {boxes[8]}
                {boxes[9]}
                {boxes[10]}
                {boxes[11]}
            </div>
            const HPath3 = <div className='hpath'>
                {boxes[17]}
                {boxes[16]}
                {boxes[15]}
                {boxes[14]}
                {boxes[13]}
                {boxes[12]}
            </div>
            return <>
                {HPath3}
                {HPath2}
                {HPath1}
            </>
        }
        else if (id === '4') {
            const HPath1 = <div className='hpath'>
                {boxes[0]}
                {boxes[1]}
                {boxes[2]}
                {boxes[3]}
                {boxes[4]}
                {boxes[5]}
            </div>
            const HPath2 = <div className='hpath'>
                {boxes[11]}
                {boxes[10]}
                {boxes[9]}
                {boxes[8]}
                {boxes[7]}
                {boxes[6]}
            </div>
            const HPath3 = <div className='hpath'>
                {boxes[12]}
                {boxes[13]}
                {boxes[14]}
                {boxes[15]}
                {boxes[16]}
                {boxes[17]}
            </div>
            return <>
                {HPath1}
                {HPath2}
                {HPath3}
            </>
        }
    }

    useEffect(() => {
        console.log('Inside hz use effect');
    });
    return (
        <div className={className} >
            {pathBoxes()}
        </div>
    );
}

export default HorizontalPath;

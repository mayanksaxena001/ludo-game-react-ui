// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './horizontalpath.css';
import PathBox from '../box';

function HorizontalPath(props) {
    const { id, height, width, color, data } = props;
    let className = '';
    let COLORED_BOXES_ID = [];
    const map = new Map();
    for (let i = 1; i <= 18; i++) {
        map.set(i, <PathBox id={i} value={id} minheight={height} minWidth={width} />)
    }
    if (id === '4') {
        COLORED_BOXES_ID = [5, 7, 8, 9, 10, 11, 16];
        className = 'horizontal-path-1';
    }
    else if (id === '2') {
        COLORED_BOXES_ID = [3, 8, 9, 10, 11, 12, 14];
        className = 'horizontal-path-2';
    }
    COLORED_BOXES_ID.map(boxId => {
        // if(boxId ===)
        map.set(boxId, <PathBox id={id} color={color} value={boxId} minheight={height} minWidth={width} />);
    });
    const boxes = Array.from(map.values());
    const HPath1 = <div className='hpath'>
        {boxes[0]}
        {boxes[1]}
        {boxes[2]}
        {boxes[3]}
        {boxes[4]}
        {boxes[5]}
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
        {boxes[12]}
        {boxes[13]}
        {boxes[14]}
        {boxes[15]}
        {boxes[16]}
        {boxes[17]}
    </div>
    useEffect(() => {
        console.log('Inside hz use effect');
    });
    return (
        <div className={className} >
            {HPath3}
            {HPath2}
            {HPath1}
        </div>
    );
}

export default HorizontalPath;

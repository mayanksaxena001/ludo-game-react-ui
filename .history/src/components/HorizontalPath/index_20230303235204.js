// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {
    const { id, height, width, color, data } = props;
    let className = '';
    let COLORED_BOXES_ID = [];
    const map = new Map();
    for (let i = 0; i <= 18; i++) {
        map.set(i, <PathBox id={i} value={id} minheight={height} minWidth={width} />)
    }
    if (id === '4') {
        COLORED_BOXES_ID = ['5', '7', '8', '9', '10', '11'];
        className = 'horizontal-path-1';
    }
    else if (id === '2') {
        COLORED_BOXES_ID = ['8', '9', '10', '11', '12', '14'];
        className = 'horizontal-path-2';
    }
    COLORED_BOXES_ID.map(boxId => {
        map.set(boxId, <PathBox id={boxId} color={color} value={id} minheight={height} minWidth={width} />);
    });
    const boxes = Array.from(map.values());
    const HPath1 = <div className='hpath'>
        {boxes[1]}
        {boxes[2]}
        {boxes[3]}
        {boxes[4]}
        {boxes[5]}
        {boxes[6]}
    </div>
    const HPath2 = <div className='hpath'>
        {boxes[7]}
        {boxes[8]}
        {boxes[9]}
        {boxes[10]}
        {boxes[11]}
        {boxes[12]}
    </div>
    const HPath3 = <div className='hpath'>
        {boxes[13]}
        {boxes[14]}
        {boxes[15]}
        {boxes[16]}
        {boxes[17]}
        {boxes[18]}
    </div>

    return (
        <div className={className} >
            {HPath3}
            {HPath2}
            {HPath1}
        </div>
    );
}

export default HorizontalPath;
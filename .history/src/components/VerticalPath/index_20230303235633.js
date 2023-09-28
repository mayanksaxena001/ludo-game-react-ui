// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {
    const { id, height, width, color, data } = props;
    let className = '';
    let COLORED_BOXES_ID = [];
    const map = new Map();
    for (let i = 1; i <= 18; i++) {
        map.set(i, <PathBox id={i} value={id} minheight={height} minWidth={width} />)
    }
    if (id === '1') {
        COLORED_BOXES_ID = [7, 8, 9, 10, 11, 17];
        className = 'vertical-path-1';
    }
    else if (id === '3') {
        COLORED_BOXES_ID = [2, 8, 9, 10, 11, 12];
        className = 'vertical-path-2';
    }
    COLORED_BOXES_ID.map(boxId => {
        map.set(boxId, <PathBox id={boxId} color={color} value={id} minheight={height} minWidth={width} />);
    });
    const boxes = Array.from(map.values());

    const VPath1 = <div className='vpath'>
        {boxes[1]}
        {boxes[2]}
        {boxes[3]}
        {boxes[4]}
        {boxes[5]}
        {boxes[6]}
    </div>
    const VPath2 = <div className='vpath'>
        {map.get(7)}
        {boxes[8]}
        {boxes[9]}
        {boxes[10]}
        {boxes[11]}
        {boxes[12]}
    </div>
    const VPath3 = <div className='vpath'>
        {boxes[13]}
        {boxes[14]}
        {boxes[15]}
        {boxes[16]}
        {boxes[17]}
        {boxes[18]}
    </div>


    return (
        <div className={className} >
            {VPath3}
            {VPath2}
            {VPath1}
        </div>
    );
}

export default VerticalPath;

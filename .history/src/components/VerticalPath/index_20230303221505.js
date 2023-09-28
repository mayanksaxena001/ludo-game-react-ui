// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {
    const { id, height, width, color, data } = props;
    const VPath1 = <div className='vpath'>
        <PathBox id='1' value={id} minheight={height} minWidth={width} />
        <PathBox id='2' value={id} minheight={height} minWidth={width} />
        <PathBox id='3' value={id} minheight={height} minWidth={width} />
        <PathBox id='4' value={id} minheight={height} minWidth={width} />
        <PathBox id='5' value={id} minheight={height} minWidth={width} />
        <PathBox id='6' value={id} minheight={height} minWidth={width} />
    </div>
    const VPath2 = <div className='vpath'>
        <PathBox id='7' value={id} minheight={height} minWidth={width} />
        <PathBox id='8' value={id} minheight={height} minWidth={width} />
        <PathBox id='9' value={id} minheight={height} minWidth={width} />
        <PathBox id='10' value={id} minheight={height} minWidth={width} />
        <PathBox id='11' value={id} minheight={height} minWidth={width} />
        <PathBox id='12' value={id} minheight={height} minWidth={width} />
    </div>
    const VPath3 = <div className='vpath'>
        <PathBox id='13' value={id} minheight={height} minWidth={width} />
        <PathBox id='14' value={id} minheight={height} minWidth={width} />
        <PathBox id='15' value={id} minheight={height} minWidth={width} />
        <PathBox id='16' value={id} minheight={height} minWidth={width} />
        <PathBox id='17' value={id} minheight={height} minWidth={width} />
        <PathBox id='18' value={id} minheight={height} minWidth={width} />
    </div>

    let className = '';
    let COLORED_BOXES_ID=[];
    if (id === '1') {
        COLORED_BOXES_ID=['7','8','9','10','11','17'];
        className = 'vertical-path-1';
    }
    else if (id === '3') {
        className = 'vertical-path-2';
    }
    return (
        <div className={className} >
            {VPath3}
            {VPath2}
            {VPath1}
        </div>
    );
}

export default VerticalPath;

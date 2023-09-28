// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {
    const { id, height, width, color } = props;
    const VPath1 = <div className='vpath'>
        <PathBox id='1' value={id} minheight={height} minWidth={width} />
        <PathBox id='2' color={color} value={id} minheight={height} minWidth={width} />
        <PathBox id='3' value={id} minheight={height} minWidth={width} />
        <PathBox id='4' value={id} minheight={height} minWidth={width} />
        <PathBox id='5' value={id} minheight={height} minWidth={width} />
        <PathBox id='6' value={id} minheight={height} minWidth={width} />
    </div>
    const VPath2 = <div className='vpath'>
        <PathBox id='7' value={id} minheight={height} minWidth={width} />
        <PathBox id='8' color={color} value={id} minheight={height} minWidth={width} />
        <PathBox id='9' color={color} value={id} minheight={height} minWidth={width} />
        <PathBox id='10' color={color} value={id} minheight={height} minWidth={width} />
        <PathBox id='11' color={color} value={id} minheight={height} minWidth={width} />
        <PathBox id='12' color={color} value={id} minheight={height} minWidth={width} />
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
    if (id === '1') {
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

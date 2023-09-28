// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {
    const { id, height, width, color } = props;
    const VPath1 = <div className='vpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width} />
        <PathBox id='2' value='2' minheight={height} minWidth={width} />
        <PathBox id='3' value='3' minheight={height} minWidth={width} />
        <PathBox id='4' value='4' minheight={height} minWidth={width} />
        <PathBox id='5' value='5' minheight={height} minWidth={width} />
        <PathBox id='6' value='6' minheight={height} minWidth={width} />
    </div>
    const VPath2 = <div className='vpath'>
        <PathBox id='7' value='1' minheight={height} minWidth={width} />
        <PathBox id='8' value='1' minheight={height} minWidth={width} />
        <PathBox id='9' value='1' minheight={height} minWidth={width} />
        <PathBox id='10' value='1' minheight={height} minWidth={width} />
        <PathBox id='11' value='1' minheight={height} minWidth={width} />
        <PathBox id='12' value='1' minheight={height} minWidth={width} />
    </div>
    const VPath3 = <div className='vpath'>
        <PathBox id='13' value='1' minheight={height} minWidth={width} />
        <PathBox id='14' value='1' minheight={height} minWidth={width} />
        <PathBox id='15' value='1' minheight={height} minWidth={width} />
        <PathBox id='16' value='1' minheight={height} minWidth={width} />
        <PathBox id='17' value='1' minheight={height} minWidth={width} />
        <PathBox id='18' value='1' minheight={height} minWidth={width} />
    </div>

    let className = '';
    if (id === '1') {
        className = 'vertical-path-1';
    }
    else if (id === '2') {
        className = 'vertical-path-2';
    }
    return (
        <div className={className} >
            {VPath1}
            {VPath2}
            {VPath3}
        </div>
    );
}

export default VerticalPath;

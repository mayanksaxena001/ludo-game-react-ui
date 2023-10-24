// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {
    const { id, height, width, color } = props;
    const HPath1 = <div className='hpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width} />
        <PathBox id='2' value='1' minheight={height} minWidth={width} />
        <PathBox id='3' value='1' minheight={height} minWidth={width} />
        <PathBox id='4' value='1' minheight={height} minWidth={width} />
        <PathBox id='5' value='1' minheight={height} minWidth={width} />
        <PathBox id='6' value='1' minheight={height} minWidth={width} />
    </div>
    const HPath2 = <div className='hpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width} />
        <PathBox id='2' value='1' minheight={height} minWidth={width} />
        <PathBox id='3' value='1' minheight={height} minWidth={width} />
        <PathBox id='4' value='1' minheight={height} minWidth={width} />
        <PathBox id='5' value='1' minheight={height} minWidth={width} />
        <PathBox id='6' value='1' minheight={height} minWidth={width} />
    </div>
    const HPath3 = <div className='hpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width} />
        <PathBox id='2' value='1' minheight={height} minWidth={width} />
        <PathBox id='3' value='1' minheight={height} minWidth={width} />
        <PathBox id='4' value='1' minheight={height} minWidth={width} />
        <PathBox id='5' value='1' minheight={height} minWidth={width} />
        <PathBox id='6' value='1' minheight={height} minWidth={width} />
    </div>
    let className = '';
    if (id === '1') {
        className = 'horizontal-path-1';
    }
    else if (id === '2') {
        className = 'horizontal-path-2';
    }
    return (
        <div className={className} >
            {HPath1}
            {HPath2}
            {HPath3}
        </div>
    );
}

export default HorizontalPath;
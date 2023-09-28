// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {
    const { id, height, width, color } = props;
    const HPath1 = <div className='hpath'>
        <PathBox id='1' value={id} minheight={height} minWidth={width} />
        <PathBox id='2' value={id} minheight={height} minWidth={width} />
        <PathBox id='3' value={id} minheight={height} minWidth={width} />
        <PathBox id='4' value={id} minheight={height} minWidth={width} />
        <PathBox id='5' value={id} minheight={height} minWidth={width} />
        <PathBox id='6' value={id} minheight={height} minWidth={width} />
    </div>
    const HPath2 = <div className='hpath'>
        <PathBox id='7' value={id} minheight={height} minWidth={width} />
        <PathBox id='8' value={id} minheight={height} minWidth={width} />
        <PathBox id='9' value={id} minheight={height} minWidth={width} />
        <PathBox id='10' value={id} minheight={height} minWidth={width} />
        <PathBox id='11' value={id} minheight={height} minWidth={width} />
        <PathBox id='12' value={id} minheight={height} minWidth={width} />
    </div>
    const HPath3 = <div className='hpath'>
        <PathBox id='13' value={id} minheight={height} minWidth={width} />
        <PathBox id='14' value={id} minheight={height} minWidth={width} />
        <PathBox id='15' value={id} minheight={height} minWidth={width} />
        <PathBox id='16' value={id} minheight={height} minWidth={width} />
        <PathBox id='17' value={id} minheight={height} minWidth={width} />
        <PathBox id='18' value={id} minheight={height} minWidth={width} />
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

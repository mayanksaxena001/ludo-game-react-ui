// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {
    const { id,height,width } = props;
    const HPath = <div className='hpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width}/>
        <PathBox id='2' value='1' minheight={height} minWidth={width}/>
        <PathBox id='3' value='1' minheight={height} minWidth={width}/>
        <PathBox id='4' value='1' minheight={height} minWidth={width}/>
        <PathBox id='5' value='1' minheight={height} minWidth={width}/>
        <PathBox id='6' value='1' minheight={height} minWidth={width}/>
    </div>
    let color = '';
    let className = '';
    if (id === '1') {
        className = 'horizontal-path-1';
        color = 'Red';
    }
    else if (id === '2') {
        className = 'horizontal-path-2';
        color = 'green';
    } 
    return (
        <div className={className} style={{ backgroundColor: color }}>
            {HPath}
            {HPath}
            {HPath}
        </div>
    );
}

export default HorizontalPath;

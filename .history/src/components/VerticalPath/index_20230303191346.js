// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {
    const { id ,height,width,color} = props;
    const VPath = <div className='vpath'>
        <PathBox id='1' value='1' minheight={height} minWidth={width} />
        <PathBox id='2' value='1' minheight={height} minWidth={width} />
        <PathBox id='3' value='1' minheight={height} minWidth={width} />
        <PathBox id='4' value='1' minheight={height} minWidth={width} />
        <PathBox id='5' value='1' minheight={height} minWidth={width} />
        <PathBox id='6' value='1' minheight={height} minWidth={width} />
    </div>

    let className = '';
    if (id === '1') {
        className = 'vertical-path-1';
    }
    else if (id === '2') {
        className = 'vertical-path-2';
    }
    return (
        <div className={className} style={{ backgroundColor: color }}>
            {VPath}
            {VPath}
            {VPath}
        </div>
    );
}

export default VerticalPath;

// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {

    const VPath = <div className='vpath'>
        <PathBox id='1'/>
        <PathBox id='2'/>
        <PathBox id='3'/>
        <PathBox id='4'/>
        <PathBox id='5'/>
        <PathBox id='6'/>
    </div>

    const { id } = props;
    let color = '';
    let className = '';
    if (id === '1') {
        className = 'vertical-path-1';
        color = 'yellow';
    }
    else if (id === '2') {
        className = 'vertical-path-2';
        color = 'blue';
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

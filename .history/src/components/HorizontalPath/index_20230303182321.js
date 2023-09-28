// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {

    const HPath = <div className='hpath'>
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

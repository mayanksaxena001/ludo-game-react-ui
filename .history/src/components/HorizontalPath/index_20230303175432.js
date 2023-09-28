// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';
import PathBox from '../PathBox';

function HorizontalPath(props) {

    const EmptyBoxes = <PathBox />;
    const HPath = <div className='hpath'>
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
    </div>

const houseHeight = '';
    return (
        <div className='horizontal-path-1' style={{ width: houseHeight, height: houseHeight, padding: houseHeight * 0.2 }}>
            {HPath}
            {HPath}
            {HPath}
        </div>
    );
}

export default HorizontalPath;

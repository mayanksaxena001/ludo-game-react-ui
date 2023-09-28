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
const className = 'horizontal-path-1';
    return (
        <div className={className} style={{ width: houseHeight, height: houseHeight, padding: houseHeight * 0.2 }}>
            {HPath}
            {HPath}
            {HPath}
        </div>
    );
}

export default HorizontalPath;

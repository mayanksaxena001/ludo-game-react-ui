// import logo from './logo.svg';
import React from 'react';
import './horizontalpath.css';


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

    return (
        <div className='horizontal-path-1'>
            {HPath}
            {HPath}
            {HPath}
        </div>
    );
}

export default HorizontalPath;

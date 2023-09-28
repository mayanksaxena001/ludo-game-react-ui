// import logo from './logo.svg';
import React from 'react';
import PathBox from '../PathBox';
import './verticalpath.css';

function VerticalPath(props) {

    const EmptyBoxes = <PathBox />;
    const VPath = <div className='vpath'>
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
        {EmptyBoxes}
    </div>

    return (
        <div className='vertical-path-1'>
        {VPath}
        {VPath}
        {VPath}
        </div>
    );
}

export default VerticalPath;

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

    const { id } = props;
    let color = '';
    let className = '';
    if (id === '1') {
        className = 'vertical-path-1';
        color = 'Red';
    }
    else if (id === '2') {
        className = 'vertical-path-2';
        color = 'green';
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

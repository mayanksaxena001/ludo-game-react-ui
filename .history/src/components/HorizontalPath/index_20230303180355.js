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
    const { id} = props;
    const className = '';
    if(id===1)
    return (
        <div className={className} style={{ backgroundColor:color}}>
            {HPath}
            {HPath}
            {HPath}
        </div>
    );
}

export default HorizontalPath;

// import logo from './logo.svg';
import React from 'react';
import './pathbox.css';


function PathBox(props) {

    const { id, value, minHeight, minWidth,color } = props;
    return (
        <div className='path-box' style={{ backgroundColor:color,minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
             {id} : {value}
        </div>
    );
}

export default PathBox;

// import logo from './logo.svg';
import React from 'react';
import './pathbox.css';


function PathBox(props) {

    const { id, value, minHeight, minWidth } = props;
    return (
        <div className='path-box' style={{ minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
            {id} :   {value}
        </div>
    );
}

export default PathBox;

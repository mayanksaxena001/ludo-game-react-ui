// import logo from './logo.svg';
import React from 'react';
import './pathbox.css';


function PathBox(props) {

    const { id, minHeight, minWidth } = props;
    return (
        <div className='path-box ' style={{ minHeight: minHeight, minWidth: minWidth }}>
            {id}
        </div>
    );
}

export default PathBox;

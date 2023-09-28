// import logo from './logo.svg';
import React from 'react';
import './pathbox.css';


function Box(props) {

    const { id, value, minHeight, minWidth, color, disabled,token } = props;
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
            {/* {id} : {value} */}
        </div>
    );
}

export default Box;

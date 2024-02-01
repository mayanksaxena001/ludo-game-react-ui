// import logo from './logo.svg';
import React from 'react';

function Bot(props) {

    const { id } = props;
    return (
        <div id={id} disabled={disabled} className={getClassname()} style={{ backgroundColor: color, height: height, width: width }}>
            {content()}
        </div>
    );
}

export default Box;

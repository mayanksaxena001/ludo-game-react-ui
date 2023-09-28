// import logo from './logo.svg';
import React from 'react';
import './pathbox.css';


function PathBox(props) {

    const { id } = props;
    return (
        <div className='path-box '>
            {id}
        </div>
    );
}

export default PathBox;

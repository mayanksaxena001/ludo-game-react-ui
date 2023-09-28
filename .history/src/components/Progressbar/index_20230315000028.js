import React from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div className='progressbar' >
        <div style={fillerStyles}>
          <span className='labelStyles'>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  
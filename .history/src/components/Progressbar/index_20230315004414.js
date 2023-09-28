import React, { useEffect } from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor } = props;
    const [value, setValue] = useState(0);
    const fillerStyles = {
      height: '100%',
      width: `${value}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    useEffect(()=>{
        setTimeout(() => {
            value++;
          }, 10);
    },[]);
    return (
      <div className='progressbar' >
        <div style={fillerStyles}>
          <span className='labelStyles'>{`${value}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  
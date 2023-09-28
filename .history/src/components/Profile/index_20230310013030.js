// import logo from './logo.svg';
import React from 'react';
import './index.css';

function Profile(props) {
    const Avatar = (props) => {
        return (
            <img
                className="avatar"
                src={props.value}
                alt={props.id}
                width={props.size}
                height={props.size}
            />
        )
    }
    
    return (
        <div className='profile'>
            <Avatar
                {...props} />
        </div>
    );
}

export default Profile;

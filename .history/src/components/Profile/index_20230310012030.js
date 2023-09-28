// import logo from './logo.svg';
import React from 'react';
import './index.css';

function Profile() {
    const Avatar = (props) => {
        return (
            <img
                className="avatar"
                src={props.src}
                alt={props.person.name}
                width={props.size}
                height={props.size}
            />
        )
    }

    return (
        <div className='profile'>
            <Avatar
                {...this.props} />
        </div>
    );
}

export default Profile;

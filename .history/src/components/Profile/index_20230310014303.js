// import logo from './logo.svg';
import React from 'react';
import './index.css';

function Profile(props) {
    const Avatar = (props) => {
        return (<div>
            <UserProfile />
            <img
                className="avatar"
                src={props.imgSrc}
                alt={props.value}
                width={props.imgSize}
                height={props.imgSize}
            />
        </div>
        )
    }
    const UserProfile = (props) => {
        if (props.user) {
            return <form className='profile'>
                <div>
                    Id : {props.user.id}
                </div>
                <div>
                    Name : {props.user.name}
                </div>
                <div>
                    Username : {props.user.username}
                </div>
                <div>
                    Email : {props.user.email}
                </div>
            </form>
        }
    }
    return (
        <div className='profile'>
            <Avatar
                {...props} />
        </div>
    );
}

export default Profile;

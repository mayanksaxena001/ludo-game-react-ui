// import logo from './logo.svg';
import React from 'react';
import './index.css';

function Profile() {
    Avatar = (props) => {
        return (
            <img
                className="avatar"
                src={getImageUrl(props.person)}
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

// import logo from './logo.svg';
import React from 'react';
import './index.css';

class Profile extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }
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
    render(props) {
        return (
            <div className='profile'>
                <this.Avatar
                    {...props} />
            </div>
        );
    }
}

export default Profile;

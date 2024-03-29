// import logo from './logo.svg';
import { Avatar } from '@material-ui/core';
import React from 'react';
import './index.css';

function Profile(props) {
    // const { user } = props;
    // const Avatar = (props) => {
    //     return (<div>
    //         {/* <UserProfile {...props}/> */}
    //         <img
    //             className="avatar"
    //             src={props.imgSrc}
    //             alt={props.value}
    //             width={props.imgSize}
    //             height={props.imgSize}
    //         />
    //     </div>
    //     )
    // }
    const UserProfile = (props) => {
        if (props.user) {
            return <form >
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
    {/* <Person /> */}
    {/* <UserProfile
        {...props} /> */}
    return (
        <div className='profile'>
            <Avatar style={{height:'100px',width:'100px'}}>{props.user.username}</Avatar>
        </div>
    );
}

export default Profile;

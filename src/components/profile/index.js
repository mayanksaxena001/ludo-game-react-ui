// import logo from './logo.svg';
import { Avatar, Button } from '@material-ui/core';
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
            <Avatar style={{height:'69px',width:'31%',backgroundColor:'#c1c603'}}></Avatar>
            {/* <Button  size="small" type="submit" onClick={() => {}}>
                <img style={{width:'25%',backgroundColor:'#c1c603'}} src='/img/person.svg' alt="logo" />
            </Button> */}
            <div>{props.user.name}</div>
        </div>
    );
}

export default Profile;

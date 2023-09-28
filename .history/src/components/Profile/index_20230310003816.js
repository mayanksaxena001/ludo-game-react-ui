// import logo from './logo.svg';
import React from 'react';
import './index.css';

class Profile extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }
    Avatar = ({ person, size }) => {
        return (
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        )
    }
    render(props) {
        return (
            <div className='profile'>
                <this.Avatar
                    person={{ name: props.name, Id: props.id }}
                    size={100} />
            </div>
        );
    }
}

export default App;

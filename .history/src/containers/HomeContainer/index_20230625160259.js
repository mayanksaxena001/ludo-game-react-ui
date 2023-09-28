// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../../components/home';
import {default as TransitionGroup} from 'react-transition-group'; // ES6
class AppHome extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }



    render() {
        return (<>
            <TransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <CssBaseline />
                <Home />
            </TransitionGroup>
        </>
        );
    }
}

export default AppHome;

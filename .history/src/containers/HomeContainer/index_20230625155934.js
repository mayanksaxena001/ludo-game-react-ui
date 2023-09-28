// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../../components/home';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
class AppHome extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }



    render() {
        return (<>
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <CssBaseline />
                <Home />
            </ReactCSSTransitionGroup>
        </>
        );
    }
}

export default AppHome;

// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../../components/home';
import { CSSTransitionGroup } from 'react-transition-group'  
class AppHome extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }



    render() {
        return (<>
            <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <CssBaseline />
                <Home />
            </CSSTransitionGroup>
        </>
        );
    }
}

export default AppHome;

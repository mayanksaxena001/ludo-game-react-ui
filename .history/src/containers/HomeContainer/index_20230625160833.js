// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../../components/home';
class AppHome extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }



    render() {
        return (<>
                <CssBaseline />
                <Home />
        </>
        );
    }
}

export default AppHome;

// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../../components/home';
import { motion } from "framer-motion/dist/framer-motion";

class AppHome extends React.Component {
    componentWillUnmount() {
        //Put your Code in here
    }



    render() {
        return (<>
            <CssBaseline />
            <motion.div
                className="container text-center  bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <Home />
            </motion.div>
        </>
        );
    }
}

export default AppHome;

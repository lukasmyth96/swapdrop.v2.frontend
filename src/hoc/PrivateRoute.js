import React from 'react';
import { Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {

    const authenticated = localStorage.getItem("access") !== null;
    return (
        <>
        { authenticated ? props.children : <Redirect to="/" /> }
        </>
    );
};


export default PrivateRoute
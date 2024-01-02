import React from 'react';
// src/components/PrivateRoute.js
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { token } = useSelector(state => state.auth);

  return <>
    <Route
      {...rest}
      render={(props) => {
        return token ? <Component {...props} /> : <Navigate to="/login" />;
      }}
    />
  </>

}


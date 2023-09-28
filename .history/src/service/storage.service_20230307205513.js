import React from 'react';
const getToken = () => {
    //return token from storage
    return localStorage.getItem('authToken');
}
const setToken = (token) => {
    //store token in storage
    localStorage.setItem('authToken', token);
}

const clearStorage = () => {
    localStorage.clear();
}
export default { getToken, setToken, clearStorage }
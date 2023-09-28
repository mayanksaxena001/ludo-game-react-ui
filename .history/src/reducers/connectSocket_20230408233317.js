import React from 'react';
import io from 'socket.io-client';
import { connectSocketToServer, disconnectSocket, joinRoom, receiveMessage, reset, sendMessageToServer } from './socketReducer';

export const sendMessage = (data) => (dispatch) => {
    const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL
    if (socket) {
        configSocket(socket, dispatch);
        socket.emit('send_message', data);
        dispatch(sendMessageToServer(data));
    }
};

export const joinServerRoom = (data) => (dispatch) => {
    const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL
    if (socket) {
        configSocket(socket, dispatch);
        socket.emit("join_room", data);
        dispatch(joinRoom(data));
    }
};

export const clearGameData = () => (dispatch) => {
    console.log('clearing socket game data..');
    dispatch(reset());
}

export const connectSocket = () => async (dispatch) => {
    console.log('inside new socket service..');
    const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL

    configSocket(socket, dispatch);

    // socket.on("send_message", (data) => {
    //     dispatch(sendMessage(data));
    // });
    return socket;
};
function configSocket(socket, dispatch) {
    socket.on('connect', () => {
        console.log('socket connected ..');
        dispatch(connectSocketToServer());
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected ..');
        dispatch(disconnectSocket());
    });

    socket.on("received_message", (data) => {
        dispatch(receiveMessage(data));
    });

    socket.on("player_joined", (data) => {
        console.log('new player joined..', data);
        // dispatch(receiveMessage(data));
    });
}


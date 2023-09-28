import io from 'socket.io-client';
import { connectSocket, disconnectSocket, receiveMessage, sendMessage } from '../reducers/socketReducer';

export const Socket = () => async (dispatch) => {
    console.log('inside new socket service..');
    const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL

    socket.on('connect', () => {
        console.log('socket connected ..');
        dispatch(connectSocket(socket));
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected ..');
        dispatch(disconnectSocket());
    });

    socket.on("received_message", (data) => {
        dispatch(receiveMessage(data));
    });

    // socket.on("send_message", (data) => {
    //     dispatch(sendMessage(data));
    // });
    return socket;
};

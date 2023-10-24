import io from 'socket.io-client';
import { connectSocket, disconnectSocket, receiveMessage } from '../reducers/socketReducer';

export const socket = () => async (dispatch) => {
    const socket = io('http://localhost:3001'); // replace with your own server URL

    socket.on('connect', () => {
        dispatch(connectSocket());
    });

    socket.on('disconnect', () => {
        dispatch(disconnectSocket());
    });

    socket.on('message', (data) => {
        dispatch(receiveMessage(data));
    });
};
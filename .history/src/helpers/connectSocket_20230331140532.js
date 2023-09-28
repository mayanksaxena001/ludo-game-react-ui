import io from 'socket.io-client';
import { connectSocket, disconnectSocket, receiveMessage, sendMessage } from '../reducers/socketReducer';

export const Socket = () => async (dispatch) => {
    const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL

    socket.on('connect', () => {
        dispatch(connectSocket(socket));
    });

    socket.on('disconnect', () => {
        dispatch(disconnectSocket());
    });

    socket.on("received_message", (data) => {
        dispatch(receiveMessage(data));
    });

    // socket.on("send_message", (data) => {
    //     dispatch(sendMessage(data));
    // });
};

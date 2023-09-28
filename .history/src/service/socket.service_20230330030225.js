import React from 'react';
import io from 'socket.io-client';
class SocketService {
    constructor() {
        console.log('inside socket constructor');
        this.socket = io(process.env.REACT_APP_BASE_API_URL);
        //TODO : add more methods
        this.SocketChannelContext = React.createContext();

    }
    getContext() { return this.SocketChannelContext; }
    getSocket() { return this.socket; }

    joinRoom(room) {
        this.socket.emit("join_room", room);
    }

    onJoinRoomRequest(joinRoomHandler) {
        this.socket.on("join_room", joinRoomHandler);
    }


    receivedMessage(receivedMessage) {
        console.log('register message callback');
        this.socket.on("received_message", receivedMessage);
    }

    sendMessage(data) {
        console.log('sending message ...');
        this.socket.emit("send_message", data);
    }

    isConnected() {
        return this.socket.connected;
    }
}

export default new SocketService();


import React from 'react';
import io from 'socket.io-client';
class SocketService {
    constructor() {
        this.socket = io(process.env.REACT_APP_BASE_API_URL);
        //TODO : add more methods
        this.SocketContext = React.createContext();

    }
    getContext() { return this.SocketContext; }
    getSocket() { return this.socket; }

    joinRoom(room) {
        this.socket.emit("join_room", room);
    }


    receivedMessage(receivedMessage) {
        this.socket.on("received_message", (data) => receivedMessage(data));
    }

    sendMessage(data) {
        this.socket.emit("send_message", data);
    }

    isConnected() {
        return this.socket.connected;
    }
}

export default new SocketService();


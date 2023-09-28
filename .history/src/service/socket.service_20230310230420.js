import React from 'react';
import io from 'socket.io-client';


// getContext() { return this.SocketContext; }
// getSocket() { return this.socket; }

// joinRoom(room) {
//     this.socket.emit("join_room", room);
// }

// sendMessage(data) {
//     this.socket.emit("send_message", data);
// }

export const socket = io(process.env.REACT_APP_BASE_API_URL, { transports: ['websocket'] });
export const SocketContext = React.createContext();


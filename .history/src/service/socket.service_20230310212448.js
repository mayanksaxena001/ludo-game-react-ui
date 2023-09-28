import io from 'socket.io-client';
class SocketService {
    constructor() {
        this.socket = io(process.env.REACT_APP_BASE_API_URL);
        //TODO : add more methods

    }

    joinRoom(room, receivedMessage) {
        this.socket.emit("join_room", room);
        this.socket.on("received_message", (data) => {
            console.log('Received data at client ......', data);
            return receivedMessage(data);
        });
    }

    registerReceiveCallback(receivedMessage) {
    }

    sendMessage(data) {
        this.socket.emit("send_message", data);
    }

    isConnected() {
        return this.socket.connected;
    }
}

export default new SocketService();


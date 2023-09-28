import io from 'socket.io-client';
class SocketService {
    constructor() {
        this.socket = io(process.env.REACT_APP_BASE_API_URL);
        //TODO : add more methods
        this.socket.on("received_message", (data) => {
            console.log("Data Received at client : ", data);
        })
    }

    joinRoom(room) {
        this.socket.emit("join_room", room)
    }

    sendMessage(data) {
        this.socket.emit("send_message", data);
    }

    isConnected() {
        return this.socket.connected;
    }
}

export default new SocketService();
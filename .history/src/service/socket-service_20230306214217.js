import io from 'socket.io-client';
class SocketService {
    constructor() {
        const socket = io("http://localhost:8005");
        this.socket = socket;
        this.socket.on("received_message", (data) => {
            console.log("Data Received at client : ", data);
        })
    }

    joinRoom(room) {
        this.socket.emit("join_room", room)
    }

    sendMessage(msg, room) {
        this.socket.emit("send-message", { msg, room });
    }
}

export default new SocketService();
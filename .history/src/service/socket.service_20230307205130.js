import io from 'socket.io-client';
class SocketService {
    constructor() {
        const socket = io(process.env.REACT_APP_BASE_API_URL);
        this.socket = socket;
        //TODO : add more methods
        this.socket.on("received_message", (data) => {
            console.log("Data Received at client : ", data);
        })
    }

    joinRoom(room) {
        this.socket.emit("join_room", room)
    }

    sendMessage(msg, room) {
        this.socket.emit("send_message", { msg, room });
    }
}

export default new SocketService();
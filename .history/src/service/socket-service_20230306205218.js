import io from 'socket.io-client';
class SocketService{
    constructor(){
        const socket=io("http://localhost:8005");
        this.socket=socket;
    }

    sendMessage(msg){
        this.socket.emit("send-message",msg);
    }
}

export default new SocketService();
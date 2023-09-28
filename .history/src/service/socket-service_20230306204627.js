import io from 'socket.io-client';
class SocketService{
    constructor(){
        const socket=io("http://localhost:8005");
        this.socket=socket;
        socket.emit(msg);
    }

    sendMessage(msg){
        this.socket.emit(msg);
    }
}

export default SocketService;
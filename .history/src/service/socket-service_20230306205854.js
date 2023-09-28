import io from 'socket.io-client';
class SocketService{
    constructor(){
        const socket=io("http://localhost:8005");
        this.socket=socket;
        this.socket("received_message",(data)=>{
            console.log("Data Received at client : ",data);
        })
    }

    sendMessage(msg){
        this.socket.emit("send-message",msg);
    }
}

export default new SocketService();
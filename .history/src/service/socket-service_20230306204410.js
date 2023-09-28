import io from 'socket.io-client';
const socket=io("http://localhost:8005");
function SocketService(msg){
socket.emit(msg);
}

export default SocketService;
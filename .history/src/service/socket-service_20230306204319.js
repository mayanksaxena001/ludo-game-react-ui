import io from 'socket.io-client';
const socket=io.connect("http://localhost:8005");
function SocketService(msg){
socket.emit(msg);
}

export default SocketService;
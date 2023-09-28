import socketService from "../service/socket.service";

export const createMySocketMiddleware = () => {
    return storeAPI => {
        let socket = socketService.getSocket();

        socket.on("message", (message) => {
            storeAPI.dispatch({
                type: "SOCKET_MESSAGE_RECEIVED",
                payload: message
            });
        });

        return next => action => {
            if (action.type == "SEND_WEBSOCKET_MESSAGE") {
                socket.send(action.payload);
                return;
            }

            return next(action);
        }
    }
}
import React from 'react';
import io from 'socket.io-client';
import { chatMessages, connectSocketToServer, disconnectSocket, joinRoom, receiveMessage, resetSocketData, sendMessageToServer,setPlayerActive } from '../reducers/socketReducer';

export default class SocketController {
    constructor() {
        this.socket = null;
        console.log('socket controller constructor...');
    }
    startGame = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('start_game', data);
            // dispatch(setGameStarted(true));
        }
    };

    sendMessage = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('send_message', data);
            dispatch(sendMessageToServer(data));
        }
    };

    sendChatMessage = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('send_chat_message', data);
        }
    };

    diceRoll = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('dice_roll', data);
            // dispatch(setDiceValue(true));
        }
    };

    selectedToken = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('selected_token', data);
            // dispatch(setDiceValue(true));
        }
    };

    timeOut = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit('time_out', data);
            // dispatch(setDiceValue(true));
        }
    };

    joinServerRoom = (data) => (dispatch) => {
        if (this.socket) {
            this.socket.emit("join_room", data);
            dispatch(joinRoom(data));
        }
    };

    connectSocket = (token) => async (dispatch) => {
        console.log('connecting socket..');
        const socket = io(process.env.REACT_APP_BASE_API_URL);
        //     , {
        //     query: { token }
        // }
        if (!socket) return;
        this.configSocket(socket, dispatch);
        this.socket = socket;
    };

    disconnectSocket = () => async (dispatch) => {
        console.log('disconnect socket..');
        if (this.socket) {
            this.socket.disconnect();
        }
    };

    configSocket = (socket, dispatch) => {
        socket.on('connect', () => {
            console.log('socket connected ..');
            dispatch(connectSocketToServer());
        });

        socket.on('disconnect', () => {
            console.log('socket disconnected ..');
            dispatch(disconnectSocket());
        });

        socket.on("received_message", (data) => {
            dispatch(receiveMessage(data));
        });

        socket.on("chat_message_recieved", (data) => {
            dispatch(chatMessages(data));
        });

        socket.on("player_joined", (data) => {
            console.log('new player joined..', data);
            dispatch(setPlayerActive(data));
        });
    }

    clearGameData = () => (dispatch) => {
        console.log('clearing socket game data..');
        dispatch(resetSocketData());
    };
}



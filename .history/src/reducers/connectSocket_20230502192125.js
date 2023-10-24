import React from 'react';
import io from 'socket.io-client';
import isEmptyObject from '../helpers/util';
import { connectSocketToServer, disconnectSocket, joinRoom, receiveMessage, resetSocketData, sendMessageToServer } from './socketReducer';

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

    connectSocket = () => async (dispatch) => {
        console.log('connect socket..');
        if (isEmptyObject(this.socket)) {
            const socket = io(process.env.REACT_APP_BASE_API_URL); // replace with your own server URL
            this.configSocket(socket, dispatch);
            // socket.on("send_message", (data) => {
            //     dispatch(sendMessage(data));
            // });
            this.socket = socket;
        }
    };

    configSocket = (socket, dispatch) => {
        socket.on('connect', () => {
            console.log('socket connected ..');
            dispatch(connectSocketToServer());
        });

        socket.on('disconnect', () => {
            console.log('socket disconnected ..');
            this.socket = null;
            dispatch(disconnectSocket());
        });

        socket.on("received_message", (data) => {
            dispatch(receiveMessage(data));
        });

        socket.on("player_joined", (data) => {
            console.log('new player joined..', data);
            // dispatch(receiveMessage(data));
        });
    }

    clearGameData = () => (dispatch) => {
        console.log('clearing socket game data..');
        dispatch(resetSocketData());
    };
}


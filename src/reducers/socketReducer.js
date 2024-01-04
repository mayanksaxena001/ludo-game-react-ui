import { createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import GameData from '../models/gameData';
import Player from '../models/player';

const initialState = { loading: false, error: '', connected: false, player: Object.assign({}, Player), gameData: Object.assign({}, GameData), joinedRoom: false, messages: [], chatboxexpanded: false };


const socketSlice = createSlice({
    name: 'socket',
    initialState: initialState,
    reducers: {
        connectSocket(state, action) {
            if (!state.connected) state.connected = true;
        },
        disconnectSocket(state, action) {
            state.connected = false;
            state.joinedRoom = false;
            // state.gameData = {};
        },
        receiveMessage(state, action) {
            console.log('Data received...', action.payload);
            //TODO copy data;
            let data = action.payload;
            if (data) {
                {
                    if (data.diceCastComplete !== undefined) state.gameData.diceCastComplete = data.diceCastComplete;
                    if (data.connected !== undefined) state.connected = data.connected;
                    if (data.game && !state.gameData.game) state.gameData.game = data.game;
                    if (data.has_started != null) state.gameData.has_started = data.has_started;
                    if (data.has_stopped != null) state.gameData.has_stopped = data.has_stopped;
                    if (data.player_count) state.gameData.player_count = data.player_count;

                    if (data.token_count) state.gameData.token_count = data.token_count;
                    if (data.time_out) state.gameData.time_out = data.time_out;
                    if (data.dice_value) state.gameData.dice_value = data.dice_value;

                    if (data.player_turn) state.gameData.player_turn = data.player_turn;
                    if (data.player_count) state.gameData.player_count = data.player_count;
                    if (data.turns) state.gameData.turns = data.turns;
                    if (data.players) {
                        state.gameData.players = data.players;
                        if (state.player && state.player.id && state.gameData.players[state.player.id]) {
                            state.player = state.gameData.players[state.player.id];
                        }
                    }
                    if (data.home) {
                        state.gameData.home = data.home;
                    }
                }
            }
        },
        joinRoom(state, action) {
            if (state.connected && !state.joinedRoom) {
                console.log('joining room...', action.payload);
                state.joinedRoom = true;
            }
        },
        sendMessage(state, action) {
            console.log('sending message...', action.payload);
            // if (state.connected) {
            //     state.socket.emit("send_message", action.payload);
            // }
        },
        setGame(state, action) {
            if (action.payload) state.gameData.game = action.payload;
        },
        addPlayer(state, action) {
            let player = action.payload;
            if (player) state.player = player;
        },
        setPlayerCount(state, action) {
            state.gameData.player_count = action.payload;
        },
        setGameStopped(state, action) {
            state.gameData.has_stopped = action.payload;
        },
        setGameStarted(state, action) {
            state.gameData.has_started = action.payload;
        },
        setTokenCount(state, action) {
            state.gameData.token_count = action.payload;
        },
        setTimeout(state, action) {
            state.gameData.time_out = action.payload;
        },
        setDiceValue(state, action) {
            let data = action.payload;
            if (data) state.gameData.dice_value = data;
            // let player_turn = state.gameData.player_turn;
            // if (data !== 6) {
            //     player_turn = player_turn + 1;
            //     if (player_turn > state.gameData.player_count) player_turn = 1;//rolling turns
            // }
            // state.gameData.player_turn = player_turn;
        },
        setPlayerTurn(state, action) {
            state.gameData.player_turn = action.payload;
        },
        updateGameData(state, action) {
            //deep copy
            state.gameData = action.payload;
        },
        chatMessages(state, action) {
            console.log('chat message received...', action.payload);
            if (action.payload) state.messages.push(action.payload);
        },
        setChatboxExpanded(state, action) {
           state.chatboxexpanded = action.payload;
        },
        reset: () => initialState
    },
});

export const { connectSocket: connectSocketToServer, disconnectSocket, receiveMessage,
    joinRoom, sendMessage: sendMessageToServer, setGame, addPlayer, setPlayerCount,
    setGameStopped, setTokenCount, setTimeout,
    setDiceValue, setPlayerTurn, updateGameData, setGameStarted, reset: resetSocketData,
    chatMessages, setChatboxExpanded } = socketSlice.actions;
export default socketSlice.reducer;

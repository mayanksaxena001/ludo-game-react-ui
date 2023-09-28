import { createSlice, nanoid } from '@reduxjs/toolkit';
import GameData from '../models/gameData';

const initialState = GameData;

const addPlayerToGame = (indexCount, tokenCount, userID, username) => {
    let player = {};
    const color = GameData.colors[indexCount - 1];
    player.id = userID;
    player.username = username;
    player.player_turn = indexCount;
    player.house = {};
    player.house.id = nanoid();
    player.house.color = color;
    player.house.disabled = false;
    player.color = color;
    player.house.tokens = [];
    if (tokenCount) {
        for (let i = 1; i <= tokenCount; i++) {
            let token = {};
            token.id = nanoid();//TODO : not working
            token.color = color;
            token.disabled = false;
            token.active = false;
            player.house.tokens.push(token);
        }
    }
    return player;
}

const gameDataSlice = createSlice({
    name: 'gameData',
    initialState: initialState,
    reducers: {
        setGame(state, action) {
            state.game = action.payload;
        },
        addPlayer(state, action) {
            let playerCount = 0, ispresent = false;
            let data = action.payload;
            let userID = data.usereId, username = data.username;
            let players = state.players;
            for (var key in players) {
                const player = players[key];
                if (player.id === userID) ispresent = true;
                playerCount++;
            }
            if (!ispresent) {
                let indexCount = playerCount + 1;
                state.players[indexCount] = addPlayerToGame(indexCount, state.token_count, userID, username);
            }
        },
        setPlayerCount(state, action) {
            state.player_count = action.payload;
        },
        setGameStopped(state, action) {
            state.has_stopped = action.payload;
        },
        setGameStarted(state, action) {
            state.has_started = action.payload;
        },
        setTokenCount(state, action) {
            state.token_count = action.payload;
        },
        setTimeout(state, action) {
            state.time_out = action.payload;
        },
        setDiceValue(state, action) {
            state.dice_value = action.payload;
        },
        setPlayerTurn(state, action) {
            state.player_turn = action.payload;
        },
        updateGameData(state, action) {
            //deep copy
            state = action.payload;
        },
        clearState: (state, action) => {
            state = initialState;
        }

    },
});

export const { setGame, addPlayer, setPlayerCount,
    setGameStopped, setTokenCount, setTimeout,
    setDiceValue, setPlayerTurn, updateGameData, setGameStarted } = gameDataSlice.actions
export default gameDataSlice.reducer

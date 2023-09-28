import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Types from '../actions/actionTypes';
import gameService from '../service/game.service';

const initialState = { games: [], currentGame: {}, loading: false, error: '' };

export const joinGame = createAsyncThunk(Types.JOIN_GAME, async (data) => {
  const game = await gameService.joinGame(data);
  return game;
});

export const fetchGames = createAsyncThunk(Types.FETCH_ALL_GAMES, async () => {
  const games = await gameService.getAllActiveGames();
  return games;
});

export const createGame = createAsyncThunk(Types.CREATE_GAME, async (data) => {
  const game = await gameService.createGame(data);
  return game;
});

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    resetCurrentGame: (state, action) => {
      state.currentGame = {};
    },
    reset: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(createGame.fulfilled, (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.game) state.currentGame = data.game;
        state.loading = false;
        state.error = '';
      }
    })
      .addCase(createGame.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createGame.rejected, (state, action) => {
        if (action.error) state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        const data = action.payload;
        if (data) {
          if (data.games) state.games = data.games;
          state.loading = false;
          state.error = '';
        }
      })
      .addCase(fetchGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        if (action.error) state.error = action.error.message;
        state.loading = false;
      })
      .addCase(joinGame.fulfilled, (state, action) => {
        const data = action.payload;
        if (data) {
          if (data.gameInfo) {
            const games = state.games;
            games.forEach(element => {
              if (element.id === data.gameInfo.game_id) {
                state.currentGame = element;
              }
            });
          }
          state.loading = false;
          state.error = '';
        }
      })
      .addCase(joinGame.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(joinGame.rejected, (state, action) => {
        if (action.error) state.error = action.error.message;
        state.loading = false;
      })
  }
});

export const { reset: resetGameData, resetCurrentGame } = gameSlice.actions
export default gameSlice.reducer

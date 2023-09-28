const gameData = {
    game: {},
    has_started: false,
    has_stopped: false,
    player_count: 3,
    tokens: 4,
    dice_value: 0,
    player_turn: 1,
    players: {
        id: {
            id: String,
            player_turn: Number,
            tokens: Array
        }
    }
}
export default gameData;
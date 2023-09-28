import Game from "./game";
import Player from "./player";

const GameData = {
    game: Game,
    has_started: false,
    has_stopped: false,
    player_count: 2,
    token_count: 4,
    dice_value: 0,
    player_turn: 1,
    players: {}
}
export default GameData;
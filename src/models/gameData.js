import Game from "./game";

let GameData = {
    game: Game,
    has_started: false,
    has_stopped: false,
    player_count: 2,
    token_count: 2,
    time_out: 10,
    dice_value: -1,
    player_turn: -1,
    players: {},
    previousDiceValues: {},
    turns: {},
    move_token:false,
    diceCastComplete: false,
    selectedTokenId:'',
    colors: ['#ff0000', '#0000ff', '#008000', '#ffff00'],
    home:[]

}
export default GameData;
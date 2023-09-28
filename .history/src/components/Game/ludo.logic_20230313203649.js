import Player from '../Models/player';
import Token from '../Models/token';
const addPlayer = (indexCount, tokenCount, user,COLORS) => {
    let player_ = Player;
    player_.id = user.id;
    player_.username = user.username;
    player_.player_turn = indexCount;
    player_.house.id = indexCount;
    player_.color = COLORS[indexCount];
    console.log(player_.house.tokens);
    if (tokenCount) {
        for (let i = 1; i <= tokenCount; i++) {
            let token = Token;
            token.id = indexCount + ':' + i;
            player_.house.tokens.push(token);
        }
    }
    return player_;
}
export default [addPlayer]
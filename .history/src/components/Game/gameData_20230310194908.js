import { Game, GameData, User } from '../Models/models';
const gameData = {
    game: {
        id: '',
        room: 0,
        created_by: '',
        active: false
    },
    hasStarted: false,
    hasStopped: false,
    player_count: 4,
    tokens: 4,
    players: []
}
export default gameData;
interface Login {
    username: string;
    password: string;
}

interface Token {
    auth: boolean;
    token: string;
}

interface Signup {
    name: string;
    email: string;
    username: string;
    password: string;
    type: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    account: string;
    type: string;
    balance: number;
    active: boolean;
}

interface Game {
    id: string;
    room: number;
    created_by: string;
    active: boolean;
}

interface GameData {
    game: Game;
    hasStarted: boolean;
    hasStopped: boolean;
    players: number;
    tokens:number;
}
export { User, Signup, Token, Login,Game,GameData}
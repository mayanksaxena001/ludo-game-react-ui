const moveSeed = (playerId, tokenId, steps, data) => {
    if (data && data.players) {
        let playerData = data.players[playerId];
        let houseData = playerData.house;
        if (houseData) {
            const route = houseData.route;
            let tokens = houseData.tokens;
            let token = {},tokenPosition=0;;
            for (const key in tokens) {
                if (tokens[key] && tokens[key].id === tokenId) {
                    token = tokens[key];
                    tokenPosition=key;
                }
            }
            if (token) {
                let position = token.position;
                let newPosition = null;
                for (const value in route) {
                    if (route[value] === position) {
                        newPosition = value + steps;
                    }
                }
                if (newPosition) {
                    token.position = route[newPosition];
                }
                data.players[playerId].house.tokens[tokenPosition] = token;
                return data;
            }
        }
    }
    return null;
}

export default {
    moveSeed
}
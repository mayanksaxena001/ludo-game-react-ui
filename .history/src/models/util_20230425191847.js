module.exports = {
    getAllActiveTokens: (data) => {
        let allTokens = {};
        for (let key in data.players) {
            let player = data.players[key];
            if (player && player.house) {
                player.house.tokens.map(token => {
                    if (token && token.position) {
                        if (allTokens[token.position]) {
                            allTokens[token.position].push(token);
                        } else {
                            allTokens[token.position] = [];
                            allTokens[token.position].push(token);
                        }
                    }
                });
            }
        }
    }
}
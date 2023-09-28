module.exports = {
    getAllActiveTokens: (data) => {
        let tokens = {};
        for (let key in data.players) {
            let player = data.players[key];
            if (player && player.house) {
                player.house.tokens.map(token => {
                    if (token && token.position) {
                        if (tokens[token.position]) {
                            tokens[token.position].push(token);
                        } else {
                            tokens[token.position] = [];
                            tokens[token.position].push(token);
                        }
                    }
                });
            }
        }

        return tokens;
    },

    getVerticalBoxes: () => { },
    getHorizontalBoxes: () => { }
}
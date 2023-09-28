let COLORED_BOXES_ID = [8, 9, 10, 11, 12, 17];
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
    getHorizontalBoxes: (id, data) => {
        const map = new Map();
        let allTokens = getAllActiveTokens(data);
        for (let i = 1; i <= 18; i++) {
            const boxId = id + '-' + i;
            let tokens = allTokens[boxId] ? allTokens[boxId] : [];
            const box = <Box tokens={tokens} id={boxId} height={height} width={width} handleTokenMove={handleTokenMove} />;
            map.set(i, box);
        }
        COLORED_BOXES_ID.map(boxId => {
            const boxId_ = id + '-' + boxId;
            let tokens = allTokens[boxId_] ? allTokens[boxId_] : [];
            const box = <Box tokens={tokens} id={boxId_} color={color} height={height} width={width} handleTokenMove={handleTokenMove} />;
            map.set(boxId, box);
        });
        return Array.from(map.values());
    }
}
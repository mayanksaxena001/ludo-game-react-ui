import React from 'react';
import Box from '../components/box';
let COLORED_BOXES_ID = [8, 9, 10, 11, 12, 17];
const SAFE_BOXES_ID_1 = 4;
const SAFE_BOXES_ID_2 = 17;

const getAllActiveTokens = (data) => {
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
}
const getAllBoxes = (data,id, height, width,color,isEnabled,handleTokenMove,moveTokenPosition) => {
    let allTokens = getAllActiveTokens(data);
    let map = new Map();
    let selectedTokenId=data.selectedTokenId;
    for (let i = 1; i <= 18; i++) {
        const box = getBox(data,id,i,allTokens, height, width,'',isEnabled,handleTokenMove,moveTokenPosition,selectedTokenId);
        map.set(i, box);
    }

    COLORED_BOXES_ID.map(boxId => {
        const box = getBox(data,id,boxId,allTokens, height, width,color,isEnabled,handleTokenMove,moveTokenPosition);
        map.set(boxId, box);
    });
    return map;
}

const getBox=(data,id,i,allTokens, height, width,color,isEnabled,handleTokenMove,moveTokenPosition,selectedTokenId)=>{
    const boxId = id + '-' + i;
    let tokens = allTokens[boxId] ? allTokens[boxId] : [];
    const isSafeBox=i===SAFE_BOXES_ID_1 || i===SAFE_BOXES_ID_2 
    ? true:false;
    let move_token=false;
    if(boxId===moveTokenPosition) {
        move_token=true;
        tokens=fetchToken(data,selectedTokenId);
    }
    let box=null;
    if(color){
        box = <Box isEnabled={isEnabled} tokens={tokens} id={boxId} color={color} height={height} width={width} handleTokenMove={handleTokenMove} isSafeBox={isSafeBox} move_token={move_token}/>;
    } 
    else{
        box = <Box isEnabled={isEnabled} tokens={tokens} id={boxId}  height={height} width={width} handleTokenMove={handleTokenMove} isSafeBox={isSafeBox} move_token={move_token}/>;
    }
    return box;
}

const fetchToken=(data,selectedTokenId)=>{
    let tokens=[];
    for (let key in data.players) {
        let player = data.players[key];
        if (player && player.house) {
            player.house.tokens.map(token => {
                if (token && token.id===selectedTokenId) {
                    tokens.push(token);
                }
            });
        }
    }
    return tokens;
}
export { getAllActiveTokens, getAllBoxes }
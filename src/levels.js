//import Brick from "src/Brick";

import Brick from "/src/brick.js";

export function buildLevel(game, level){
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick == 1){
                let position = {
                    x: 20 + 103 * brickIndex,
                    y: 30 + 35 * rowIndex
                };
                
                bricks.push(new Brick(game, position));
            }
        })
    })
    return bricks;
};

export const levelTest = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1]
];

export const level0 = [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1]
];

export const level1 = [
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];
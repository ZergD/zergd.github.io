//import Brick from "src/Brick";

import Brick from "/src/brick.js";

export function buildLevel(game, level){
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick == 1){
                let position = {
                    x: 50 + 120 * brickIndex,
                    y: 30 + 50 * rowIndex
                };
                
                bricks.push(new Brick(game, position));
            }
        })
    })
    console.log(bricks);
    console.log(typeof bricks);
    console.log(bricks[0]);
    console.log(typeof bricks[0][1]);
    return bricks;
};

export const level0 = [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1]
];

export const level1 = [
    [0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1]
];
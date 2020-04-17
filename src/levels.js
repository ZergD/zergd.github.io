//import Brick from "src/Brick";

import Brick from "/src/brick.js";

export function buildLevel(game, level){
    console.log("building level: " + level);
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick !== 0){
                
                let position = {
                    //x: 20 + 103 * brickIndex,
                    //y: 30 + 35 * rowIndex
                    x: 100 + 90 * brickIndex,
                    y: 30 + 90 * rowIndex
                };

                let mapping_id_to_picture = {
                    1 : "marc",
                    3 : "cloak",
                    4 : "kissy",
                    2 : "stephane",
                    5 : "tito",
                    6 : "razy"
                }
                
                // if it is cloak, make it more rectangular for the hamburger
                if (brick === 3){
                    let position = {
                        x: 20 + 180 * brickIndex,
                        y: 30 + 90 * rowIndex
                    };
                }
                
                bricks.push(new Brick(game, position, mapping_id_to_picture[brick]));
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
    [0, 1, 0, 1, 0, 1, 0],
    [5, 5, 5, 5, 5, 5, 5],
    [4, 4, 0, 0, 0, 4, 4],
    [2, 2, 0, 0, 0, 2, 2],
    [3, 0, 0, 0, 0, 3, 0],
    [6, 6, 6, 6, 6, 6, 6]
];

export const level1 = [
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];
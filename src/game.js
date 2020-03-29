import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import Brick from '/src/brick.js';
import { buildLevel, level0, level1 } from './levels.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        let bricks = buildLevel(this, level1);
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        
        new InputHandler(this.paddle);
        
    }

    update(deltaTime){
        this.gameObjects.forEach(object => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.marked_for_deletion);
    }

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}


// let bricks = [];
// for(let i = 0; i < 5; i++){
//     bricks.push(new Brick(this, {x: i * 100, y: 30}))
// }
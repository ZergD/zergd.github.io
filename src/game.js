import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import Brick from './brick.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = [];
        for(let i = 0; i < 5; i++){
            bricks.push(new Brick(this, {x: i * 100, y: 30}))
        }
        this.gameObjects = [this.ball, this.paddle, ...bricks];
        
        new InputHandler(this.paddle);
        
    }

    update(deltaTime){
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
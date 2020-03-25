import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.gameObjects = [this.ball, this.paddle];
        
        new InputHandler(this.paddle);
    }

    update(deltaTime){
        // this.ball.update(deltaTime);
        // this.paddle.update(deltaTime);
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
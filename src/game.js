import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import Brick from '/src/brick.js';
import { buildLevel, level0, level1 } from './levels.js';

const GAMESTATE = {
    PAUSED:  0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};


export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.gameState = GAMESTATE.RUNNING;
        let bricks = buildLevel(this, level1);
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        
        new InputHandler(this.paddle, this);
        
    }

    update(deltaTime){
        if ( this.gameState == GAMESTATE.PAUSED) return;
        this.gameObjects.forEach(object => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.marked_for_deletion);

        // nbBricks + paddle + ball
        if(this.gameObjects.length == 2){
            console.log("Victory");
        }
    }

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));

        // draw pause screen
        if(this.gameState == GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; 
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause(){
        if (this.gameState == GAMESTATE.RUNNING){
            this.gameState = GAMESTATE.PAUSED;
        }
        else{
            this.gameState = GAMESTATE.RUNNING;
        }
        console.log("game was toggled");
    }
}


// let bricks = [];
// for(let i = 0; i < 5; i++){
//     bricks.push(new Brick(this, {x: i * 100, y: 30}))
// }
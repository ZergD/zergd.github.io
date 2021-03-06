import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import Brick from '/src/brick.js';
//import TrailShadow from "/src/trailShadow.js";
import { buildLevel, level0, level1, levelTest } from './levels.js';

export const GAMESTATE = {
    PAUSED:  0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    VICTORY: 4,
    NEWLEVEL: 5,
    GG: 6,
};


export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAMESTATE.RUNNING;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle, this);
        this.gameObjects = []
        this.lives = 3;
        this.bricks = [];
        //this.levels = [levelTest, level0, level1]
        this.levels = [level1];
        this.currentLevel = -1;
        this.msgError = "";
    }

    draw_trailShadow(){
        x = this.ball.oldPosition.x;
        y = this.ball.oldPosition.y;
        this.gameObjects.push(new TrailShadow(x, y));
    }

    start(){
        if (this.gameState !== GAMESTATE.MENU && this.gameState !== GAMESTATE.NEWLEVEL) return;
        // if (this.gameState !== GAMESTATE.MENU) return;
        this.timeStart = Date.now()
        
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);

        this.gameObjects = [this.ball, this.paddle];
        //this.gameObjects = [this.paddle];
        
        this.gameState = GAMESTATE.RUNNING;
        console.log("Game Starting... current game state = " + this.gameState);
    }

    update(deltaTime){
        // we update runtime
        if (this.gameState === GAMESTATE.RUNNING){
            // this.runtime_ms = Date.now() - this.timeStart;
            // console.log(`seconds elapsed = ${Math.floor(this.runtime_ms/1000)}`);

            if (this.lives === 0) this.gameState = GAMESTATE.GAMEOVER;

            if ( this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.MENU) return;
            
            [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime));
            this.bricks = this.bricks.filter(object => !object.marked_for_deletion);



            // this updates all the objects
            //this.gameObjects.forEach(object => object.update(deltaTime));

            // this allows to delete touched bricks
            //this.gameObjects = this.gameObjects.filter(object => !object.marked_for_deletion);

            //console.log(this.ball.oldPosition.x, this.ball.oldPosition.y);
            //this.gameObjects.push(new TrailShadow(this.ball.oldPosition));

            // nbBricks + paddle + ball
            if(this.gameState === GAMESTATE.VICTORY || (this.bricks.length === 0) ){
                
                // GG END GAME
                if (this.currentLevel + 1 === this.levels.length){
                    this.gameState = GAMESTATE.GG;
                }
                // LOAD NEXT LEVEL
                else{
                    this.gameState = GAMESTATE.NEWLEVEL;
                    this.currentLevel ++;
                    this.start();
                }
                
                // console.log("Victory");
            }
        }
    }

    draw(ctx, myReqID = 0){
        // this.gameObjects.forEach(object => object.draw(ctx));
        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));
        this.displayLives(ctx);
        

        // draw pause screen
        if(this.gameState == GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; 
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "orange";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
        
        // draw pause screen
        if(this.gameState == GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)"; 
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Welcome to Brick Burst", this.gameWidth / 2, this.gameHeight / 2 - 200);
            ctx.fillText("Press Space Bar to start the game!", this.gameWidth / 2, this.gameHeight / 2);
        }
        
        if(this.gameState == GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(120, 0, 0, 1)"; 
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Game Over!", this.gameWidth / 2, this.gameHeight / 2);
        }
        
        // GG STATE
        if(this.gameState == GAMESTATE.GG) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 120, 0, 1)"; 
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GG !!", this.gameWidth / 2, this.gameHeight / 2);
            ctx.fillText("Looks like you're worthy of a special prize...", this.gameWidth / 2, this.gameHeight / 2 + 100);

        }

        if (this.msgError !== ""){
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(this.msgError, this.gameWidth / 2, this.gameHeight / 2 + 200);
        }
    }
    
    displayLives(ctx){
        // display lives on bot left side
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(this.lives + " lives", 75, this.gameHeight - 50);
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


// window.setInterval(function(){
//     //draw trailShaow
//     console.log("this ball = " + this.ball);
//     if ( this.oldPosition.x != null ){
//         let x = this.oldPosition.x;
//         let y = this.oldPosition.y;
//         this.game.gameObjects.push(new TrailShadow(x, y));
//     }
// }, 1000);
import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
    
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);


// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 18, 100, 98);
// ctx.fillStyle = "black";
// ctx.fillRect(100, 120, 100, 100);

paddle.draw(ctx);
ball.draw(ctx);

new InputHandler(paddle);

// we draw image loaded in html





// main game loop






let lastTime = 0;
//add_image();
/////////////////////// FUNCTIONS PART ///////////////////////
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // ctx.fillStyle = "#f00";
    // ctx.fillRect(20, 18, 100, 98);
    // ctx.fillStyle = "black";
    // ctx.fillRect(100, 120, 100, 100);

    ball.update(deltaTime);
    paddle.update(deltaTime);

    paddle.draw(ctx);
    ball.draw(ctx);
    
    requestAnimationFrame(gameLoop);
};

// requestAnimationFrame(gameLoop);
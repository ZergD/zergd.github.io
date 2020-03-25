import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
    
//add_image();

ctx.fillStyle = "#f00";
ctx.fillRect(20, 18, 100, 98);
ctx.fillStyle = "black";
ctx.fillRect(100, 120, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

let lastTime = 0;

new InputHandler(paddle);

// we draw image loaded in html
let img_ball = document.getElementById("imgBall");

ctx.drawImage(img_ball, 250, 250);




// main game loop
//gameLoop();






/////////////////////// FUNCTIONS PART ///////////////////////
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    ctx.fillStyle = "#f00";
    ctx.fillRect(20, 18, 100, 98);
    ctx.fillStyle = "black";
    ctx.fillRect(100, 120, 100, 100);

    paddle.update(deltaTime);
    paddle.draw(ctx);
    
    requestAnimationFrame(gameLoop);
};
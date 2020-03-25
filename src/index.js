import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
    
// ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

 const mainDiv = document.getElementById("mainDiv");
 const background_img = new Image();
 background_img.src = "imgs/background_img.jpg";
 background_img.onload = () => {
     
     mainDiv.appendChild(background_img, 0, 0);
 }

ctx.fillStyle = "#f00";
ctx.fillRect(20, 18, 100, 98);
ctx.fillStyle = "black";
ctx.fillRect(100, 120, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

let lastTime = 0;

new InputHandler(paddle);

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
}

gameLoop();
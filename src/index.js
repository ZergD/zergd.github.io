import Game from '/src/game.js';

let canvas = document.getElementById("gameScreen");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let GAME_WIDTH = canvas.width;
let GAME_HEIGHT = canvas.height;
    
// initialize the game
let game = new Game(ctx, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
//add_image();
/////////////////////// FUNCTIONS PART ///////////////////////
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //game.update(deltaTime);
    //game.draw(ctx)
    
    // setTimeout(function(){
    //     requestAnimationFrame(gameLoop);
    // }, 0.1);
    requestAnimationFrame(gameLoop);
};
// main game loop
requestAnimationFrame(gameLoop);
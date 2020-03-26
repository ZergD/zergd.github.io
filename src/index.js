import Game from '/src/game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
    
// initialize the game
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// start the game
game.start();

let lastTime = 0;
//add_image();
/////////////////////// FUNCTIONS PART ///////////////////////
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);

    game.draw(ctx)
    
    // setTimeout(function(){
    //     requestAnimationFrame(gameLoop);
    // }, 0.1);
    requestAnimationFrame(gameLoop);
};
// main game loop
requestAnimationFrame(gameLoop);
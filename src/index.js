import Game from '/src/game.js';

let canvas = document.getElementById("gameScreen");
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.width = 800;
canvas.height = window.innerHeight;
console.log(window.innerWidth);
let ctx = canvas.getContext("2d");
 
// let GAME_WIDTH = canvas.width;
// let GAME_HEIGHT = canvas.height;
let GAME_WIDTH = 800;
let GAME_HEIGHT = 900;
    
// initialize the game
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

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

// function handleOrientation(event) {
//     var x = event.beta;  // In degree in the range [-180,180]
//     var y = event.gamma; // In degree in the range [-90,90]
//   
//     output = document.getElementById("test_id");
//     output.innerHTML  = "beta : " + x + "\n";
//     output.innerHTML += "gamma: " + y + "\n";
//   
//     // Because we don't want to have the device upside down
//     // We constrain the x value to the range [-90,90]
//     if (x >  90) { x =  90};
//     if (x < -90) { x = -90};
//   
//     // To make computation easier we shift the range of 
//     // x and y to [0,180]
//     x += 90;
//     y += 90;
//   
//     // 10 is half the size of the ball
//     // It center the positioning point to the center of the ball
//     //ball.style.top  = (maxY*y/180 - 10) + "px";
//     //ball.style.left = (maxX*x/180 - 10) + "px";
//   }
//   
//   window.addEventListener('deviceorientation', handleOrientation);

// var ball   = document.querySelector('.ball');
// var garden = document.querySelector('.garden');
// var output = document.querySelector('.output');
// 
// var maxX = garden.clientWidth  - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;
// 
// function handleOrientation(event) {
//   var x = event.beta;  // In degree in the range [-180,180]
//   var y = event.gamma; // In degree in the range [-90,90]
// 
//   output.innerHTML  = "beta : " + x + "\n";
//   output.innerHTML += "gamma: " + y + "\n";
// 
//   // Because we don't want to have the device upside down
//   // We constrain the x value to the range [-90,90]
//   if (x >  90) { x =  90};
//   if (x < -90) { x = -90};
// 
//   // To make computation easier we shift the range of 
//   // x and y to [0,180]
//   x += 90;
//   y += 90;
// 
//   // 10 is half the size of the ball
//   // It center the positioning point to the center of the ball
//   ball.style.top  = (maxY*y/180 - 10) + "px";
//   ball.style.left = (maxX*x/180 - 10) + "px";
// }
// 
// // working example
// window.addEventListener('deviceorientation', handleOrientation);
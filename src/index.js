import Game from '/src/game.js';
import {GAMESTATE} from '/src/game.js';


let canvas = document.getElementById("gameScreen");
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.width = 800;
canvas.height = 1000;
console.log(window.innerWidth);
let ctx = canvas.getContext("2d");
 
let GAME_WIDTH = canvas.width;
let GAME_HEIGHT = canvas.height;
//let GAME_WIDTH = 800;
//let GAME_HEIGHT = 1000;
    
// initialize the game
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// ID to cancelAnimationFrame when GG Screen
let requestID = null;

let lastTime = 0;
let counter = 0;
let display_gg_video_flag = false;
let interval_clear_var = null;
//add_image();
/////////////////////// FUNCTIONS PART ///////////////////////
function gameLoop(timestamp, stop_flag = false) {
    console.log("looping");

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);

    game.draw(ctx, requestID)

    
    // setTimeout(function(){
    //     requestAnimationFrame(gameLoop);
    // }, 0.1);
    
    //console.log(counter);
    //counter++;
    if (game.gameState == GAMESTATE.GG){
        console.log("looping GGGGGGGGGGGGGGG");
        window.cancelAnimationFrame(requestID);

        // time in seconds
        let maxTime_s = 3;
        let display = document.querySelector("#time");
        startTimer(maxTime_s, display);


        //canvas.style.display = "none";
        //canvas.style.height = "200";
        

        //let vid = document.getElementById("gg_video");
        //vid.style.display = "";
        //vid.play();
        
        //requestID = window.requestAnimationFrame(function(){
        //    gameLoop(0, True);
        //});
    }
    else{
        requestID = window.requestAnimationFrame(gameLoop);
    }


};

window.requestAnimationFrame(gameLoop);

console.log("last thing to do");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval_clear_var = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display_gg_video_flag = true;
            console.log("timer finished");
            canvas.style.display = "none";
            let vid = document.getElementById("gg_video");
            vid.style.display = "";
            vid.loop = true;
            vid.play();
            clearInterval(interval_clear_var);

        }
    }, 1000);
}
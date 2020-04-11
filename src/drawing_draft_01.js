// import load_background from "/src/utils.js";
// import display_coords_real_time from "./utils.js";

console.log("loaded drawing_draft_01 files");

let canvas = document.getElementById("gameScreen");
// c will be for context for all documents
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let screen_position_display = {
    x: 75,
    y: canvas.height - 100
}

//----------------------------------------------- Event listeners ------------------------------------------------
addEventListener("mousemove", event => {
    let x = event.clientX;
    let y = event.clientY;
    let event_res = {
        x : x,
        y : y
    }
    display_coords_real_time(event_res, screen_position_display, c, canvas.width, canvas.height);
    //animateCircles(mouse.x, mouse.y);
});

//---------------------------------------------------- MAIN  ----------------------------------------------------

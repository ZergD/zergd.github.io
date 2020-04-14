
// casse brique - game 

let canvas = document.getElementById("gameScreen");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let GAME_WIDTH = canvas.width;
let GAME_HEIGHT = canvas.height;
let BOT_SEPARATION_HEIGHT = GAME_HEIGHT - 100;

draw_bot_separation();

function draw_bot_separation(){
    ctx.beginPath();
    // from 
    ctx.moveTo(0, BOT_SEPARATION_HEIGHT)
    // to
    ctx.lineTo(GAME_WIDTH, BOT_SEPARATION_HEIGHT);
    ctx.strokeStyle = "white";
    ctx.stroke();
}

const mouse = {
    x: undefined,
    y: undefined
}

//----------------------------------------------- Event listeners ------------------------------------------------
addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    display_coords_real_time(mouse.x, mouse.y);
    //animateCircles(mouse.x, mouse.y);
});

addEventListener("mousedown", event => {
   mouse.x = event.clientX;
   mouse.y = event.clientY;
   whichButton(event);
   //drawCircle(mouse.x, mouse.y);
});

addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

//--------------------------------------------------- Objects ----------------------------------------------------
function Circle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedadd = 0;
    this.velocity = {
        x: Math.random() - 0.5 + this.speedadd,
        y: Math.random() - 0.5 + this.speedadd
    }

}

Circle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

}

function display_coords_real_time(x, y){
    ctx.clearRect(0, BOT_SEPARATION_HEIGHT + 10, GAME_WIDTH, GAME_HEIGHT);
    //ctx.rect(0.5, BOT_SEPARATION_HEIGHT + 1, GAME_WIDTH, GAME_HEIGHT);
    let text = "" + x + " " + y
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, 75, GAME_HEIGHT - 50);
    
};

Object.prototype.update = function(){
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;
}

let circles = [];
function init(){
    for (let i = 0; i < 100; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 5;
        const color = "blue";
        circles.push(new Circle(x, y, radius, color));
    }
}

// function animate(){
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// 
//     circles.forEach(circle => {
//         circle.update();
//     })
// }



function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.closePath();
}

function whichButton(event){
    var e = e || window.event;
    let btnCode;
    // precaution taken from stackoverflow
    if("object" === typeof event){
        btnCode = e.button;
    }
    switch(btnCode){
        case 0:
            console.log("Left button clicked");
            break;
        case 1:
            console.log("Middle button clicked");
            break;
        case 2:
            console.log("Right button clicked");
            ctx.clearRect(0, 0, GAME_WIDTH, BOT_SEPARATION_HEIGHT - 10);
            break;
        
        default:
            console.log("Unexpected code : " + btnCode);

    }

}


console.log("hello");




function doJob(){
    ctx.clearRect(0, 0, canvas.width, BOT_SEPARATION_HEIGHT - 10);
    circles.forEach(circle => {
        circle.update();
    })
}


let box1 = {
    x: 120, y: 170,
    w: 75, h: 50
};

let box2 = {
    x: 400, y: 170,
    w: 75, h: 50
};


// define boxes
let boxes = [];
boxes.push(box1, box2);
console.log(boxes);

// define connectors
let connector1 = {
    box1:0, box2:1
}
let connectors = []
connectors.push(connector1);

function draw(){
    //clear the canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    for (let i = 0; i < boxes.length; i++){
        let box = boxes[i];
        ctx.fillRect(box.x, box.y, box.w, box.h);
    }

    for (let i =  0; i < connectors.length; i++){
        let connector = connectors[i];
        let box1 = boxes[connector.box1]; // boxes[0]
        let box2 = boxes[connector.box2]; // boxes[1]
        ctx.beginPath();
        ctx.moveTo(box1.x + box1.w / 2, box1.y + box1.h / 2);
        ctx.lineTo(box2.x + box2.w / 2, box2.y + box2.h / 2);
        ctx.stroke();
    }
}

draw();

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

// addEventListener("mousedown", event => {
addEventListener("mousedown", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    whichButton(event);
    drawCircle(mouse.x, mouse.y);
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

// Object.prototype.update = function(){
//     this.draw();
// 
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;
// }

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

function doJob(){
    ctx.clearRect(0, 0, canvas.width, BOT_SEPARATION_HEIGHT - 10);
    circles.forEach(circle => {
        circle.update();
    })
}


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

// function animateCircles(event){
//     var circle = document.createElement("div");
//     circle.setAttribute("class", "circle");
//     //document.body.appendChild(circle);
//     document.canvas.appendChild(circle);
// 
//     circle.style.left = event.clientX + "px";
//     circle.style.top = event.clientY + "px";
// 
//     circle.style.transition = "all 0.5s linear 0s";
// 
//     circle.style.left = circle.offsetLeft - 20 + "px";
//     circle.style.top = circle.offsetTop - 20 + "px";
//     
//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "5px";
//     circle.style.opacity = 0;
// }



//init();
// const interval = setInterval(function() {
//     doJob();
// }, 1000);
//animate();

/// 
/// 
// ----------------------------------------
        // Particle
        // ----------------------------------------

// function Particle( x, y, radius ) {
//     this.init( x, y, radius );
// }
// 
// Particle.prototype = {
// 
//     init: function( x, y, radius ) {
// 
//         this.alive = true;
// 
//         this.radius = radius || 10;
//         this.wander = 0.15;
//         this.theta = random( TWO_PI );
//         this.drag = 0.92;
//         this.color = '#fff';
// 
//         this.x = x || 0.0;
//         this.y = y || 0.0;
// 
//         this.vx = 0.0;
//         this.vy = 0.0;
//     },
// 
//     move: function() {
// 
//         this.x += this.vx;
//         this.y += this.vy;
// 
//         this.vx *= this.drag;
//         this.vy *= this.drag;
// 
//         this.theta += random( -0.5, 0.5 ) * this.wander;
//         this.vx += sin( this.theta ) * 0.1;
//         this.vy += cos( this.theta ) * 0.1;
// 
//         this.radius *= 0.96;
//         this.alive = this.radius > 0.5;
//     },
// 
//     draw: function( ctx ) {
// 
//         ctx.beginPath();
//         ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// };
// 
// // ----------------------------------------
// // Example
// // ----------------------------------------
// 
// var MAX_PARTICLES = 280;
// var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
// 
// var particles = [];
// var pool = [];
// 
// var demo = Sketch.create({
//     container: document.getElementById( 'container' ),
//     retina: 'auto'
// });
// 
// demo.setup = function() {
// 
//     // Set off some initial particles.
//     var i, x, y;
// 
//     for ( i = 0; i < 20; i++ ) {
//         x = ( demo.width * 0.5 ) + random( -100, 100 );
//         y = ( demo.height * 0.5 ) + random( -100, 100 );
//         demo.spawn( x, y );
//     }
// };
// 
// demo.spawn = function( x, y ) {
//     
//     var particle, theta, force;
// 
//     if ( particles.length >= MAX_PARTICLES )
//         pool.push( particles.shift() );
// 
//     particle = pool.length ? pool.pop() : new Particle();
//     particle.init( x, y, random( 5, 40 ) );
// 
//     particle.wander = random( 0.5, 2.0 );
//     particle.color = random( COLOURS );
//     particle.drag = random( 0.9, 0.99 );
// 
//     theta = random( TWO_PI );
//     force = random( 2, 8 );
// 
//     particle.vx = sin( theta ) * force;
//     particle.vy = cos( theta ) * force;
// 
//     particles.push( particle );
// };
// 
// demo.update = function() {
// 
//     var i, particle;
// 
//     for ( i = particles.length - 1; i >= 0; i-- ) {
// 
//         particle = particles[i];
// 
//         if ( particle.alive ) particle.move();
//         else pool.push( particles.splice( i, 1 )[0] );
//     }
// };
// 
// demo.draw = function() {
// 
//     demo.globalCompositeOperation  = 'lighter';
// 
//     for ( var i = particles.length - 1; i >= 0; i-- ) {
//         particles[i].draw( demo );
//     }
// };
// 
// demo.mousemove = function() {
// 
//     var particle, theta, force, touch, max, i, j, n;
// 
//     for ( i = 0, n = demo.touches.length; i < n; i++ ) {
// 
//         touch = demo.touches[i], max = random( 1, 4 );
//         for ( j = 0; j < max; j++ ) {
//             demo.spawn( touch.x, touch.y );
//         }
// 
//     }
// };

// Sketch.create({
//     setup() {
//       this.r = this.g = this.b = random(100, 200)
//     },
//     mousemove() {
//       this.r = 255 * (this.mouse.x / this.width)
//       this.g = 255 * (this.mouse.y / this.height)
//       this.b = 255 * abs(cos(PI * this.mouse.y / this.width))
//     },
//     draw() {
//       this.fillStyle = `rgb(${~~this.r},${~~this.g},${~~this.b})`
//       this.fillRect(0, 0, this.width, this.height)
//     }
//   })


console.log("hello");